import { NavLink } from "react-router-dom";

export const DashboardNav = (): JSX.Element => (
  <ul>
    <li>
      <NavLink to="page1">Page 1</NavLink>
    </li>
    <li>
      <NavLink to="page2">Page 2</NavLink>
    </li>
    <li>
      <NavLink to="page3">Page 3</NavLink>
    </li>
  </ul>
);
