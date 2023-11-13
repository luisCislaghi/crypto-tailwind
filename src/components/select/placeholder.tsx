import React from "react";

const PlaceHolder: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

export default PlaceHolder;
