import React from "react";
import { Hero } from "../components/home/hero";
import { Benefits } from "../components/home/benefits";
import { Advantages } from "../components/home/advantages";
import { ApplicationForm } from "../components/home/application-form";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container is-max-desktop">
        <h1 className="has-text-danger-dark title has-text-centered p-4">
          USA Is Searching For Talented Immigrants- New Career Possibilities
          Await!
        </h1>
        <div>
          <h1 className="has-text-centered title">
            Benefits of Canadian Immigration
          </h1>
          <Benefits />
          <Advantages />
        </div>
      </div>
      <div className="has-background-danger-light p-4">
        <ApplicationForm />
      </div>
    </div>
  );
};

export default Home;
