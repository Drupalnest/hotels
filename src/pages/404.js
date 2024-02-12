// src/pages/404.js
import { Link } from "gatsby";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the requested page does not exist.</p>
      <br />
      <br />
      <Link to="/">Go home</Link>.
    </div>
  );
};

export default NotFoundPage;
