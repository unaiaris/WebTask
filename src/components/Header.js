import { FaRegClock, FaPhoneAlt } from "react-icons/fa";
import { GoLocation, GoSearch } from "react-icons/go";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <ul className="header">
            <li className="header-item d-none d-md-flex">
                <GoSearch className="icons"/>
            </li>
            <li className="header-item">
                <GoLocation className="icons"/>
            </li>
            <li className="header-item border-orange-mobile">
                <FaPhoneAlt className="icons"/>
            </li>
            <li className="header-item d-none d-md-flex">
                <FaRegClock className="icons"/>
            </li>
        </ul>
  );
};

export default Header;
