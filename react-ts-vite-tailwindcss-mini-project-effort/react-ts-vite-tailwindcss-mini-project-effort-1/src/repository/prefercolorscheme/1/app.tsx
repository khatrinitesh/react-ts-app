import React from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <h1>@media (prefers-color-scheme) example</h1>
      <p>
        The <code>prefers-color-scheme</code> media query lets you create light
        and dark color schemes based on your system preferences.
      </p>

      <p>
        In browsers that support <code>prefers-color-scheme</code> queries, the
        background of this page will be green. Otherwise, the background will be
        orange.
      </p>
    </>
  );
};

export default CustomApp;
