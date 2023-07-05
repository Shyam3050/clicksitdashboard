import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2>404 Error</h2>
      <Link to={"."}>back to home</Link>
    </>
  );
};

export default Error;
