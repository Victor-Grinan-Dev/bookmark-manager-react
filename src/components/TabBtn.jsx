import React from "react";

const TabBtn = ({ isActive, title, id, fx }) => {
  return (
    <div
      id={id}
      className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
      data-target="panel-1"
      onClick={fx}
    >
      <div
        className={`py-5 ${
          isActive === true ? "border-b-4 border-softRed" : ""
        }`}
        data-target="panel-1"
      >
        {title}
      </div>
    </div>
  );
};

export default TabBtn;
