import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Sales", path: "/sales" },
    { name: "Purchases", path: "/purchases" },
    { name: "Inventory", path: "/inventory" },
    { name: "Products", path: "/products" },
    { name: "Suppliers", path: "/suppliers" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm relative">

      {/* ☰ Mobile Menu Button */}
      <button
        className="md:hidden text-primary text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full bg-lightBg text-primary outline-none border border-gray-300 w-64"
        />
        <div className="absolute top-3 right-3 text-primary">
          <IoMdSearch />
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <span className="text-xl text-primary cursor-pointer">🔔</span>

        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-semibold">
          T
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col py-4 md:hidden z-50">

          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-2 ${
                  isActive
                    ? "bg-lightBg text-primary font-semibold"
                    : "hover:bg-lightBg"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>
      )}
    </nav>
  );
}