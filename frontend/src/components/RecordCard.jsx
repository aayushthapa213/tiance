import React, { useState } from "react";
import useFinancialRecords from "../store/financialRecords.js";
import UpdateForm from "./UpdateForm.jsx";

const RecordCard = ({ record }) => {
  const { deleteRecord, updateRecord } = useFinancialRecords();
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleDelete = async (rid) => {
    const { success, message } = await deleteRecord(rid);
    if (success) {
      console.log(message);
    }
  };

  const handleUpdate = async (updatedRecord) => {
    const { success, message } = await updateRecord(
      updatedRecord._id,
      updatedRecord
    );
    if (success) {
      console.log("Record updated successfully:", message);
      setShowUpdateModal(false); // Close modal
    } else {
      console.error("Failed to update record:", message);
    }
  };

  return (
    <>
      <tr key={record._id}>
        <td>{record._id}</td>
        <td>{record.description}</td>
        <td>{record.amount}</td>
        <td>{record.category}</td>
        <td>{record.paymentMethod}</td>
        <td>{new Date(record.createdAt).toLocaleString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setShowUpdateModal(true)}
          >
            Update
          </button>
        </td>
      </tr>
      {showUpdateModal && (
        <UpdateForm
          record={record}
          onClose={() => setShowUpdateModal(false)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
};

export default RecordCard;
