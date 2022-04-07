import { LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

type RouteComponent = LazyExoticComponent<JSXComponent> | JSXComponent;

export interface Route {
  to: string;
  path: string;
  Component: RouteComponent;

  name: string;
}
