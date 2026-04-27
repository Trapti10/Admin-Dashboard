const FilterBar = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row gap-3 justify-between">

      {/* Search */}
      <div className="text-secondary">

      <input
        type="text"
        className="border px-3 py-2 rounded-full bg-lightBg w-full sm:w-64"
        placeholder="Search..."
        />

        </div>
      {/* Date Filters */}
      <div className="flex gap-2">
        <input
          type="date"
          className="border text-primary px-2 py-1 rounded bg-lightBg"
        />
        <input
          type="date"
          className="border text-primary px-2 py-1 rounded bg-lightBg"
        />
      </div>

    </div>
  );
};

export default FilterBar;