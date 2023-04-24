import React from "react";
import instagram from "../../assets/images/instagram.png";
import likedinPreto from "../../assets/images/linkedin-preto.png";
import gitHub from "../../assets/images/github.png";

export const CardEquipe = (props) => {
  return (
    <div key={props.index} className="cardEquipe">
      <div className="membroContainer">
        <img className="membro" src={props.img} alt="" />
        <h1>{props.nome}</h1>
      </div>

      <div>
        <p>{props.cargo}</p>
        <div className="redesContainer">
          <a className="rede" href={props.redes.instagram} target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a className="rede" href={props.redes.linkedin} target="_blank">
            <img src={likedinPreto} alt="likedinPreto " />
          </a>
          <a className="rede" href={props.redes.gitHub} target="_blank">
            <img src={gitHub} alt="gitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};
