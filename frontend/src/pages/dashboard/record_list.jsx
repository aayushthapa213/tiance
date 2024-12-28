import React from "react";
import Table from "react-bootstrap/Table";
import useFinancialRecords from "../../store/financialRecords.js";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import RecordCard from "../../components/RecordCard.jsx";

const RecordList = () => {
  const { fetchRecord, records } = useFinancialRecords();
  const { user } = useUser();

  // Fetch records when the component mounts
  useEffect(() => {
    if (user?.id) {
      fetchRecord(user.id);
    }
  }, [fetchRecord, user]);

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Payment Method</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records && records.length > 0 ? (
            records.map((record) => (
              <RecordCard key={record._id} record={record} />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default RecordList;
