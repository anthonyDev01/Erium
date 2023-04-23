import React from "react";
import { CardEquipe } from "../../components/CardEquipe";
import anthony from "../../assets/images/anthony.jpg";
import bruno from "../../assets/images/bruno.jpg";
import gustavo from "../../assets/images/guga.jpg";
import ryan from "../../assets/images/ryan.jpg";
import dimitri from "../../assets/images/dimitri.jpg";
import iago from "../../assets/images/iago.jpg";

export const Equipe = () => {
  const equipe = [
    {
      nome: "Anthony Ndubisi",
      foto: anthony,
      cargo: "Gerente de Projeto",
      redes: {
        instagram: "https://www.instagram.com/chukwudi0174/",
        linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        gitHub: "https://github.com/anthonyDev01",
      },
    },
    {
      nome: "Bruno Silva",
      foto: bruno,
      cargo: "Desenvolvedo Full Stack",
      redes: {
        instagram: "https://www.instagram.com/chukwudi0174/",
        linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        gitHub: "https://github.com/anthonyDev01",
      },
    },
    {
      nome: "Gustavo Araújo",
      foto: gustavo,
      cargo: "Engenheiro de Software",
      redes: {
        instagram: "https://www.instagram.com/chukwudi0174/",
        linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        gitHub: "https://github.com/anthonyDev01",
      },
    },
    {
      nome: "Ryan Maciel",
      foto: ryan,
      cargo: "Gerente de Designer",
      redes: {
        instagram: "https://www.instagram.com/chukwudi0174/",
        linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        gitHub: "https://github.com/anthonyDev01",
      },
    },
    {
      nome: "Dimitri Rodrigues",
      foto: dimitri,
      cargo: "Analista de Requisitos",
      redes: {
        instagram: "https://www.instagram.com/chukwudi0174/",
        linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        gitHub: "https://github.com/anthonyDev01",
      },
    },
    {
      nome: "Iago Loureiro",
      foto: iago,
      cargo: "Gerente de banco de dados",
      redes: {
        instagram: "https://www.instagram.com/chukwudi0174/",
        linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        gitHub: "https://github.com/anthonyDev01",
      },
    },
  ];

  return (
    <div className="page equipe">
      {equipe.map((membro) => (
        <CardEquipe
          nome={membro.nome}
          cargo={membro.cargo}
          img={membro.foto}
          redes={membro.redes}
        />
      ))}
    </div>
  );
};
