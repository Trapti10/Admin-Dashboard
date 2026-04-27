import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import FormModal from "../components/FormModal";
import AdminForm from "../components/AdminForm";

const Admins = () => {
  const [open, setOpen] = useState(false);

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("admins"));
    if (saved) setAdmins(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("admins", JSON.stringify(admins));
  }, [admins]);

  return (
    <div className="bg-lightBg min-h-screen p-4 space-y-6">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-primary">
          Manage Admins
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          + Add Admin
        </button>

      </div>

      <FilterBar />

      {/* TABLE */}
      <div className="bg-white p-4 rounded-xl">

        <table className="w-full text-sm text-left">

          <thead>
            <tr className="bg-lightBg text-black">
              <th className="p-2">Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {admins.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No Admins Found
                </td>
              </tr>
            ) : (
              admins.map((item, i) => (
                <tr key={i} className="border-t text-black">

                  <td className="p-2">{item.name}</td>
                  <td>{item.role}</td>

                  <td>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {item.status}
                    </span>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {open && (
        <FormModal onClose={() => setOpen(false)}>
          <AdminForm
            setAdmins={setAdmins}
            setOpen={setOpen}
          />
        </FormModal>
      )}

    </div>
  );
};

export default Admins;