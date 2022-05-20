import React from "react";

let about = "I am a fullstack web developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";
function About() {
    return (
    <div className="about-container">
        <h3 className="about-title">About</h3>
        <p className="about-ptag">{about}</p>
    </div>);
}

export default About;