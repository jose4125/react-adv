import { NavLink } from "react-router-dom";

import { Route } from "../../routes/interfaces";
import { routes } from "../../routes/routes";
import logo from "../../logo.svg";

export const SideNav = (): JSX.Element => (
  <nav>
    <img src={logo} alt="React Logo" />
    <ul>
      {routes.map(({ to, name }: Route, index) => (
        <li key={`${name}.${index}`}>
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
