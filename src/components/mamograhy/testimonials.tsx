import React from "react";
import case1 from "../../assets/case1.jpg";
import case2 from "../../assets/case2.jpg";
import case3 from "../../assets/case3.jpg";
import case4 from "../../assets/case4.jpg";
import case5 from "../../assets/case5.jpg";
import case6 from "../../assets/case6.webp";

const options = [
  {
    photo: case1,
  },
  {
    photo: case2,
  },
  {
    photo: case3,
  },
  {
    photo: case4,
  },
  {
    photo: case5,
  },
  {
    photo: case6,
  },
];

export const Testimonials = () => {
  return (
    <div className="mt-4">
      <h1 className="title has-text-centered">Pacientes Satisfeitas</h1>

      <div className="columns m-0 p-0 mt-4 is-multiline">
        {options.map((el, index) => (
          <div key={index} className="column is-4">
            <figure>
              <img src={el.photo} />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};
