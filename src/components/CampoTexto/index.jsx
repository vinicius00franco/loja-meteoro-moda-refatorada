import React from "react";

export const CampoTexto = ({ type, className, ...rest }) => {
  return (
    <input
      className={`form-control rounded-0 ${className}`}
      type={type}
      {...rest}
    />
  );
};
