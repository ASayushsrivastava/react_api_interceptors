import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ gap: 20, display: "flex" }}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </nav>
  );
};

export default Navbar;
