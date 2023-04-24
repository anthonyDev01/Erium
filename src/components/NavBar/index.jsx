import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../ThemeSwitch";
import { MoreButton } from "../moreButton";

export function NavBar(props) {
  const [active, setActive] = useState("navbar");

  const handleNav = () => {
    active === "navbar" ? setActive("navbarDrop") : setActive("navbar");
  };

  return (
    <div className={active}>
      <div className="menuDrop">
        <button onClick={handleNav}>
          <MoreButton />
        </button>

        <h3>Menu</h3>
      </div>

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
      </ul>
      <ThemeSwitch />
    </div>
  );
}
