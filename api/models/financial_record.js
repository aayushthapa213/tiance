import mongoose from "mongoose";

const financialRecordSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const financialRecord = mongoose.model(
  "FinancialRecord",
  financialRecordSchema
);

export default financialRecord;
