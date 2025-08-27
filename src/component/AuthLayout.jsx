
import React from "react";


const AuthLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <main className="container-auth">{children}</main>
    </div>
  );
};

export default AuthLayout;
