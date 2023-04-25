import { Outlet, useLocation } from "react-router-dom";
import "./App.css";

import { GlobalColors } from "../globalColors";
import { lightTheme } from "./theme/theme";
import { darkTheme } from "./theme/theme";

import { NavBar } from "./components/NavBar";
import { Section } from "./components/Section";
import { ThemeProvider } from "styled-components";

import logoPreta from "./assets/images/logo-preta.png";
import logoBranca from "./assets/images/logo-branca.png";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  const thmeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <div className="container">
          <GlobalColors />
          <NavBar
            img={theme === "light" ? logoPreta : logoBranca}
            thmeToggler={thmeToggler}
          />
          <Outlet />
        </div>
        {location.pathname === "/" && <Section />}
      </div>
    </ThemeProvider>
  );
}

export default App;
