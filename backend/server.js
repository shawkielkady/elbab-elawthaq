import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import demandRoutes from "./routes/demandRoutes.js";

dotenv.config();

const app = express();

// connect MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Main Routes
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/demands", demandRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});