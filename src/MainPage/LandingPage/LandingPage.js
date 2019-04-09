import React, {Component} from "react";
import { TweenLite } from "gsap";
import Hand from "./Hand.js";
import Raccoon from "./Raccoon.js";

class LandingPage extends Component {
    constructor() {
        super();

        this.headerOneAnimate = null;
        this.headerTwoAnimate = null;
        this.headerThreeAnimate = null;
        this.headerOne = null;
        this.headerTwo = null;
        this.headerThree = null;
        this.openBracket = null;
        this.closeBracket = null;
        this.animateBracket = null;
    }


    componentDidMount() {

        this.animateBracket = TweenLite.to(this.openBracket, 1, {
            y: 0,
            rotation:"0",
            delay:1
        })

        this.animateBracket = TweenLite.to(this.closeBracket, 1, {
            y: 0,
            rotation: "0",
            delay:1
        })



         this.headerOneAnimate = TweenLite.to(this.headerOne, 1, {
             y: -10,
            opacity: 1,
             
         });
        this.headerTwoAnimate = TweenLite.to(this.headerTwo, 1, {
            y: -10,
            opacity: 1,
            delay: 1,
        });
        this.headerThreeAnimate = TweenLite.to(this.headerThree, 1, {
            y: -10,
            opacity: 1,
            delay: 2,
        });
    }


    render() {

        return (
            <React.Fragment>
                <div className="landingPageWrapper"  >
                    <h1 ref={h1 => this.headerOne = h1}>Hi, i'm Dustin <Hand/>.</h1>
                   
                    
                    <h2 ref={h2 => this.headerTwo = h2}>Web Developer <span className="dev"> <span className="openBracket" ref={span => this.openBracket = span}>&#60;</span>  <span className="closeBracket" ref={span => this.closeBracket = span}>&#62;</span></span>.</h2>

                    <h3 ref={h3 => this.headerThree = h3}>Toronto Lover <Raccoon />.</h3>
                </div>
                <div style={{ display: "none" }}>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </React.Fragment>
        )
    }
}

export default LandingPage;