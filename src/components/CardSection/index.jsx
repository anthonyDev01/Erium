import React from "react";

export const CardSection = (props) => {
  return (
    <div key={props.index} className={`item ${props.id}`}>
      <img src={props.img} alt="" />
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.conteudo}</p>
      </div>
    </div>
  );
};
