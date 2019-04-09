import React, { Component } from "react";
import { TweenLite } from "gsap";
import ProjectSixObject from "./../ProjectObjects/ProjectSixObject";
import dragRace from "./../../../Assets/dragRace.png";

class ProjectSix extends Component {
    constructor() {
        super();

        this.projectSixInfo = null;
        this.projectSixImage = null;

    }

    componentDidMount() {

    // PROJECT SIX ANIMATION
    this.animateFromRight = TweenLite.to(this.projectSixImage, 1, {
        opacity: 1,
        x: "0",
        y: "0",
        delay: 2
    })
    this.animateFromLeft = TweenLite.to(this.projectSixInfo, 1, {
        opacity: 1,
        x: "0",
        y: "0",
        delay: 2
    })

    }

    render() {
        const { projectSixClose, projectSixVisible, projectSixVisibleState, width } = this.props;
        return (
            <React.Fragment>
                <div className="projectSixWrapper">
                    <div className="projectSixInfo" ref={div => this.projectSixInfo = div}>
                    <h2 className="projectSix">6. Drag Race Battle</h2>
                    <h3><span className="langUsed">React</span> <span className="langUsed">RESTful API</span> <span className="langUsed">Sass</span> </h3>
                        <p className="projectSixDescription">Will you beat out the other queens? Test your luck in this simple battle platform game!</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectSixVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/drag-race-battle" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="http://dustinbradley.ca/DragRace/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
                    </div>
                    <div className="projectImageContainerSix" ref={div => this.projectSixImage = div}>
                        <img src={dragRace} alt="Drag Race Battle Preview"/>
                    </div>
                </div>
                 {
                     projectSixVisibleState === true ?
                        <ProjectSixObject
                            projectSixClose={projectSixClose}
                         /> :
                         null
                 }
            </React.Fragment>
        )
    }
}

export default ProjectSix;