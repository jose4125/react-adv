import { Routes, Route as RouteNav, Navigate } from "react-router-dom";

import { Route } from "./interfaces";
import { routes } from "./routes";

export const Navigation = (): JSX.Element => {
  const defaultPath = "/*";
  const defaultRoute = routes[0].to;

  return (
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
  );
};
