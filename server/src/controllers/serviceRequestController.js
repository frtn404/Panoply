const prisma = require("../config/prisma");

const createServiceRequest = async (req, res) => {
    try {
        if (req.user.role !== "customer") {
            return res.status(403).json({
                message: "Only customers can create service requests."
            });
        }

        const { category, description, address, latitude, longitude, scheduledDate } = req.body;

        // Validate required fields
        if (!category || !description || !address || !latitude || !longitude || !scheduledDate) {
            return res.status(400).json({
                message: "All fields are required: category, description, address, latitude, longitude, scheduledDate."
            });
        }

        const serviceRequest = await prisma.serviceRequest.create({
            data: {
                customerId: req.user.id,
                category,
                description,
                address,
                latitude,
                longitude,
                scheduledDate: new Date(scheduledDate),
                status: "pending"
            },
            include: {
                customer: {
                    select: {
                        fullName: true,
                        email: true,
                        phone: true
                    }
                }
            }
        });

        res.status(201).json({
            message: "Service request created successfully.",
            serviceRequest
        });

    } catch (error) {
        console.error("Create service request error:", error.message);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};

const getServiceRequest = async (req, res) => {
    try {
        const serviceRequest = await prisma.serviceRequest.findUnique({
            where: { id: parseInt(req.params.id) },
            include: {
                customer: {
                    select: { fullName: true, email: true, phone: true }
                },
                provider: {
                    select: { fullName: true, email: true, phone: true }
                }
            }
        });

        if (!serviceRequest) {
            return res.status(404).json({
                message: "Service request not found."
            });
        }

        // Only the customer or assigned provider can view the request
        const isCustomer = serviceRequest.customerId === req.user.id;
        const isProvider = serviceRequest.providerId === req.user.id;
        const isAdmin = req.user.role === "admin";

        if (!isCustomer && !isProvider && !isAdmin) {
            return res.status(403).json({
                message: "You do not have permission to view this request."
            });
        }

        res.status(200).json({ serviceRequest });

    } catch (error) {
        console.error("Get service request error:", error.message);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};

const getMyServiceRequests = async (req, res) => {
    try {
        let serviceRequests;

        if (req.user.role === "customer") {
            serviceRequests = await prisma.serviceRequest.findMany({
                where: { customerId: req.user.id },
                include: {
                    provider: {
                        select: { fullName: true, email: true, phone: true }
                    }
                },
                orderBy: { createdAt: "desc" }
            });
        } else if (req.user.role === "provider") {
            serviceRequests = await prisma.serviceRequest.findMany({
                where: { providerId: req.user.id },
                include: {
                    customer: {
                        select: { fullName: true, email: true, phone: true }
                    }
                },
                orderBy: { createdAt: "desc" }
            });
        } else {
            return res.status(403).json({
                message: "Admins should use the admin endpoints."
            });
        }

        res.status(200).json({ serviceRequests });

    } catch (error) {
        console.error("Get my service requests error:", error.message);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};

const updateServiceRequestStatus = async (req, res) => {
    try {
        const { status, amount, cancelReason } = req.body;
        const requestId = parseInt(req.params.id);

        const serviceRequest = await prisma.serviceRequest.findUnique({
            where: { id: requestId }
        });

        if (!serviceRequest) {
            return res.status(404).json({
                message: "Service request not found."
            });
        }

        const isCustomer = serviceRequest.customerId === req.user.id;
        const isProvider = serviceRequest.providerId === req.user.id;

        if (!isCustomer && !isProvider) {
            return res.status(403).json({
                message: "You do not have permission to update this request."
            });
        }

        // Validate status transitions
        const allowedTransitions = {
            pending:     ["cancelled"],
            assigning:   ["cancelled"],
            accepted:    ["in_progress", "cancelled"],
            in_progress: ["completed", "failed", "cancelled"],
            completed:   [],
            cancelled:   [],
            failed:      []
        };

        if (!allowedTransitions[serviceRequest.status].includes(status)) {
            return res.status(400).json({
                message: `Cannot transition from '${serviceRequest.status}' to '${status}'.`
            });
        }

        // Build update data
        const updateData = { status };

        if (amount !== undefined) updateData.amount = amount;
        if (cancelReason !== undefined) updateData.cancelReason = cancelReason;

        // Update completed jobs count on provider profile
        if (status === "completed" && serviceRequest.providerId) {
            await prisma.providerProfile.update({
                where: { userId: serviceRequest.providerId },
                data: { completedJobsCount: { increment: 1 } }
            });
        }

        const updated = await prisma.serviceRequest.update({
            where: { id: requestId },
            data: updateData,
            include: {
                customer: {
                    select: { fullName: true, email: true, phone: true }
                },
                provider: {
                    select: { fullName: true, email: true, phone: true }
                }
            }
        });

        res.status(200).json({
            message: "Service request updated successfully.",
            serviceRequest: updated
        });

    } catch (error) {
        console.error("Update service request error:", error.message);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};
const getAvailableRequests = async (req, res) => {
    try {
        if (req.user.role !== "provider") {
            return res.status(403).json({
                message: "Only providers can view available requests."
            });
        }

        // Get provider's category
        const providerProfile = await prisma.providerProfile.findUnique({
            where: { userId: req.user.id }
        });

        if (!providerProfile) {
            return res.status(404).json({
                message: "Provider profile not found."
            });
        }

        if (!providerProfile.isAvailable) {
            return res.status(400).json({
                message: "You are currently set as unavailable."
            });
        }

        // Find pending requests matching provider's category
        const requests = await prisma.serviceRequest.findMany({
            where: {
                category: providerProfile.category,
                status: "pending"
            },
            include: {
                customer: {
                    select: { fullName: true, phone: true }
                }
            },
            orderBy: { createdAt: "asc" }
        });

        res.status(200).json({ requests });

    } catch (error) {
        console.error("Get available requests error:", error.message);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};
const respondToRequest = async (req, res) => {
    try {
        if (req.user.role !== "provider") {
            return res.status(403).json({
                message: "Only providers can respond to requests."
            });
        }

        const { action } = req.body; // "accept" or "reject"
        const requestId = parseInt(req.params.id);

        if (!action || !["accept", "reject"].includes(action)) {
            return res.status(400).json({
                message: "Action must be either 'accept' or 'reject'."
            });
        }

        const serviceRequest = await prisma.serviceRequest.findUnique({
            where: { id: requestId }
        });

        if (!serviceRequest) {
            return res.status(404).json({
                message: "Service request not found."
            });
        }

        if (serviceRequest.status !== "pending" && serviceRequest.status !== "assigning") {
            return res.status(400).json({
                message: "This request is no longer available."
            });
        }

        if (action === "accept") {
            const updated = await prisma.serviceRequest.update({
                where: { id: requestId },
                data: {
                    providerId: req.user.id,
                    status: "accepted"
                },
                include: {
                    customer: {
                        select: { fullName: true, email: true, phone: true }
                    }
                }
            });

            return res.status(200).json({
                message: "Request accepted successfully.",
                serviceRequest: updated
            });
        }

        if (action === "reject") {
            // Keep status as pending so another provider can accept
            return res.status(200).json({
                message: "Request rejected."
            });
        }

    } catch (error) {
        console.error("Respond to request error:", error.message);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};

module.exports = {
    createServiceRequest,
    getServiceRequest,
    getMyServiceRequests,
    updateServiceRequestStatus, 
    respondToRequest,
    getAvailableRequests
};