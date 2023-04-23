import React from "react";
import { CardSection } from "../CardSection";
import mala from "../../assets/images/mala.png";
import passaporte from "../../assets/images/passaporte.png";
import suporte from "../../assets/images/suporte.png";

export const Section = () => {
  const cards = [
    {
      id: "item1",
      titulo: "Bagagem virtual",
      image: mala,
      conteudo:
        "Nosso sistema de inventário irá te ajudar fornecendo uma simulação sobre o peso dos itens e possibilitar a consulta caso você tenha esquecido de algo",
    },

    {
      id: "item2",
      titulo: "Vistos para viagem",
      image: passaporte,
      conteudo:
        "Com o nosso sistema não haverá dúvidas referentes aos paises que necessitam de vistos, seja para trabalho ou turismo.",
    },

    {
      id: "item3",
      titulo: "Suporte",
      image: suporte,
      conteudo:
        "Nosso suporte irá te auxiliar com quaisquer que sejam os problemas, desde os mais simples até os mais complexos como: extravio de bagagens normas do aeroporte entre outros.",
    },
  ];

  return (
    <div className="section">
      <div className="cardContainer">
        {cards.map((card) => (
          <CardSection
            id={card.id}
            titulo={card.titulo}
            img={card.image}
            conteudo={card.conteudo}
          />
        ))}
      </div>
    </div>
  );
};
