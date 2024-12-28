import React, { useState } from "react";

const UpdateForm = ({ record, onClose, onSave }) => {
  const [updatedRecord, setUpdatedRecord] = useState(record);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecord((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedRecord);
  };
  return (
    // modal
    <div className="modal">
      <div className="modal-content">
        <h3>Update Record</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={updatedRecord.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={updatedRecord.amount}
              onChange={handleChange}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={updatedRecord.category}
              onChange={handleChange}
            />
          </label>
          <label>
            Payment Method:
            <input
              type="text"
              name="paymentMethod"
              value={updatedRecord.paymentMethod}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
