import React from "react";
let interests ="Food expert. Music enthusiast. Reader. Cook. Biryani buff. Entrepreneur. Travel geek. Tea fanatic.";
const Interests = () =>(
    <div className="interests-container">
        <h3 className="interest">Interests</h3>
        <p className="interest-ptag">{interests}</p>
    </div>
);

export default Interests;