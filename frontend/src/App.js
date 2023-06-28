import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Personal from "./component/Basic/Personal";
import ParentDetails from "./component/Basic/ParentDetails";
import Address from "./component/Basic/Address";
import Education from "./component/Education";
import PresentCourse from "./component/Education/PresentCourse";
import PreviousCourse from "./component/Education/PreviousCourse";
import Upload from "./component/Upload";
import Basic from "./component/Basic";
import React, { useState } from "react";
import Status from "./component/Status";

function App() {
  const [value, setValue] = useState("0%");
  const [educationValue, setEducationValue] = useState("0%");
  const [uploadValue, setUploadValue] = useState("0%");
  return (
    <>
      <BrowserRouter>
        <switch>
          <div className="login">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<SignUp />} />
            </Routes>
          </div>
          <div className="containerlog">
            <div className="Content" style={style.main}>
              <div>
                <Routes>
                  <Route
                    path="/Status"
                    element={
                      <Status
                        value={value}
                        educationValue={educationValue}
                        uploadValue={uploadValue}
                      />
                    }
                  />
                  <Route path="/basic" element={<Basic setValue={setValue} />}>
                    <Route path="/basic/personal" element={<Personal />} />
                    <Route path="/basic/address" element={<Address />} />
                    <Route
                      path="/basic/parentDetails"
                      element={<ParentDetails />}
                    />
                  </Route>
                  <Route
                    path="/education"
                    element={
                      <Education setEducationValue={setEducationValue} />
                    }
                  >
                    <Route
                      path="/education/presentCourse"
                      element={<PresentCourse />}
                    />
                    <Route
                      path="/education/previousCourse"
                      element={<PreviousCourse />}
                    />
                  </Route>
                  <Route
                    path="/upload"
                    element={<Upload setUploadValue={setUploadValue} />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </switch>
      </BrowserRouter>
    </>
  );
}

const style = {
  main: {
    display: "flex",
  },
  nav: {
    display: "flex",
    verticalAlign: "baseline",
  },
};
export default App;
