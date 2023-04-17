import React from "react";

export const Header = () => {
  return (
    <React.Fragment>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="p-4 has-background-danger-dark"
      >
        <span className="icon-text title has-text-white mb-0">
          <span className="icon">
            <i className="fas fa-bars"></i>
          </span>
          <span>g1</span>
        </span>
        <h1 className="has-text-white has-text-centered title mb-0">Mundo</h1>
        <p></p>
      </div>
      <hr />
    </React.Fragment>
  );
};
