import { useState } from "react";

const PurchaseOrderForm = ({ setOrders, setOpen }) => {
  const [form, setForm] = useState({ name: "", qty: "", amount: "", status: "Active" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine quantity and amount into the 'role' field to fit your current Table structure
    const newOrder = {
      name: form.name,
      role: `${form.qty} Units | ₹${form.amount}`,
      status: "Active"
    };
    
    setOrders((prev) => [...prev, newOrder]);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-black mb-2">Create Purchase Order</h2>
      
      <input 
        required 
        placeholder="Product/Material Name" 
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      <input 
        required 
        type="number"
        placeholder="Quantity" 
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => setForm({...form, qty: e.target.value})}
      />
      <input 
        required 
        type="number"
        placeholder="Total Amount (₹)" 
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => setForm({...form, amount: e.target.value})}
      />
      
      <button className="bg-primary text-white py-2 rounded">Save Purchase Order</button>
    </form>
  );
};

export default PurchaseOrderForm;