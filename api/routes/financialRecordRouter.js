import { Router } from "express";
import financialRecordController from "../controllers/financialRecordController.js";

const financialRecordRouter = Router();

financialRecordRouter.get(
  "/getAllByUserId/:userId",
  financialRecordController.displayRecord
);

financialRecordRouter.post("/", financialRecordController.addRecord);

financialRecordRouter.put("/:id", financialRecordController.updateRecord);

financialRecordRouter.delete("/:id", financialRecordController.deleteRecord);

export default financialRecordRouter;
