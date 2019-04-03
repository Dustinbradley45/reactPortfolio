import React, { Component } from "react";
import { TweenLite } from "gsap";
import { linear } from "@popmotion/easing";


class Socials extends Component {
    constructor() {
        super();

        this.github = null;
        this.twitter = null;
        this.linkedIn = null;
        this.fadeInLinks = null;

    }
    componentDidMount() {
        this.fadeInLinks = TweenLite.to(this.github, 1, {
            opacity: 1,
            delay:2
        });
          this.fadeInLinks = TweenLite.to(this.twitter, 1, {
              opacity: 1,
              delay:2.4
          });
          this.fadeInLinks = TweenLite.to(this.linkedIn, 1, {
              opacity: 1,
              delay:2.8
          });

    }
    render() {


    
        return (
      
            <ul>
                <li className="social" ref={li => this.github= li}><i className="fab fa-github"><a href="#"></a></i></li>
                <li className="social" ref={li => this.twitter= li}><i className="fab fa-twitter"><a href="#"></a></i></li>
                <li className="social" ref={li => this.linkedIn= li}><i className="fab fa-linkedin-in"><a href="#"></a></i></li>
                {/* <li className="socials"></li> */}
            </ul>

        )
    }
}

export default Socials;