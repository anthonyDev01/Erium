import React from "react";
import mala from "../../assets/images/mala.png";
import passaporte from "../../assets/images/passaporte.png";
import suporte from "../../assets/images/suporte.png";

export const Home = (props) => {
  return (
    <div>
      <div className="page home">
        <div>
          <h1>Facilitando sua viagem</h1>
          <p>
            Utilizando a informação de forma simples e intuitiva para ajudar
            você a aproveitar sua viagem sem complicações.
          </p>
        </div>
        <img src={props.img} alt="" />
      </div>

      <div></div>
    </div>
  );
};


