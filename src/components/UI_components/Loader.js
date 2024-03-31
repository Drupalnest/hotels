import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress color="success" size={50} />{" "}
      {/* Adjust size as needed */}
      <p className="p-2 text-green-600 font-bold">Loading...</p>
    </div>
  );
};

export default Loader;
