/**
 * paymentController.js — Panoply
 * Handles payment initialization and verification via Paystack.
 *
 * Escrow flow:
 *   1. Customer initializes payment → Paystack checkout opens
 *   2. Customer pays → Paystack sends webhook or customer verifies
 *   3. Payment stored with status "held" (escrow)
 *   4. Job completed → payment released to provider
 *   5. Job cancelled → payment refunded to customer
 *
 * Using Paystack test mode — no real money involved.
 */

const prisma = require("../config/prisma");
const axios  = require("axios");

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_BASE   = "https://api.paystack.co";

// ── Initialize payment ─────────────────────────────────────
const initializePayment = async (req, res) => {
    try {
        const { jobId, amount } = req.body;

        if (!jobId || !amount) {
            return res.status(400).json({
                message: "jobId and amount are required."
            });
        }

        const job = await prisma.serviceRequest.findUnique({
            where: { id: parseInt(jobId) },
            include: {
                customer: { select: { email: true, fullName: true } }
            }
        });

        if (!job) {
            return res.status(404).json({ message: "Job not found." });
        }

        if (job.customerId !== req.user.id) {
            return res.status(403).json({
                message: "Only the customer can pay for this job."
            });
        }

        if (job.status !== "accepted" && job.status !== "in_progress") {
            return res.status(400).json({
                message: "Payment can only be made for accepted or in-progress jobs."
            });
        }

        // Initialize transaction with Paystack
        // Amount must be in kobo (multiply naira by 100)
        const response = await axios.post(
            `${PAYSTACK_BASE}/transaction/initialize`,
            {
                email:     job.customer.email,
                amount:    amount * 100,
                currency:  "NGN",
                reference: `panoply-job-${jobId}-${Date.now()}`,
                metadata: {
                    jobId:        jobId,
                    customerId:   req.user.id,
                    customerName: job.customer.fullName,
                    cancel_action: `http://localhost:5500/client/booking-history.html`
                },
                callback_url: `http://localhost:5500/client/payment-callback.html`
            },
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const { authorization_url, reference, access_code } = response.data.data;

        // Store payment record in escrow
        await prisma.payment.create({
            data: {
                jobId:     parseInt(jobId),
                amount:    amount,
                reference: reference,
                status:    "pending",
                paidBy:    req.user.id,
                paidTo:    job.providerId
            }
        });

        res.status(200).json({
            message:           "Payment initialized.",
            authorization_url,
            reference,
            access_code
        });

    } catch (error) {
        console.error("Initialize payment error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

// ── Verify payment ─────────────────────────────────────────
const verifyPayment = async (req, res) => {
    try {
        const { reference } = req.params;

        // Verify with Paystack
        const response = await axios.get(
            `${PAYSTACK_BASE}/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET}`
                }
            }
        );

        const { status, amount, metadata } = response.data.data;

        if (status !== "success") {
            return res.status(400).json({
                message: "Payment not successful.",
                status
            });
        }

        // Update payment record — money is now held in escrow
        const payment = await prisma.payment.update({
            where: { reference },
            data:  { status: "held" }
        });

        // Update job amount
        await prisma.serviceRequest.update({
            where: { id: payment.jobId },
            data:  { amount: amount / 100 }
        });

        res.status(200).json({
            message: "Payment verified and held in escrow.",
            payment,
            amountNaira: amount / 100
        });

    } catch (error) {
        console.error("Verify payment error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

// ── Release payment to provider ────────────────────────────
const releasePayment = async (req, res) => {
    try {
        const { jobId } = req.params;

        const payment = await prisma.payment.findFirst({
            where: {
                jobId:  parseInt(jobId),
                status: "held"
            }
        });

        if (!payment) {
            return res.status(404).json({
                message: "No held payment found for this job."
            });
        }

        const job = await prisma.serviceRequest.findUnique({
            where: { id: parseInt(jobId) }
        });

        if (job.status !== "completed") {
            return res.status(400).json({
                message: "Payment can only be released for completed jobs."
            });
        }

        // In production: trigger Paystack transfer to provider's bank account
        // For demo: just update status to released
        await prisma.payment.update({
            where: { id: payment.id },
            data:  { status: "released", releasedAt: new Date() }
        });

        res.status(200).json({
            message:     "Payment released to provider.",
            amount:      payment.amount,
            releasedAt:  new Date()
        });

    } catch (error) {
        console.error("Release payment error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

// ── Get payment status for a job ───────────────────────────
const getPaymentStatus = async (req, res) => {
    try {
        const { jobId } = req.params;

        const payment = await prisma.payment.findFirst({
            where: { jobId: parseInt(jobId) },
            orderBy: { createdAt: "desc" }
        });

        if (!payment) {
            return res.status(404).json({
                message: "No payment found for this job."
            });
        }

        res.status(200).json({ payment });

    } catch (error) {
        console.error("Get payment status error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

module.exports = {
    initializePayment,
    verifyPayment,
    releasePayment,
    getPaymentStatus
};