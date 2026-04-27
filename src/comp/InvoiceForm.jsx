import { useState } from "react";

const InvoiceForm = ({ setInvoices, setOpen }) => {
  const [form, setForm] = useState({ customer: "", amount: "", status: "Pending" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      customer: form.customer,
      date: new Date().toISOString().split('T')[0], // Today's date
      amount: `₹${form.amount}`,
      status: form.status
    };
    
    setInvoices((prev) => [...prev, newInvoice]);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-black mb-2">Create New Invoice</h2>
      
      <input 
        required 
        placeholder="Customer Name" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, customer: e.target.value})}
      />
      <input 
        required 
        type="number"
        placeholder="Amount (₹)" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, amount: e.target.value})}
      />
      <select 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, status: e.target.value})}
      >
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
      </select>
      
      <button className="bg-primary text-white py-2 rounded font-semibold">
        Generate Invoice
      </button>
    </form>
  );
};

export default InvoiceForm;