import { useUser } from "@clerk/clerk-react";
import RecordForm from "./record_form";
import RecordList from "./record_list";

export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.firstName}! Here are your finances:</h1>
      <RecordForm />
      <RecordList />
    </div>
  );
};
