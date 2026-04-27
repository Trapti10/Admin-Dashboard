import React, { useState } from "react";

const AdminForm = ({ setAdmins, setOpen }) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    status: "Active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.role) return;

    const newAdmin = {
      name: form.name.trim(),
      role: form.role.trim(),
      status: form.status,
    };

    setAdmins((prev) => [...prev, newAdmin]);

    setForm({ name: "", role: "", status: "Active" });
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">

      <h2 className="text-xl font-bold">Add Admin</h2>

      <input
        className="border p-2 rounded"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="border p-2 rounded"
        placeholder="Role"
        value={form.role}
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      />

      <select
        className="border p-2 rounded"
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button className="bg-black text-white p-2 rounded">
        Save
      </button>

    </form>
  );
};

export default AdminForm;