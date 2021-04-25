import React from "react";

const DataListUi = ({ children }) => {
  return (
    <div style={{WebkitOverflowScrolling: "touch"}} className="max-w-screen-lg  mx-auto flex-nowrap md:flex-wrap  overflow-auto gap-6  flex justify-start">
      {children}
    </div>
  );
};

export default DataListUi;
