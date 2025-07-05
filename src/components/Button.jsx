import React from "react";

function Button({ label, onClick, name, value, type = "button" }) {
  return (
    <div className="">
      <button
        type={type}
        name={name}
        value={value}
        className={`bg-gray-800 text-white px-9 py-2 w-[230px] md:w-auto rounded-md select-none active:bg-red-600 hover:bg-red-600 transition duration-200 ease-in-out`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
