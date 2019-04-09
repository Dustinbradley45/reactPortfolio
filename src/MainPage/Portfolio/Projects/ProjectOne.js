import React, { Component } from "react";
import ProjectOneObject from "./../ProjectObjects/ProjectOneObject";
import { TweenLite } from "gsap";
import brainApp from "./../../../Assets/brainApp.png";

class ProjectOne extends Component {
    constructor() {
        super();

        this.projectOneInfo = null;
        this.projectOneImage = null;
    }

    componentDidMount() {
         //    PROJECT ONE ANIMATION
           this.animateFromRight = TweenLite.to(this.projectOneInfo, 1, {
               opacity: 1,
               x: "0",
               y: "0"
           })
           this.animateFromLeft = TweenLite.to(this.projectOneImage, 1, {
               opacity: 1,
               x: "0",
               y: "0"
           })
    }


    render() {
        const { projectOneVisible, projectOneClose, width, projectOneVisibleState } = this.props;
    
    
        return (
    
            <React.Fragment>
                <div className="projectOneWrapper">
                    <div className="projectOneInfo" ref={div => this.projectOneInfo = div}>
                        <h2 className="projectOne"><span className="projectNum">1.</span> Face Detector App</h2>
                        <h3><span className="langUsed">React</span> <span className="langUsed">CSS3</span> <span className="langUsed">RESTful API</span> </h3>
                        <p className="projectOneDescription">Paste a URL into the detection box, using the Clarifai RESTful API it will recognize any faces within the image. Input an image URL to get started!</p>
                        {
                            width >= 900 ?
                                <button className="previewButton" onClick={projectOneVisible}>Preview</button> :
                                <React.Fragment>
                                    <a href="https://github.com/Dustinbradley45/face-detection" className="previewButton githubButton" target="_blank">Github</a>
                                    <a href="http://dustinbradley.ca/faceDetect/" className="previewButton liveButton" target="_blank">Live</a>
                                </React.Fragment>
                        }
                    </div>
                    <div className="projectImageContainerOne" ref={div => this.projectOneImage = div}>
                        <img src={brainApp} alt="Face Detector Preview" />
                    </div>
                </div>
                <div className="projectOneObjectContainer">
                    {
                        projectOneVisibleState === true ?
                            <ProjectOneObject
                                projectOneClose={
                                    projectOneClose
                                }
                            
                            /> :
                            null
                    }
                </div>
            </React.Fragment>


        )
    }
}

export default ProjectOne;