import React from "react";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../ThemeSwitch";

import "./index.css";

export const Dropdown = (props) => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={props.img} />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/equipe"}>Equipe</Link>
        </li>
        <li>
          <Link to={"/contato"}>Contato</Link>
        </li>
        <li>
          <div className="temaContainer">
            <h2>Tema</h2>
            <ThemeSwitch />
          </div>
        </li>
      </ul>
    </div>
  );
};
