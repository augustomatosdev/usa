import React from "react";

const options = [
  {
    title: "Immigrants Welcomed",
  },
  { title: "Work in Canada" },
  { title: "Quality of Life" },
  { title: "Free Healthcare" },
  { title: "Study in Canada" },
  { title: "Peace and Stabilite" },
  { title: "Equality and Freedom" },
  { title: "Become a Citizen" },
];

export const Benefits = () => {
  return (
    <div className="columns is-mobile is-centered is-multiline m-0 p-0">
      {options.map((el, index) => (
        <div
          key={index}
          className="column is-6-mobile is-3-tablet has-text-centered"
        >
          <div className="mb-2">
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-2x fa-home"></i>
              </span>
            </span>
          </div>
          {el.title}
        </div>
      ))}
    </div>
  );
};
