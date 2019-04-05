import React, {Component } from "react";
import headShot from "./../../Assets/headShot.jpg";
import { TweenLite } from "gsap";

class About extends Component {
    constructor() {
        super();

        this.aboutComponent = null;
        this.headshot = null;
        this.fadeInUp = null;
        this.fadeInDown = null;
        this.paragraphOne = null;
        this.paragraphTwo = null;

    }
    componentDidMount() {
        this.fadeInUp = TweenLite.to(this.headshot, 1, {
            opacity: 1,
            y:"10",
        })
        this.fadeInDown = TweenLite.to(this.paragraphOne, 1, {
            opacity: 1,
            y: "-10",
             
        })
        this.fadeInDown = TweenLite.to(this.paragraphTwo, 1, {
            opacity: 1,
            y: "-10",
            delay:.5,
        })
        
    }

    
    render() {

    
        return (
            <div className="aboutWrapper" >
                <div className="headshotContainer" ref={div => this.headshot = div}>
                    <img src={headShot} alt="" />
                </div>
                <div className="aboutInfo">
                    <p ref={p => this.paragraphOne= p}>Hi, my name is Dustin. I am a web developer based in Toronto, Canada. I like letting my creativity come out through well-structured code. With my background in Human Resource Management, I have an eye for detail and a desire to problem-solve.</p>

                    <p ref={p => this.paragraphTwo = p}>With the ever-changing world of Web Development, I am incredibly eager to learn new, more efficient ways to create. I like writing clean, modular code, which is the basis for JavaScript frameworks like React.JS. When I am not coding, you can find me on my bike exploring the weird    parts of Toronto, at a concert or dancing around my kitchen.</p>
                </div>
            </div>
        )
    }
}

export default About;