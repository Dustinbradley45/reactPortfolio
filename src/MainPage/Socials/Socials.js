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
                <li className="social" ref={li => this.github= li}><a href="https://github.com/Dustinbradley45" target="_blank"><i className="fab fa-github"></i></a></li>
                <li className="social" ref={li => this.twitter= li}><a href="https://twitter.com/dustinbradley45" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li className="social" ref={li => this.linkedIn= li}><a href="https://linkedin.com/in/dustin-bradley" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>

        )
    }
}

export default Socials;