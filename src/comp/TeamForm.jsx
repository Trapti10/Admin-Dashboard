import React, { useState } from "react";

const TeamForm = ({ setTeams, setOpen }) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    status: "Active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.role) return; // safety check

    setTeams((prev) => [...prev, form]);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <h2 className="text-xl text-black font-bold text-primary">
        Add Team Member
      </h2>

      <input
        placeholder="Name"
        className="border p-2 rounded text-black"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Role"
        className="border p-2 rounded text-black"
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      />

      <select
        className="border p-2 text-black rounded"
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button className="bg-primary text-white p-2 rounded hover:bg-secondary">
        Save
      </button>

    </form>
  );
};

export default TeamForm;