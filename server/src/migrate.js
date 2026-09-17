const { execSync } = require('child_process');
const path = require('path');

try {
    console.log('Running database migrations...');
    execSync('npx prisma db push --accept-data-loss', {
        stdio: 'inherit',
        cwd: path.join(__dirname, '..'),
        env: { ...process.env }
    });
    console.log('Database migrations complete.');
} catch (error) {
    console.error('Migration failed:', error.message);
    process.exit(1);
}