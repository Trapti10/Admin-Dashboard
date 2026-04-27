import React from 'react'
const StatsSection = ({ title, value, Icon,bgColor, growth }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center">
      
      <div>
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <h2 className="text-2xl font-bold mt-1 text-primary">{value}</h2>

        {growth && (
          <p className="text-accent text-sm mt-1">
            ↑ {growth} from last week
          </p>
        )}
      </div>

      <div className={`p-3 rounded-lg ${bgColor}`}>
        {Icon && <Icon className="text-xl text-gray-700" />}
      </div>

    </div>
  );
};

export default StatsSection;