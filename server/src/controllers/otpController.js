/**
 * otpController.js — Panoply
 * Handles OTP generation and verification for job meetups.
 *
 * Flow:
 *   1. Customer initiates meetup → system generates two OTPs
 *   2. Customer sees their OTP, provider sees their OTP
 *   3. They exchange OTPs in person to verify identity
 *   4. Both enter the other's OTP → job moves to in_progress
 *
 * In production: OTPs would be sent via Termii SMS API.
 * For demo: OTPs are returned in the API response.
 */

const prisma = require("../config/prisma");

// Generate a 6-digit OTP
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// ── Generate OTPs for a job ────────────────────────────────
const generateJobOtps = async (req, res) => {
    try {
        const jobId = parseInt(req.params.id);

        const job = await prisma.serviceRequest.findUnique({
            where: { id: jobId },
            include: {
                customer: { select: { fullName: true, email: true } },
                provider: { select: { fullName: true, email: true } }
            }
        });

        if (!job) {
            return res.status(404).json({ message: "Job not found." });
        }

        // Only customer or provider can generate OTPs
        const isCustomer = job.customerId === req.user.id;
        const isProvider = job.providerId === req.user.id;

        if (!isCustomer && !isProvider) {
            return res.status(403).json({ message: "Not authorised." });
        }

        // Job must be accepted before OTPs can be generated
        if (job.status !== "accepted") {
            return res.status(400).json({
                message: "OTPs can only be generated for accepted jobs."
            });
        }

        // Generate fresh OTPs — valid for 15 minutes
        const customerOtp  = generateOtp();
        const providerOtp  = generateOtp();
        const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

        await prisma.serviceRequest.update({
            where: { id: jobId },
            data: { customerOtp, providerOtp, otpExpiresAt }
        });

        // Each party only sees their own OTP
        // They must share it in person with the other party
        const response = {
            message: "OTPs generated. Share your OTP with the other party to verify identity.",
            expiresAt: otpExpiresAt,
            jobId,
        };

        if (isCustomer) {
            response.yourOtp     = customerOtp;
            response.instruction = `Show this OTP to ${job.provider?.fullName || 'the provider'} to prove you are the customer. Then ask them for their OTP and enter it below.`;
        } else {
            response.yourOtp     = providerOtp;
            response.instruction = `Show this OTP to ${job.customer?.fullName || 'the customer'} to prove you are the provider. Then ask them for their OTP and enter it below.`;
        }

        // In production, send via SMS:
        // await termii.sendSms(job.customer.phone, `Your Panoply OTP is ${customerOtp}`);
        // await termii.sendSms(job.provider.phone, `Your Panoply OTP is ${providerOtp}`);

        res.status(200).json(response);

    } catch (error) {
        console.error("Generate OTP error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

// ── Verify the other party's OTP ───────────────────────────
const verifyJobOtp = async (req, res) => {
    try {
        const jobId = parseInt(req.params.id);
        const { otp } = req.body;

        if (!otp) {
            return res.status(400).json({ message: "OTP is required." });
        }

        const job = await prisma.serviceRequest.findUnique({
            where: { id: jobId }
        });

        if (!job) {
            return res.status(404).json({ message: "Job not found." });
        }

        const isCustomer = job.customerId === req.user.id;
        const isProvider = job.providerId === req.user.id;

        if (!isCustomer && !isProvider) {
            return res.status(403).json({ message: "Not authorised." });
        }

        // Check OTP hasn't expired
        if (!job.otpExpiresAt || new Date() > job.otpExpiresAt) {
            return res.status(400).json({
                message: "OTPs have expired. Please generate new ones."
            });
        }

        // Customer enters the PROVIDER's OTP and vice versa
        const expectedOtp = isCustomer ? job.providerOtp : job.customerOtp;

        if (otp !== expectedOtp) {
            return res.status(400).json({
                message: "Incorrect OTP. Please check with the other party."
            });
        }

        // OTP verified — update job to in_progress
        const updated = await prisma.serviceRequest.update({
            where: { id: jobId },
            data: {
                status:       "in_progress",
                otpVerifiedAt: new Date(),
                customerOtp:  null,
                providerOtp:  null
            }
        });

        res.status(200).json({
            message: "Identity verified. Job is now in progress.",
            jobId,
            status: updated.status,
            verifiedAt: updated.otpVerifiedAt
        });

    } catch (error) {
        console.error("Verify OTP error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

// ── Get OTP status for a job ───────────────────────────────
const getOtpStatus = async (req, res) => {
    try {
        const jobId = parseInt(req.params.id);

        const job = await prisma.serviceRequest.findUnique({
            where: { id: jobId },
            select: {
                id:           true,
                status:       true,
                otpExpiresAt: true,
                otpVerifiedAt: true,
                customerOtp:  true,
                providerOtp:  true,
                customerId:   true,
                providerId:   true
            }
        });

        if (!job) {
            return res.status(404).json({ message: "Job not found." });
        }

        const isCustomer = job.customerId === req.user.id;
        const isProvider = job.providerId === req.user.id;

        if (!isCustomer && !isProvider) {
            return res.status(403).json({ message: "Not authorised." });
        }

        const otpGenerated = !!(job.customerOtp && job.providerOtp);
        const otpExpired   = job.otpExpiresAt && new Date() > job.otpExpiresAt;

        res.status(200).json({
            jobId,
            otpGenerated,
            otpExpired:   otpExpired || false,
            otpVerified:  !!job.otpVerifiedAt,
            verifiedAt:   job.otpVerifiedAt,
            expiresAt:    job.otpExpiresAt,
            yourOtp:      isCustomer ? job.customerOtp : job.providerOtp
        });

    } catch (error) {
        console.error("OTP status error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

module.exports = { generateJobOtps, verifyJobOtp, getOtpStatus };