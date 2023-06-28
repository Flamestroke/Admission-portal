import React from "react";
import "./Status.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Address from "./Basic/Address";
import { useRef } from "react";

const Status = ({ stat }) => {
  // const stat = useRef(null);
  console.log(stat);

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
                      <td>
                        <div id="bd" useRef={stat}></div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Education Details</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Upload</td>
                      <td>0</td>
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

export const smex = async ({ stat }) => {
  console.log("smexsex");
  //stat.current.innerText = "hue";
};
