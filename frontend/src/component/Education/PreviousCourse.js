import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PreviousCourse({ presentcourse, previouscourse, setEducationValue }) {
  const [sscyear, setSscyear] = useState("");
  const [sscseatno, setSscseatno] = useState("");
  const [sscboard, setSscboard] = useState("");
  const [sscmarks, setSscmarks] = useState("");
  const [sscpercent, setSscpercent] = useState("");
  const [hscyear, setHscyear] = useState("");
  const [hscseatno, setHscseatno] = useState("");
  const [hscboard, setHscboard] = useState("");
  const [hscmarks, setHscmarks] = useState("");
  const [hscpercentage, setHscpercentage] = useState("");
  const [pmarks, setPmarks] = useState("");
  const [cmarks, setCmarks] = useState("");
  const [mmarks, setMmarks] = useState("");
  const [vmarks, setVmarks] = useState("");
  const [mhcetrollno, setMhcetrollno] = useState("");
  const [mhcetappno, setMhcetappno] = useState("");
  const [jeerollno, setJeerollno] = useState("");
  const [jeepercentile, setJeepercentile] = useState("");
  const [ename, setEname] = useState("");
  const [escore, setEscore] = useState("");

  const navigate = useNavigate();

  const prev = async (e) => {
    setEducationValue("100%");
    e.preventDefault();

    await axios.post("/Education/PreviousCourse", {
      sscyear: sscyear,
      sscseatno: sscseatno,
      sscboard: sscboard,
      sscmarks: sscmarks,
      sscpercent: sscpercent,
      hscyear: hscyear,
      hscseatno: hscseatno,
      hscboard: hscboard,
      hscmarks: hscmarks,
      hscpercentage: hscpercentage,
      pmarks: pmarks,
      cmarks: cmarks,
      mmarks: mmarks,
      vmarks: vmarks,
      mhcetrollno: mhcetrollno,
      mhcetappno: mhcetappno,
      jeerollno: jeerollno,
      jeepercentile: jeepercentile,
      ename: ename,
      escore: escore,
    });
    navigate("/Upload");
  };

  const bac = async (e) => {
    e.preventDefault();
    setEducationValue("50%");
    presentcourse.current.style.display = "block";
    previouscourse.current.style.display = "none";
  };

  return (
    <>
      <form onSubmit={prev}>
        <div className="first">
          <div className="year field">
            <label htmlFor="pYear">SSC Passing year</label>
            <br />
            <input
              type="date"
              name="pYear"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setSscyear(e.target.value);
              }}
            />
          </div>
          <div className="sNo field">
            <label htmlFor="sNo">SSC Seat No</label>
            <br />
            <input
              type="text"
              name="sNo"
              pattern="[A-Za-z0-9\s]+"
              required
              onChange={(e) => {
                setSscseatno(e.target.value);
              }}
            />
          </div>
          <div className="board field">
            <label htmlFor="bName">Name of the Board</label>
            <br />
            <input
              type="text"
              name="bName"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setSscboard(e.target.value);
              }}
            />
          </div>
          <div className="marks field">
            <label htmlFor="marks">SSC Marks</label>
            <br />
            <input
              type="text"
              name="marks"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setSscmarks(e.target.value);
              }}
            />
          </div>
          <div className="percent field">
            <label htmlFor="percent">SSC Percentage/CGPA</label>
            <br />
            <input
              type="text"
              min="0"
              max="100"
              name="percent"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setSscpercent(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="first">
          <div className="year field">
            <label htmlFor="pYear">HSC Passing year</label>
            <br />
            <input
              type="date"
              name="pYear"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setHscyear(e.target.value);
              }}
            />
          </div>
          <div className="seat field">
            <label htmlFor="HsNo">HSC Seat No</label>
            <br />
            <input
              type="text"
              name="HsNo"
              pattern="[A-Za-z0-9\s]+"
              required
              onChange={(e) => {
                setHscseatno(e.target.value);
              }}
            />
          </div>
          <div className="board field">
            <label htmlFor="bName">Name of the Board</label>
            <br />
            <input
              type="text"
              name="bName"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setHscboard(e.target.value);
              }}
            />
          </div>
          <div className="marks field">
            <label htmlFor="marks">HSC Marks</label>
            <br />
            <input
              type="text"
              name="marks"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setHscmarks(e.target.value);
              }}
            />
          </div>
          <div className="percent field">
            <label htmlFor="percent">HSC Percentage/CGPA</label>
            <br />
            <input
              type="text"
              min="0"
              max="100"
              name="percent"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setHscpercentage(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="second">
          <div className="pMarks field">
            <label htmlFor="pMarks">HSC Physics Marks</label>
            <br />
            <input
              type="text"
              min="0"
              max="100"
              name="pMarks"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setPmarks(e.target.value);
              }}
            />
          </div>
          <div className="cMarks field">
            <label htmlFor="cMarks">HSC Chemistry Marks</label>
            <br />
            <input
              type="text"
              min="0"
              max="100"
              name="cmarks"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setCmarks(e.target.value);
              }}
            />
          </div>
          <div className="mMarks field">
            <label htmlFor="mMarks">HSC Maths Marks</label>
            <br />
            <input
              type="text"
              min="0"
              max="100"
              name="mMarks"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setMmarks(e.target.value);
              }}
            />
          </div>
          <div className="vmarks field">
            <label htmlFor="vmarks">HSC Vocational Marks</label>
            <br />
            <input
              type="text"
              min="0"
              max="100"
              name="vmarks"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setVmarks(e.target.value);
              }}
            />
          </div>
        </div>
        <hr />
        <div className="second">
          <div className="mRoll field">
            <label htmlFor="mRoll">MHTCET Roll No</label>
            <br />
            <input
              type="text"
              name="mRoll"
              pattern="[A-Za-z0-9\s]+"
              required
              onChange={(e) => {
                setMhcetrollno(e.target.value);
              }}
            />
          </div>
          <div className="mApp field">
            <label htmlFor="mApp">MHTCET Application No</label>
            <br />
            <input
              type="text"
              name="mApp"
              pattern="[A-Za-z0-9\s]+"
              required
              onChange={(e) => {
                setMhcetappno(e.target.value);
              }}
            />
          </div>
          <div className="jRoll field">
            <label htmlFor="jRoll">JEE Application</label>
            <br />
            <input
              type="text"
              name="jRoll"
              pattern="[A-Za-z0-9\s]+"
              required
              onChange={(e) => {
                setJeerollno(e.target.value);
              }}
            />
          </div>
          <div className="jPer field">
            <label htmlFor="jPer">JEE Percentile Score</label>
            <br />
            <input
              type="text"
              name="jPer"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setJeepercentile(e.target.value);
              }}
            />
          </div>
        </div>

        <hr />
        <div className="third">
          <div className="eName field">
            <label htmlFor="eName">Entrance Exam Name</label>
            <br />
            <input
              type="text"
              name="eName"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setEname(e.target.value);
              }}
            />
          </div>
          <div className="eScore field">
            <label htmlFor="eScore">Entrance Exam Score</label>
            <br />
            <input
              type="text"
              name="eScore"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setEscore(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="btn">
          <button onClick={bac}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}

export default PreviousCourse;
