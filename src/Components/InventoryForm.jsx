import { useState } from "react";

const InventoryForm = ({ setInventory, setOpen }) => {
  const [form, setForm] = useState({ name: "", sku: "", stock: "", status: "Active" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: form.name,
      sku: form.sku,
      stock: form.stock,
      status: form.status
    };
    
    setInventory((prev) => [...prev, newItem]);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-black mb-2">New Inventory Item</h2>
      
      <input 
        required 
        placeholder="Product Name" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      <input 
        required 
        placeholder="SKU / Location (e.g. R-101 | Warehouse 1)" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, sku: e.target.value})}
      />
      <input 
        required 
        placeholder="Stock Level (e.g. 500 kg)" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, stock: e.target.value})}
      />
      
      <button className="bg-primary text-white py-2 rounded font-semibold hover:bg-opacity-90">
        Save Inventory
      </button>
    </form>
  );
};

export default InventoryForm;