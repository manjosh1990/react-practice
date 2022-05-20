import React from "react"
import logoImg from "../images/react-icon-small.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logoImg} alt="logo-img" className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>)
}