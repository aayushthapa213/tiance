import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import financialRecordRouter from "./routes/financialRecordRouter.js";
import cors from "cors";

const app = express();
dotenv.config({ path: "../.env" });

app.use(express.json());
app.use(cors());

app.use("/api/financial-records", financialRecordRouter);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  connectDB();
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
