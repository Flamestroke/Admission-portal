import React, { useState } from "react";
import "./login.css";
import img from "./image/logo.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    console.log("wor");
    // alert("Logged in successfully.");
    const { data } = await axios.post("/Login", {
      email: email,
      password: password,
    });
    console.log(data.result);

    if (data.result === null) alert("Authentication failed");
    else {
      navigate("/Status");
    }
  };

  const uncoverL = async () => {
    let eyeicon = document.getElementById("eyeicon");
    let pass = document.getElementById("password");

    eyeicon.onclick = function () {
      if (pass.type == "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    };
  };

  return (
    <>
      <div className="body">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="title">
              <h3>Login </h3>
            </div>
            <p>Welcome to product name, Please login to your account</p>
            <form onSubmit={(e) => login(e)}>
              <div className="row">
                <h3>College Id</h3>
                <i className="fa-solid fa-user"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="id@pvppcoe.ac.in"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {/* {userErr ? <label ><strong>Please enter right ID</strong></label> : ""} */}
              </div>
              <div className="row">
                <h3>Password</h3>
                <i
                  className="fa-solid fa-eye"
                  id="eyeicon"
                  onClick={uncoverL}
                ></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {/* {passErr ? <label ><strong>Please enter right Password</strong></label> : ""} */}
              </div>

              <div className="row button">
                <button type="submit">
                  {/* <Link to="/Basic" style={styles.link}>  */}
                  Submit
                  {/* </Link> */}
                </button>
              </div>

              <p className="forgot-password text-right">
                Don't have an account? <a href="/">Sign Up</a>
              </p>

              <br></br>

              <footer>
                <a href="">www.getflytechnology.com</a>
              </footer>
            </form>
          </div>
        </div>
        <script src="valid.js"></script>
      </div>
    </>
  );
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Login;