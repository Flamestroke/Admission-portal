import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ParentDetails({ personal, parents, address, setValue }) {
  const [ffname, setFFname] = useState("");
  const [fContactNumber, setFContactNumber] = useState("");
  const [fOccupation, setFOccupation] = useState("");
  const [fDesignation, setFDesignation] = useState("");
  const [fProfessionalAddress, setFProfessionalAddress] = useState("");
  const [fAnnualIncome, setFAnnualIncome] = useState("");
  const [fEmail, setFEmail] = useState("");
  const [mfName, setMfName] = useState("");
  const [mContactNumber, setMContactNumber] = useState("");
  const [mOccupation, setMOccupation] = useState("");
  const [mDesignation, setMDesignation] = useState("");
  const [mProfessionalAddress, setMProfessionalAddress] = useState("");
  const [mAnnualIncome, setMAnnualIncome] = useState("");
  const [mEmail, setMEmail] = useState("");
  const navigate = useNavigate();
  const pd = async (e) => {
    e.preventDefault();
    setValue("100%");

    await axios.post("/Basic/ParentDetails", {
      ffname: ffname,
      fContactNumber: fContactNumber,
      fOccupation: fOccupation,
      fDesignation: fDesignation,
      fProfessionalAddress: fProfessionalAddress,
      fAnnualIncome: fAnnualIncome,
      fEmail: fEmail,
      mfName: mfName,
      mContactNumber: mContactNumber,
      mOccupation: mOccupation,
      mDesignation: mDesignation,
      mProfessionalAddress: mProfessionalAddress,
      mAnnualIncome: mAnnualIncome,
      mEmail: mEmail,
    });
    navigate("/Education/PresentCourse");
  };

  const bac = async (e) => {
    e.preventDefault();
    setValue("66%");
    personal.current.style.display = "none";
    address.current.style.display = "block";
    parents.current.style.display = "none";
  };

  return (
    <>
      <div className="flex">
        <form onSubmit={pd}>
          <div className="first">
            <div className="fullName field">
              <label htmlFor="fullName">Father Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                pattern="[A-Za-z\s]+"
                onChange={(e) => {
                  setFFname(e.target.value);
                }}
              />
            </div>
            <div className="cont field">
              <label htmlFor="cont">Father Contact No</label>
              <input
                type="text"
                name="cont"
                required
                pattern="[0-9]+"
                onChange={(e) => {
                  setFContactNumber(e.target.value);
                }}
              />
            </div>
            <div className="email field">
              <label htmlFor="email">Father Email Id</label>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => {
                  setFEmail(e.target.value);
                }}
              />
            </div>
            <div className="occ field">
              <label htmlFor="occ">Father Occupation</label>
              <input
                type="text"
                name="occ"
                required
                pattern="[A-Za-z\s]+"
                onChange={(e) => {
                  setFOccupation(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="first">
            <div className="des field">
              <label htmlFor="fullName">Designation</label>
              <input
                type="text"
                name="des"
                required
                pattern="[A-Za-z\s]+"
                onChange={(e) => {
                  setFDesignation(e.target.value);
                }}
              />
            </div>
            <div className="padd field">
              <label htmlFor="padd">Professional Address</label>
              <input
                type="text"
                name="padd"
                required
                onChange={(e) => {
                  setFProfessionalAddress(e.target.value);
                }}
              />
            </div>
            <div className="income field">
              <label htmlFor="income">Annual Income</label>
              <input
                type="text"
                name="income"
                required
                pattern="[0-9]+"
                onChange={(e) => {
                  setFAnnualIncome(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="first">
            <div className="fullName field">
              <label htmlFor="fullName">Mother Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                pattern="[A-Za-z\s]+"
                onChange={(e) => {
                  setMfName(e.target.value);
                }}
              />
            </div>
            <div className="cont field">
              <label htmlFor="cont">Mother Contact No</label>
              <input
                type="text"
                name="cont"
                required
                pattern="[0-9]+"
                onChange={(e) => {
                  setMContactNumber(e.target.value);
                }}
              />
            </div>
            <div className="email field">
              <label htmlFor="email">Mother Email Id</label>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => {
                  setMEmail(e.target.value);
                }}
              />
            </div>
            <div className="occ field">
              <label htmlFor="occ">Mother Occupation</label>
              <input
                type="text"
                name="occ"
                required
                pattern="[A-Za-z\s]+"
                onChange={(e) => {
                  setMOccupation(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="first">
            <div className="des field">
              <label htmlFor="fullName">Designation</label>
              <input
                type="text"
                name="des"
                required
                pattern="[A-Za-z\s]+"
                onChange={(e) => {
                  setMDesignation(e.target.value);
                }}
              />
            </div>
            <div className="padd field">
              <label htmlFor="padd">Professional Address</label>
              <input
                type="text"
                name="padd"
                pattern="[A-Za-z0-9\s]+"
                required
                onChange={(e) => {
                  setMProfessionalAddress(e.target.value);
                }}
              />
            </div>
            <div className="income field">
              <label htmlFor="income">Annual Income</label>
              <input
                type="text"
                name="income"
                required
                pattern="[0-9]+"
                onChange={(e) => {
                  setMAnnualIncome(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="btn">
            <button onClick={bac}>Back</button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ParentDetails;
