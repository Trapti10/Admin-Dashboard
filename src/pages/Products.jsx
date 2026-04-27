import { useState } from "react";
import Table from "../comp/Table";
import FormModal from "../comp/FormModal";
import ProductForm from "../comp/ProductForm";

const Products = () => {
  const headers = ["Product Name", "Category & Stock", "Status"];
  
  const [products, setProducts] = useState([
    { name: "Wireless Mouse", info: "Electronics | 50 units", status: "Active" },
    { name: "Mechanical Keyboard", info: "Electronics | 20 units", status: "Active" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-6">Products</h1>
      <Table headers={headers} data={products} />
    </div>
  );
};
export default Products;