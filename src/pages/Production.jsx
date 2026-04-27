import { useState } from "react";
import Table from "../components/Table";
import FormModal from "../components/FormModal";
import ProductionForm from "../components/ProductionForm";

const Production = () => {
  const [open, setOpen] = useState(false);
  
  // Custom headers for Production
  const headers = ["Item Name", "Quantity", "Stage", "Status"];

  // Initial Production Data
  const [production, setProduction] = useState([
    { name: "Unit-X1", qty: "50 pcs", stage: "Assembly", status: "Active" },
    { name: "Unit-Y2", qty: "20 pcs", stage: "Testing", status: "Active" },
  ]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Production Line</h1>
        <button 
          onClick={() => setOpen(true)}
          className="bg-accent px-4 py-2 rounded-lg text-white font-medium"
        >
          + Add to Production
        </button>
      </div>

      <Table headers={headers} data={production} />

      {open && (
        <FormModal onClose={() => setOpen(false)}>
          <ProductionForm setProduction={setProduction} setOpen={setOpen} />
        </FormModal>
      )}
    </div>
  );
};

export default Production;