const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

const register = async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;

        // Check that required fields exist
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "Full name, email and password are required."
            });
        }

        // Check whether email already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return res.status(409).json({
                message: "An account with this email already exists."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                fullName,
                email,
                phone,
                password: hashedPassword
            }
        });

        // Don't send the password back
        res.status(201).json({
            message: "Account created successfully.",
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Registration error:", error);

        res.status(500).json({
            message: "Something went wrong while creating your account."
        });
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email: email }
        });
        // If no user found
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        // Compare submitted password against stored hash
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Send back token and safe user data
        res.status(200).json({
            message: "Login successful.",
            token: token,
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            message: "Something went wrong during login."
        });
    }
};
const getMe = async (req, res) => {
    try {
        // req.user was attached by the protect middleware
        const user = await prisma.user.findUnique({
            where: { id: req.user.id }
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        res.status(200).json({
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                role: user.role,
                createdAt: user.createdAt
            }
        });

    } catch (error) {
        console.error("Get me error:", error);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};
module.exports = {
    register,
    login,
    getMe
};