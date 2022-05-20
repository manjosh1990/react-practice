import React from "react";
import heroImage from "../images/hero_img.jpg";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
function Info() {
    return (
        <div className="info-container">
            <img src={heroImage} alt="heroImage"></img>
            <h1>Manjosh Ramesh</h1>
            <h3>Fullstack Developer</h3>
            <h4>manjoshramesh.website</h4>
            <div className="info-btn-container">
                <div className="email-btn">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    Email
                </div>
                <div className="linkedin-btn">
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                </div>
            </div>
            <About/>
            <Interests></Interests>
            <Footer/>
        </div>
    )
}
export default Info;