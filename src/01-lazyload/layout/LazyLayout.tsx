import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { DashboardNav } from "../../components/DashboardNav/DashboardNav";
import { Page1, Page2, Page3 } from "./pages";

export const LazyLayout = (): JSX.Element => {
  return (
    <div>
      <h1>Lazy layout</h1>
      <DashboardNav />

      <Routes>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="*" element={<Navigate replace to="page1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
