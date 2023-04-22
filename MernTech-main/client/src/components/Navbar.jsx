import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
       
          {/* <Link className="link" to="/?cat=science"> */}
          <Link className="link" to="/Carrier">
            <h6>Career</h6>
          </Link>
          {/* <Link className="link" to="/?cat=technology"> */}
          <Link className="link" to="/">
            <h6>Clients</h6>
          </Link>
          <Link className="link" to="/">
            
            <h6>Home</h6>
          </Link>
          {/* <Link className="link" to="/?cat=design"> */}
          <Link className="link" to="/About">
            <h6>About</h6>
          </Link>
          {/* <Link className="link" to="/?cat=food"> */}

          <Link className="link" to="/Contact">
            <h6>Contact</h6>
          </Link>
        
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="links1" to="/login">
              Login
            </Link>
          )}
        
          <span className="write">
            <Link className="links1" to="/write">
             Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
