import React, { Component } from "react";
import ProjectTwoObject from "./../ProjectObjects/ProjectTwoObject";
import { TweenLite } from "gsap";
import planted from "./../../../Assets/Planted-Home.jpg";

class ProjectTwo extends Component {
    constructor() {
        super();

        this.projectTwoInfo = null;
        this.projectTwoImage = null;
    }

    componentDidMount() {
         // PROJECT TWO ANIMATION
         this.animateFromRight = TweenLite.to(this.projectTwoImage, 1, {
             opacity: 1,
             x: "0",
             y: "0",
             delay: 0.4
         })
         this.animateFromLeft = TweenLite.to(this.projectTwoInfo, 1, {
             opacity: 1,
             x: "0",
             y: "0",
             delay: 0.4
         })
    }

    render() {
        const { projectTwoVisible, projectTwoClose, projectTwoVisibleState, width } = this.props;

        return (
            <React.Fragment>
            <div className="projectTwoWrapper">
                <div className="projectTwoInfo" ref={div => this.projectTwoInfo = div}>
                    <h2 className="projectTwo">2. Planted</h2>
                    <h3><span className="langUsed">HTML5</span> <span className="langUsed">Sass</span> <span className="langUsed">jQuery</span></h3>
                        <p className="projectTwoDescription">Perfect three page PSD Conversion</p>
                        {
                            width >= 900 ?
                                <button className="previewButton" onClick={projectTwoVisible}>Preview</button> :
                                <React.Fragment>
                                    <a href="https://github.com/Dustinbradley45/dustinBradleyProject2" className="previewButton githubButton" target="_blank">Github</a>
                                    <a href="https://dustinbradley45.github.io/dustinBradleyProject2/" className="previewButton liveButton" target="_blank">Live</a>
                                </React.Fragment>
                        }       
                
                </div>
                
                <div className="projectImageContainerTwo" ref={div => this.projectTwoImage = div}>
                    <img src={planted} alt="Planted Preview"/>
                </div>
            </div>
            <div className="projectTwoObjectContainer">
                {
                    projectTwoVisibleState ===true ? 
                    <ProjectTwoObject
                        projectTwoClose = {
                            projectTwoClose
                        }
                        /> :
                        null
                }
            </div>
        </React.Fragment>
        )
    }
}

export default ProjectTwo;