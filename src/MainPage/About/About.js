import React from "react";
import headShot from "./../../Assets/headShot.jpg";

const About = () => {
    return (
        <div className="aboutWrapper">
            <div className="headshotContainer">
                <img src={headShot} alt=""/>
            </div>
            <div className="aboutInfo">
               <p>Hi, my name is Dustin. I am a web developer based in Toronto, Canada. I like letting my creativity come out through well-structured code. With my background in Human Resource Management, I have an eye for detail and a desire to problem-solve.</p>

                <p>With the ever-changing world of Web Development, I am incredibly eager to learn new, more efficient ways to create. I like writing clean, modular code, which is the basis for JavaScript frameworks like React.JS. When I am not coding, you can find me on my bike exploring the weird    parts of Toronto, at a concert or dancing around my kitchen.</p>
            </div>
        </div>
    )
}

export default About;