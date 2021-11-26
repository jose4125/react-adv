import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route as RouteNav,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { Route } from "./interfaces";
import { routes } from "./routes";

export const Navigation = (): JSX.Element => {
  const defaultPath = "/*";
  const defaultRoute = routes[0].to;
  const fallback = <div>Loading...</div>;

  return (
    <Suspense fallback={fallback}>
      <BrowserRouter>
        <div className="main-layout">
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
          <Routes>
            {routes.map(({ path, Component }: Route, index) => (
              <RouteNav
                key={`${path}.${index}`}
                path={path}
                element={<Component />}
              />
            ))}
            <RouteNav
              path={defaultPath}
              element={<Navigate to={defaultRoute} replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
