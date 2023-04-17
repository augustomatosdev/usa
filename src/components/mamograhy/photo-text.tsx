import React from "react";
import Doctor from "../../assets/doctor.png";

export const PhotoWithText = () => {
  return (
    <div className="columns">
      <div className="column is-4">
        <figure className="image is-2by4">
          <img src={Doctor} />
        </figure>
      </div>
      <div className="column is-8 content">
        <p>
          A mamoplastia é uma cirurgia plástica muito procurada por mulheres em
          todo o mundo, seja para fins estéticos ou reparadores. E agora, uma
          grande novidade está chegando ao Brasil nessa área: um médico
          brasileiro que é considerado o maior especialista em mamoplastia nos
          Estados Unidos estará de volta ao país para realizar cirurgias com seu{" "}
          <span className="has-background-danger-light">
            {" "}
            novo método de cirurgia robótica mais eficaz e barata.
          </span>
        </p>
        <p>
          O Dr. Eduardo Montenegro é brasileiro, formado em medicina pela Johns
          Hopkins University e Harvard Medical School, atualmente é cirurgião
          sénior no Stanford Health Care, nos Estados Unidos. Ele é conhecido
          mundialmente por sua experiência e excelência em mamoplastia e{" "}
          <span className="has-background-danger-light">
            já realizou mais de 1320 cirurgias incluindo para celebridades como{" "}
            <strong>
              Queen Latifah, Jennifer Connelly, Sabrina Sato, Ivete Sangalo
            </strong>{" "}
            e muitas outras.
          </span>{" "}
          Agora, ele traz para o Brasil seu novo método de cirurgia robótica,
          que promete ser mais eficaz e acessível.
        </p>
      </div>
    </div>
  );
};
