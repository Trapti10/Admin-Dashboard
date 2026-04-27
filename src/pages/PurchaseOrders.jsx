import { useState } from "react";
import Table from "../comp/Table";
import FormModal from "../comp/FormModal";
import PurchaseOrderForm from "../comp/PurchaseOrderForm";

const PurchaseOrders = () => {
  const [open, setOpen] = useState(false);
  
  // 1. Define headers for the table
  const headers = ["Product Name", "Order Details", "Status"];
  
  // 2. Define data (ensure keys match what you want displayed)
  const [orders, setOrders] = useState([
    { name: "Raw Material A", details: "100 Units | ₹50,000", status: "Active" },
    { name: "Packaging Box", details: "500 Units | ₹25,000", status: "Active" },
  ]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Purchase Orders</h1>
        <button 
          onClick={() => setOpen(true)}
          className="bg-accent px-4 py-2 rounded-lg text-white font-medium"
        >
          + Create New PO
        </button>
      </div>

      {/* Pass headers and data to the new flexible Table */}
      <Table headers={headers} data={orders} />

      {open && (
        <FormModal onClose={() => setOpen(false)}>
          <PurchaseOrderForm setOrders={setOrders} setOpen={setOpen} />
        </FormModal>
      )}
    </div>
  );
};

export default PurchaseOrders;