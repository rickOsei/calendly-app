import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error">
        <h1>Not the page you are looking for</h1>
        <Link to="/">
          <button className="error-btn">back home</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Error;
