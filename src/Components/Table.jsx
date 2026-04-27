const Table = ({ headers, data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-lightBg text-primary">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2">{h}</th>
            ))}
            <th className="px-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-t hover:bg-lightBg">
              {/* Dynamically render columns based on the object keys */}
              {Object.keys(item).map((key, j) => (
                <td key={j} className="px-3 py-2 text-primary">
                  {key === "status" ? (
                    <span className={`px-2 py-1 rounded text-xs ${item.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                      {item.status}
                    </span>
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td className="px-3 text-center">
                <div className="flex justify-center gap-2">
                  <button className="bg-primary text-white px-2 py-1 text-xs rounded">View</button>
                  <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;