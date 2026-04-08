import { useEffect, useState } from "react";
import API from "../api/axios";

const Donors = () => {

  const [donors, setDonors] = useState([]);

  useEffect(() => {
    getDonors();
  }, []);

  const getDonors = async () => {
    const res = await API.get("/donors");
    setDonors(res.data);
  };

  return (
    <div className="p-6">

      <h1 className="text-xl mb-4">
        Donor List
      </h1>

      <table className="w-full border">

        <thead>
          <tr>
            <th>Name</th>
            <th>Blood</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {donors.map((d) => (
            <tr key={d._id}>
              <td>{d.name}</td>
              <td>{d.bloodType}</td>
              <td>{d.city}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default Donors;