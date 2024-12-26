import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import financialRecordRouter from "./routes/financialRecordRouter.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use('/financial-records',financialRecordRouter)

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  connectDB();
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
