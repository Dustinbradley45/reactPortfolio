import React from "react";
import { Link } from "react-router-dom";

const ContinueButtonLink = ({goToMain }) => {
    return (
    
        <button className="toMainPage"
            onClick={goToMain}>Continue</button>
 
    )
}

export default ContinueButtonLink;