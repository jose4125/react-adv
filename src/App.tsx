import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { SideNav } from "./components/SideNav/SideNav";
import { Navigation } from "./routes/Navigation";

function App() {
  const fallback = <div>Loading...</div>;

  return (
    <Suspense fallback={fallback}>
      <BrowserRouter>
        <div className="main-layout">
          <SideNav />
          <Navigation />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
