import React from "react";
import HeadComponents from "../HeaderComponents/HeadComponents";

const defaultComponents = ({ children }) => {
  return (
    <div>
      <HeadComponents />
      {children}
    </div>
  );
};

export default defaultComponents;
