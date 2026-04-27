import StatsSection from "../comp/StatsSection";
import ChartSection from "../comp/ChartSection";
import Table from "../comp/Table";

import {
  FaShoppingCart,
  FaBoxOpen,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";

const Dashboard = () => {
  // Define data with keys that match the logic in the new Table component
  const salesData = [
    { name: "Rahul", role: "Buyer", status: "Active" },
    { name: "Priya", role: "Customer", status: "Inactive" },
  ];

  const purchaseData = [
    { name: "Tech Supplier", role: "Vendor", status: "Active" },
    { name: "Fashion Hub", role: "Vendor", status: "Active" },
  ];

  // Define headers for the tables
  const salesHeaders = ["Name", "Role", "Status"];
  const purchaseHeaders = ["Supplier", "Type", "Status"];

  return (
    <div className="bg-lightBg min-h-screen p-4 sm:p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatsSection
          title="Total Sales"
          value="₹2,45,000"
          Icon={FaShoppingCart}
          bgColor="bg-accent/20"
          growth="12.5%"
        />
        <StatsSection
          title="Total Purchases"
          value="₹1,35,000"
          Icon={FaBoxOpen}
          bgColor="bg-secondary/20"
          growth="8.2%"
        />
        <StatsSection
          title="Total Profit"
          value="₹1,10,000"
          Icon={FaChartLine}
          bgColor="bg-green-200"
          growth="15.3%"
        />
        <StatsSection
          title="Low Stock Items"
          value="8 Items"
          Icon={FaExclamationTriangle}
          bgColor="bg-yellow-100"
        />
      </div>

      <div className="bg-white p-2 sm:p-5 rounded-xl shadow-sm">
        <ChartSection />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Recent Sales</h2>
          <Table headers={salesHeaders} data={salesData} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Recent Purchases</h2>
          <Table headers={purchaseHeaders} data={purchaseData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;