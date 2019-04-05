import React, {Component } from "react";
import {TweenLite} from "gsap"

class LowerWordAnimation extends Component {
    constructor() {
        super();


    }
          
    render() {

    
        return (
            <div className="projectName">
                <h3  ref={h3=> this.loader= h3}>Site Is Loading<span className="loadingDot loadingDotOne">.</span><span className="loadingDot loadingDotTwo">.</span><span className="loadingDotThree loadingDot">.</span></h3>

            </div>
        )
    }
}

export default LowerWordAnimation;