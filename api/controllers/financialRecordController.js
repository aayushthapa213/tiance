import financialRecord from "../models/financial_record.js";

const displayRecord = async (req, res) => {
  try {
    const { userId } = req.params;
    const records = await financialRecord.find({ userId: userId });
    if (!records.length === 0) {
      return res.status(404).json({ message: "No records found!" });
    }
    res.status(200).json({ success: true, data: records });
  } catch (err) {
    console.log("Cannot Fetch Products! ", err.message);
    res.status(500).json({ message: "Error fetching products" });
  }
};

const addRecord = async (req, res) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new financialRecord(newRecordBody);
    const savedRecord = await newRecord.save();
    res.status(201).json({ success: true, data: savedRecord });
  } catch (err) {
    console.log("Product Creation Failed! ", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const updateRecord = async (req, res) => {
  const { id } = req.params;
  const newRecordBody = req.body;
  try {
    const updatedRecord = await financialRecord.findByIdAndUpdate(
      id,
      newRecordBody,
      { new: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ message: "No record found!" });
    }
    res.status(200).json({ success: true, data: updatedRecord });
  } catch (err) {
    console.log("Product Update Failed! ", err.message);
    res.status(500).json({ success: false, message: "Server Error!" });
  }
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRecord = await financialRecord.findByIdAndDelete(id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "No record found!" });
    }
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log("Product Deletion Failed! ", error.message);
    res.status(500).json({ success: false, message: "Server Error!" });
  }
};

export default { displayRecord, addRecord, updateRecord, deleteRecord };
