import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="container">
      <nav className="navBar" ref={dropdownRef}>
      
        <Link to="/" className="navLogo link">
          <FaHome style={{ fontSize: "25px" }} />
        </Link>

        <button type="button" className="menuButton" onClick={toggleMenu}>
          <FaBars />....
        </button>

        <div className={`navLinks ${isOpen ? "show" : ""}`}>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About-Me
          </Link>
          <Link to="/skill" className="link">
            Skills
          </Link>
          <Link to="/project" className="link">
            Project
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
