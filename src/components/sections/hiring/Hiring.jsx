import React from "react";
import { PrimaryButton } from "../../buttons/Buttons";
import "./Hiring.scss";

const Hiring = () => {
  return (
    <section className="hiring">
      <div className="container">
        <div className="heading">
          <h2>Hiring !</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            ipsam.
          </p>
        </div>
        <div className="hiringContent">
          <PrimaryButton btnName='View jobs' btnClass='hiringBtn' />
        </div>
      </div>
    </section>
  );
};

export default Hiring;
