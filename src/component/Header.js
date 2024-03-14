import { useState } from "react";
import { LOGO_URL } from "./util/urls";
import { Link } from "react-router-dom";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
       <img src= {LOGO_URL} />
      </div>
      <div className="list-item">
        <ul>
          <li>
            <Link to={"/"} className="navtext-style">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="navtext-style">
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="navtext-style">
              Contact
            </Link>
          </li>
          <li>Cart</li>

          <button
            className="log-btn"
            onClick={() => {
              logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
