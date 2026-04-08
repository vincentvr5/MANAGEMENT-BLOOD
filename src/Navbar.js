import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-600 text-white p-4 flex justify-between">

      <h1 className="text-xl font-bold">
        Blood Bank
      </h1>

      <div className="space-x-4">

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/donors">Donors</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/stock">Stock</Link>

      </div>

    </div>
  );
};

export default Navbar;