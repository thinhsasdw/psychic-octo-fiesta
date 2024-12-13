import "./App.css";

import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import HeadComponents from "./components/HeaderComponents/HeadComponents";
import defaultComponents from "./components/DefaultComponents/defaultComponents";
function App() {
  return (
    <div>
      <HeadComponents />
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layoutne = route.isShowHeader ? defaultComponents : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layoutne>
                    <Page />
                  </Layoutne>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
