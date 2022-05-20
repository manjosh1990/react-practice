import React from "react"
import reactLogo from "../images/react-logo.png"
function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src={reactLogo} alt="react-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;