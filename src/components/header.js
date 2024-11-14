import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.scss";
import logo from "../assets/logo.png"

export const Header = () => {
  return (
    <nav className="header">
      <div className="headerLogo">
        <img src={logo} alt="logo"></img>
      </div>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
}