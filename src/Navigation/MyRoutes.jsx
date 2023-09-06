import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page4 from "../Pages/Page4";
import SharedLayout from "./SharedLayout";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Page1 />}></Route>
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
          <Route path="Page4" element={<Page4 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
