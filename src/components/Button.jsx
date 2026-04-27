const ButtonGroup = () => {
  return (
    <div className="flex gap-2">
      <button className="bg-secondary text-white px-3 py-2 rounded text-sm">
        Import
      </button>
      <button className="bg-accent text-white px-3 py-2 rounded text-sm">
        Export
      </button>
    </div>
  );
};

export default ButtonGroup;