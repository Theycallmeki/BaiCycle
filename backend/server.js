const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const itemRoutes = require('./routes/itemRoutes');
const Item = require('./models/item'); // Import model so Sequelize syncs

const app = express();
const PORT = 2005; // 👈 Backend runs on port 3005

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
  res.send('🚲 Bike Shop API running with Sequelize + PostgreSQL');
});

// Sync DB and start server
sequelize.sync({ alter: true }) // auto-create/alter tables
  .then(() => {
    console.log("✅ Database synced");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("❌ DB connection failed:", err));
