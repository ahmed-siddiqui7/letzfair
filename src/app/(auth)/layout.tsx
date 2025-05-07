import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}
const layout: React.FC<ChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
