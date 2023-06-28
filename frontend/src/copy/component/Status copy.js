import React, { useState } from "react";
import "./Status.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Status() {
  const statuses = [
    { id: 1, service: "Basic Details", stat: "Complete" },
    { id: 2, service: "Education Details", stat: "Partially Complete" },
    { id: 3, service: "Upload", stat: "Incomplete" },
  ];

  // const calculatePercentage = (status) => {
  //   switch (status) {
  //     case "Complete":
  //       return "100%";
  //     case "Partially Complete":
  //       return "50%";
  //     case "Incomplete":
  //       return "100%";
  //     default:
  //       return "";
  //   }
  // };

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
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Service</th>
                        <th>Completion Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statuses.map((status) => (
                        <tr key={status.id}>
                          <td>{status.id}</td>
                          <td>{status.service}</td>
                          <td>{status.stat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;

export const smex = async () => {
  Status();
  console.log("smexsex");
  let db = Status.statuses.stat.value;
  db.value = "66";
};
