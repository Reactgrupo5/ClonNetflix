import React from "react";

const Logout = () => {

  sessionStorage.clear();
  
  return (
    <>
      <h1 style={{ color: "black" }}>LOGOUT</h1>
    </>
  );
};

export default Logout;
