import React from "react";
import { Link } from "react-router-dom";

export const ApllyButton = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a
        href="https://www.facebook.com/eduardomontenegromd/"
        style={{ whiteSpace: "normal", height: "100%" }}
        className="button mt-2 is-large has-background-danger-dark has-text-white is-size-6-mobile"
      >
        Sim! Eu quero experimentar o método do Dr. Eduardo Montenegro!
      </a>
    </div>
  );
};
