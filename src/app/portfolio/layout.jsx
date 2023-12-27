import React from "react";

const layout = ({ children }) => {
  return (
    <div className="p-7 ml-[100px]">
      <h1 className="text-5xl lg:text-7xl font-bold">Our work</h1>
      {children}
    </div>
  );
};

export default layout;
