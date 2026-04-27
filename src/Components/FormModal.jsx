import React from "react";

const FormModal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative shadow-lg text-black">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-xl"
        >
          ✖
        </button>

        {/* CONTENT */}
        {children}

      </div>
    </div>
  );
};

export default FormModal;