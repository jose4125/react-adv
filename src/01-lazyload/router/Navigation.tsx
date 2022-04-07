import { Routes, Route, Navigate } from "react-router-dom";
import { Page1, Page2, Page3 } from "../layout/pages";

export const DashboardNavigation = (): JSX.Element => {
  return (
    <Routes>
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />
      <Route path="*" element={<Navigate replace to="page1" />} />
    </Routes>
  );
};
