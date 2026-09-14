const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access denied. No token provided."
            });
        }

        const token   = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if user is blacklisted
        const blacklisted = await prisma.blacklist.findUnique({
            where: { userId: decoded.id }
        });

        if (blacklisted) {
            return res.status(403).json({
                message: `Your account has been suspended. Reason: ${blacklisted.reason}. Please contact support.`
            });
        }

        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
};
const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "You do not have permission to perform this action."
            });
        }
        next();
    };
};

module.exports = { protect, restrictTo };
