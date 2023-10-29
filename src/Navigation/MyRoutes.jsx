import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import SharedLayout from "./SharedLayout";

const MyRoutes = () => {
  const [page1Vals, setPage1Vals] = useState({
    nameVal: "",
    emailVal: "",
    phoneVal: "",
  });
  const [page2Vals, setPage2Vals] = useState({});
  const [page3Vals, setPage3Vals] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Page1 page1Vals={page1Vals} setPage1Vals={setPage1Vals} />
            }
          ></Route>
          <Route
            path="Page2"
            element={
              <Page2 page2Vals={page2Vals} setPage2Vals={setPage2Vals} />
            }
          />
          <Route
            path="Page3"
            element={
              <Page3 page3Vals={page3Vals} setPage3Vals={setPage3Vals} />
            }
          />
          <Route
            path="Page4"
            element={<Page4 page2Vals={page2Vals} page3Vals={page3Vals} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
