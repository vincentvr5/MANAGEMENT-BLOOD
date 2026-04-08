import { Bar } from "react-chartjs-2";

const Dashboard = () => {

  const data = {
    labels: ["A+", "B+", "O+", "AB+"],
    datasets: [
      {
        label: "Blood Units",
        data: [10, 8, 15, 5],
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Blood Stock Dashboard
      </h1>

      <Bar data={data} />

    </div>
  );
};

export default Dashboard;