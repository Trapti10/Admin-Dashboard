import { useState } from "react";
import Table from "../comp/Table";
import FormModal from "../comp/FormModal";
import TeamForm from "../comp/TeamForm";

const Teams = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  // The keys here (name, role, status) will be automatically rendered by Table.jsx
  const [teams, setTeams] = useState([
    { name: "Amit Sharma", role: "Production Head", status: "Active" },
    { name: "Neha Verma", role: "Inventory Manager", status: "Active" },
    { name: "Rohit Singh", role: "Sales Lead", status: "Inactive" },
    { name: "Pooja Mehta", role: "Quality Check", status: "Active" },
  ]);

  const filteredData = filter === "All" 
    ? teams 
    : teams.filter((t) => t.status === filter);

  // Define headers for the new reusable Table
  const headers = ["Name", "Role", "Status"];

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-primary">Teams & Departments</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-accent px-4 py-2 rounded-lg text-white font-medium"
        >
          + Add Team
        </button>
      </div>

      <div className="flex gap-3 flex-wrap">
        {["All", "Active", "Inactive"].map((f) => (
          <button 
            key={f}
            onClick={() => setFilter(f)} 
            className={`px-3 py-1 rounded ${filter === f ? "bg-primary text-white" : "bg-accent text-white"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <Table headers={headers} data={filteredData} />

      {open && (
        <FormModal onClose={() => setOpen(false)}>
          <TeamForm setTeams={setTeams} setOpen={setOpen} />
        </FormModal>
      )}
    </div>
  );
};

export default Teams;