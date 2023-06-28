import React from "react";
import Sidebar from "./Sidebar";

import { useRef } from "react";
import "./style.css";
import "./style.css";
import { NavLink } from "react-router-dom";

import PreviousCourse from "./Education/PreviousCourse";
import PresentCourse from "./Education/PresentCourse";

const Two = ({ setEducationValue }) => {
  const presentcourse = useRef(null);
  const previouscourse = useRef(null);  
  const presentcoursecolor=useRef(null);
  const previouscoursecolor=useRef(null);

  const handlepreviouscourse = (e) => {
    e.preventDefault();
    presentcourse.current.style.display = "none";
    previouscourse.current.style.display = "block";
    presentcoursecolor.current.style.color = "#0000EE";
    previouscoursecolor.current.style.color = "#53b8d5";
  };
  const handlepresentcourse = (e) => {
    e.preventDefault();
    console.log("Hello");
    presentcourse.current.style.display = "block";
    previouscourse.current.style.display = "none";
    presentcoursecolor.current.style.color = "#53b8d5";
    previouscoursecolor.current.style.color = "#0000EE";
  };
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div style={styles.mainContent}>
          <div style={styles.greeting}>
            <h2>Education Details</h2>
          </div>
          <hr style={styles.horizontalLine} />
        </div>
        <ul style={styles.ul}>
          <NavLink ref={presentcoursecolor}
            to="/Education/PresentCourse"
            style={styles.li}
            onClick={(e) => handlepresentcourse(e)}
          >
            PresentCourse
          </NavLink>

          <NavLink ref={previouscoursecolor}
            to="/Education/PreviousCourse"
            style={styles.li}
            onClick={(e) => handlepreviouscourse(e)}
          >
            PreviousCourse
          </NavLink>
        </ul>
        <div>
          <div ref={presentcourse} className="first">
            <PresentCourse
              presentcourse={presentcourse}
              previouscourse={previouscourse}
              setEducationValue={setEducationValue}
            />
          </div>

          <div ref={previouscourse} style={{ display: "none" }}>
            <PreviousCourse
              presentcourse={presentcourse}
              previouscourse={previouscourse}
              setEducationValue={setEducationValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "black",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",
  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "10px 0",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    background: "#f4f4f4",
    height: "35px",
  },
  li: {
    textDecoration: "none",
    fontSize: "20px",
    color: "#0000EE",
  },
};
