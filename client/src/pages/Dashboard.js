import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h1>Dashboard Page</h1>;
};
export default Dashboard;
