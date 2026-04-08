import { useState } from "react";
import API from "../api/axios";

const AddDonor = () => {

  const [name, setName] = useState("");
  const [bloodType, setBloodType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/donors", {
      name,
      bloodType,
    });

    alert("Donor Added");
  };

  return (
    <div className="p-6">

      <h1 className="text-xl mb-4">
        Add Donor
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Blood Type"
          onChange={(e) => setBloodType(e.target.value)}
        />

        <button>Add</button>

      </form>

    </div>
  );
};

export default AddDonor;