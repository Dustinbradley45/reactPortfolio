import React, { Component } from "react";
import {TweenLite } from "gsap";
import tele from "./../../../Assets/Broken-Telephone-Desktop.png";
import ProjectThreeObject from "./../ProjectObjects/ProjectThreeObject";

class ProjectThree extends Component {
    constructor() {
        super();
        this.projectThreeInfo = null;
        this.projectThreeImage = null;
    }

    componentDidMount() {
        // PROJECT THREE ANIMTION
         this.animateFromRight = TweenLite.to(this.projectThreeInfo, 1, {
             opacity: 1,
             x: "0",
             y: "0",
             delay:0.8
         })
         this.animateFromLeft = TweenLite.to(this.projectThreeImage, 1, {
             opacity: 1,
             x: "0",
             y: "0",
             delay:0.8
         })
    }

    render() {
        const { width, projectThreeVisible, projectThreeClose, projectThreeVisibleState } = this.props;
        return (
            <React.Fragment>
              <div className="projectThreeWrapper">
                    <div className="projectThreeInfo" ref={div => this.projectThreeInfo = div}>
                    <h2 className="projectThree">3. Broken Telephone</h2>
                    <h3><span className="langUsed">HTML5</span> <span className="langUsed">CSS3</span> <span className="langUsed">RESTful API</span> <span className="langUsed">Paired Programming</span></h3>
                            <p className="projectThreeDescription">Think you know famous quotes? Guess the author after they have been translated to the language of your choosing and back again!</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectThreeVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/brokenPhone" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="https://dustinbradley45.github.io/brokenPhone/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
                    </div>
                    <div className="projectImageContainerThree" ref={div => this.projectThreeImage = div}>
                        <img src={tele} alt="Broken Telephone Preview"/>
                    </div>
                </div>
                 <div className="projectThreeObjectContainer">
                        {
                            projectThreeVisibleState === true ? 
                            <ProjectThreeObject
                                projectThreeClose={projectThreeClose}/> :
                                null
                        }
                </div> 
            </React.Fragment>
        )
    }

   
}

export default ProjectThree