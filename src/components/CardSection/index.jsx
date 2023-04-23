import React from "react";

export const CardSection = (props) => {
  return (
    <div className={props.id}>
      <img src={props.img} alt="mala" />
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.conteudo}</p>
      </div>
    </div>
  );
};
