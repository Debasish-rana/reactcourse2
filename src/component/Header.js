import { useState } from "react";
import { LOGO_URL } from "../util/urls";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo">
       <img src= {LOGO_URL} />
      </div>
      <div className="list-item">
        <ul>
          <li>
            Onlinestatus : { onlineStatus ? "🟢":"🔴"}
          </li>
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
          <li>
            <Link to={"/grocery"} className="navtext-style">
              Grocery
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
