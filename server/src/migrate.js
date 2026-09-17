const { PrismaClient } = require('../generated/client');

async function migrate() {
    console.log('Connecting to database...');
    const prisma = new PrismaClient();
    
    try {
        await prisma.$connect();
        console.log('Database connected successfully.');
        await prisma.$disconnect();
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}

migrate();