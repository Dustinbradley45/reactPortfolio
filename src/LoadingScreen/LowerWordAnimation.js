import React, {Component } from "react";
import {TweenLite} from "gsap"

class LowerWordAnimation extends Component {
    constructor() {
        super();

        this.loadingAnimation = null;
        this.loader = null;

    }
            componentWillUnmount() {
                this.loadingAnimation = TweenLite.to(this.loader, .4, {
                    opacity: 0,
                    repeat: 5,
                })
            }
    render() {

    
        return (
            <div className="projectName">
                <h3  ref={h3=> this.loader= h3}>My Site is loading.<span className="loadingDot loadingDotOne">.</span><span className="loadingDot loadingDotTwo">.</span><span className="loadingDotThree loadingDot">.</span></h3>

            </div>
        )
    }
}

export default LowerWordAnimation;