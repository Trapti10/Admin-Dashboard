import { useState } from "react";

const ProductionForm = ({ setProduction, setOpen }) => {
  const [form, setForm] = useState({ name: "", qty: "", stage: "Assembly", status: "Active" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: form.name,
      qty: form.qty,
      stage: form.stage,
      status: form.status
    };
    
    setProduction((prev) => [...prev, newItem]);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-black mb-2">New Production Task</h2>
      
      <input 
        required 
        placeholder="Product/Item Name" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      <input 
        required 
        placeholder="Quantity (e.g. 100 units)" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, qty: e.target.value})}
      />
      <select 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, stage: e.target.value})}
      >
        <option value="Assembly">Assembly</option>
        <option value="Testing">Testing</option>
        <option value="Packing">Packing</option>
      </select>
      
      <button className="bg-primary text-white py-2 rounded font-semibold">
        Start Production
      </button>
    </form>
  );
};

export default ProductionForm;