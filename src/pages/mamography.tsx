import React from "react";
import { ApllyButton } from "../components/mamograhy/apply-button";
import { PhotoWithText } from "../components/mamograhy/photo-text";
import RoboticImage from "../assets/robotic.jpg";
import DoctorImage from "../assets/doctor2.jpg";

import { InfoText1 } from "../components/mamograhy/info-text-1";
import { Testimonials } from "../components/mamograhy/testimonials";
import { Header } from "../components/mamograhy/header";

const Mamography = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 container is-max-desktop  pl-4 pr-4">
        <h1 className="title has-text-weight-bold">
          Dr. Eduardo Montenegro, a maior autoridade da mamoplastia.
        </h1>
        <p className="subtitle">
          Médico Brasileiro, maior especialista em mamoplastia nos EUA, traz seu
          novo método de cirurgia robótica mais eficaz e barata para o Brasil
        </p>
        <hr />
        <PhotoWithText />
        <ApllyButton />
        <InfoText1 />
        <figure className="image is-16by9">
          <img src={RoboticImage} />
        </figure>
        <div className="content">
          <p>
            Outra grande vantagem do novo método é o
            <span className="has-background-danger-light has-text-weight-bold">
              custo mais baixo
            </span>{" "}
            em comparação com os métodos tradicionais. Isso se deve ao fato de
            que a técnica é{" "}
            <span className="has-background-danger-light has-text-weight-bold">
              menos invasiva e utiliza menos pessoal, equipamentos e materiais
            </span>
            , o que acaba reduzindo o custo total da cirurgia.
          </p>
          <p>
            As inscrições para realizar o procedimento com o Dr. Montenegro já
            estão abertas e há uma grande expectativa entre as mulheres que
            buscam a cirurgia de mamoplastia. A novidade é promissora e pode
            revolucionar a forma como as cirurgias plásticas são realizadas no
            Brasil.
          </p>
        </div>
        <figure className="image is-16by9">
          <img src={DoctorImage} />
        </figure>
        <ApllyButton />
        <Testimonials />
        <ApllyButton />
      </div>
      <div className="footer has-background-danger-dark mt-4 has-text-white">
        <p>Fale com o Dr. Montenegro</p>
        <div className="buttons has-text-centered mt-2">
          <a
            href="https://www.facebook.com/eduardomontenegromd/"
            className="button has-background-info"
          >
            <span className="icon is-small has-text-white">
              <i className="fab fa-facebook"></i>
            </span>
          </a>
          <a
            href={`https://wa.me/15748007818`}
            className="button has-background-success"
          >
            <span className="icon is-small has-text-white">
              <i className="fab fa-whatsapp"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mamography;
