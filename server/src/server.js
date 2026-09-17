require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

// Run migrations on startup in production
if (process.env.NODE_ENV === 'production') {
    require('./migrate');
}

app.listen(PORT, () => {
    console.log(`Panoply API running on http://localhost:${PORT}`);
});