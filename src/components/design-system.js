import React from "react";

export const RedText = ({ children, alt, ...props }) => (
    <span className="!text-red-400 font-bold" {...props}>{children}</span>
);

export const Bold = ({ children, alt, ...props }) => (
  <b className="font-bold" {...props}>
    {children}
  </b>
);