import React, { Component } from "react";
import { TweenLite } from "gsap";
import ProjectFourObject from "./../ProjectObjects/ProjectFourObject";
import robots from "./../../../Assets/robofriends.png";

class ProjectFour extends Component {
    constructor() {
        super();

        this.projectFourInfo = null;
        this.projectFourImage = null;
    }

    componentDidMount() {
         // PROJECT FOUR ANIMATION
         this.animateFromRight = TweenLite.to(this.projectFourImage, 1, {
             opacity: 1,
             x: "0",
             y: "0",
             delay: 1.2
         })
         this.animateFromLeft = TweenLite.to(this.projectFourInfo, 1, {
             opacity: 1,
             x: "0",
             y: "0",
             delay: 1.2
         })

    }

    render() {
        const { projectFourClose, projectFourVisible, width, projectFourVisibleState } = this.props;

        return (
            <React.Fragment>
                 <div className="projectFourWrapper">
                    <div className="projectFourInfo" ref={div => this.projectFourInfo = div}>
                    <h2 className="projectFour">4. RoboFriends Phonebook</h2>
                    <h3><span className="langUsed">React</span>  <span className="langUsed">Redux</span> <span className="langUsed">RESTful API</span></h3>
                        <p className="projectFourDescription">Using the RoboHash API and a simple placeholder API, search through your robofriends information! Originally created with React, refactored using Redux.</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectFourVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/robo_pals_redux" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="http://dustinbradley.ca/RoboFriends/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
                    </div>
                    <div className="projectImageContainerFour" ref={div => this.projectFourImage = div}>
                        <img src={robots} alt="RoboFriends Preview"/>
                    </div>
                </div>
                 <div className="projectFourObjectContainer">
                    {
                        projectFourVisibleState === true ?
                            <ProjectFourObject
                                projectFourClose={projectFourClose}
                                /> :
                                null
                        }
                    </div>
            </React.Fragment>
        )
    }

}

export default ProjectFour;