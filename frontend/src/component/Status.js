import React from "react";
import "./Status.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Status = ({ value, educationValue, uploadValue }) => {
  return (
    <>
      <div className="container">
        <div className="dash">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div>
              <h1>Dashboard</h1>
              <hr id="statushr" />
              <center>
                <div className="table-container">
                  <table id="myTable">
                    <tr>
                      <th>Id</th>
                      <th>Service</th>
                      <th>Completion Status</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Basic Details</td>
                      <td>{value}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Education Details</td>
                      <td>{educationValue}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Upload</td>
                      <td>{uploadValue}</td>
                    </tr>
                  </table>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
