require("dotenv").config();

const { PrismaClient } = require("../generated/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "panoply"
});

const prisma = new PrismaClient({
    adapter
});

module.exports = prisma;