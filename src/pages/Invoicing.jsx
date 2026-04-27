import { useState } from "react";
import Table from "../comp/Table";
import FormModal from "../comp/FormModal";
import InvoiceForm from "../comp/InvoiceForm";

const Invoicing = () => {
  const [open, setOpen] = useState(false);
  
  // Headers for the Invoicing table
  const headers = ["Customer", "Date", "Amount", "Status"];

  const [invoices, setInvoices] = useState([
    { customer: "Rahul Sharma", date: "2026-04-27", amount: "₹15,000", status: "Paid" },
    { customer: "Tech Corp", date: "2026-04-26", amount: "₹45,000", status: "Pending" },
  ]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Invoicing</h1>
        <button 
          onClick={() => setOpen(true)}
          className="bg-accent px-4 py-2 rounded-lg text-white font-medium"
        >
          + Create Invoice
        </button>
      </div>

      <Table headers={headers} data={invoices} />

      {open && (
        <FormModal onClose={() => setOpen(false)}>
          <InvoiceForm setInvoices={setInvoices} setOpen={setOpen} />
        </FormModal>
      )}
    </div>
  );
};

export default Invoicing;