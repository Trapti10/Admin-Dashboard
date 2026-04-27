import { useState } from "react";

const ProductForm = ({ setProducts, setOpen }) => {
  const [form, setForm] = useState({ name: "", category: "", stock: "", status: "Active" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: form.name,
      role: `${form.category} | ${form.stock} units`,
      status: form.status
    };
    
    setProducts((prev) => [...prev, newProduct]);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-black mb-2">Add New Product</h2>
      
      <input 
        required 
        placeholder="Product Name" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      <input 
        required 
        placeholder="Category" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, category: e.target.value})}
      />
      <input 
        required 
        type="number"
        placeholder="Stock Quantity" 
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => setForm({...form, stock: e.target.value})}
      />
      
      <button className="bg-primary text-white py-2 rounded font-semibold">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;