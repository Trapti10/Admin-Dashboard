import { useState } from "react";
import Table from "../components/Table";
import FormModal from "../components/FormModal";
import InventoryForm from "../Components/InventoryForm";

const Inventory = () => {
  const [open, setOpen] = useState(false);
  
  // Headers for the table
  const headers = ["Product Name", "SKU / Location", "Stock Level", "Status"];

  // Initial Data
  const [inventory, setInventory] = useState([
    { name: "Raw Material A", sku: "R-101 | Warehouse 1", stock: "500 kg", status: "Active" },
    { name: "Component B", sku: "C-202 | Warehouse 2", stock: "150 pcs", status: "Active" },
    { name: "Finished Item C", sku: "F-303 | Shelf A", stock: "20 units", status: "Inactive" },
  ]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Inventory Management</h1>
        <button 
          onClick={() => setOpen(true)}
          className="bg-accent px-4 py-2 rounded-lg text-white font-medium"
        >
          + Add Inventory Item
        </button>
      </div>

      <Table headers={headers} data={inventory} />

      {open && (
        <FormModal onClose={() => setOpen(false)}>
          <InventoryForm setInventory={setInventory} setOpen={setOpen} />
        </FormModal>
      )}
    </div>
  );
};

export default Inventory;