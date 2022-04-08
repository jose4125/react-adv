import { lazy } from "react";
import { NoLazy } from "../pages/NoLazy";
import { ShoppingPage } from '../pages/ShoppingPage'

import { Route } from "./interfaces";

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);
const Lazy2 = lazy(
  () => import(/* webpackChunkName: "LazyPage2" */ "../pages/LazyPage2")
);
const Lazy3 = lazy(
  () => import(/* webpackChunkName: "LazyPage3" */ "../pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy dashdash",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy 2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy 3",
  },
  {
    to: "/nolazy",
    path: "nolazy",
    Component: NoLazy,
    name: "no lazy",
  },
  {
    to: "/shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "shopping",
  },
];
