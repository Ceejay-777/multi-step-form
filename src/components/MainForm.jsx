import React from "react";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";

const MainForm = () => {
  const [page1Vals, setPage1Vals] = useState(null);
  const [page2Vals, setPage2Vals] = useState(null);
  const [page3Vals, setPage3Vals] = useState(null);
  const [page4Vals, setPage4Vals] = useState(null);

  return (
    <form>
      {/* <Page1 setPage1={setPage1Vals} />
      <Page2 />
      <Page3 />
      <Page4 /> */}
    </form>
  );
};

export default MainForm;
