import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Section } from "./components/Section";
import { Dropdown } from "./components/Dropdown";

import logo from "./assets/images/logo-preta.png";

function App() {
  const location = useLocation();

  return (
    <div>
      <div className="container">
        <NavBar img={logo} />
        <Outlet />
        
      </div>
      {location.pathname === "/" && <Section />}

      
    </div>
  );
}

export default App;
