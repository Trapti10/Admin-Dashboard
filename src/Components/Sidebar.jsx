import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-2xl transition 
    ${
      isActive
        ? "bg-accent text-white font-semibold"
        : "text-gray-300 hover:bg-secondary"
    }`;

  return (
    <div className="w-64 h-screen bg-primary text-white hidden md:block border-r border-gray-600">

      
      <div className="text-xl font-bold p-4 text-white mb-6 border-b border-gray-600">
        BizManager
      </div>

      {/* Menu */}
      <ul className="space-y-3 px-4">

        <li>
          <NavLink to="/" className={linkStyle}>
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/admins" className={linkStyle}>
            👤 Admins
          </NavLink>
        </li>

        <li>
          <NavLink to="/teams" className={linkStyle}>
            👥 Teams
          </NavLink>
        </li>

        <li>
          <NavLink to="/purchase" className={linkStyle}>
            🛒 Purchase Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className={linkStyle}>
            📦 Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/inventory" className={linkStyle}>
            📊 Inventory
          </NavLink>
        </li>

        <li>
          <NavLink to="/production" className={linkStyle}>
            🏭 Production
          </NavLink>
        </li>

        <li>
          <NavLink to="/invoicing" className={linkStyle}>
            🧾 Invoicing
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;