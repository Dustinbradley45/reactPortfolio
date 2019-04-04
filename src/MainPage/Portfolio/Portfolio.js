import React, { Component } from "react";
import planted  from "./../../Assets/Planted-Home.jpg";
import dine from "./../../Assets/dine-I-might.png";
import tele from "./../../Assets/Broken-Telephone-Desktop.png";
import robots from "./../../Assets/robofriends.png"; 
import dragRace from "./../../Assets/dragRace.png";
import brainApp from "./../../Assets/brainApp.png";
import ProjectOne from "./ProjectOne.js";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour.js";
import ProjectFive from "./ProjectFive.js";
import ProjectSix from "./ProjectSix.js";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projectOneVisible: false,
            projectTwoVisible: false,
            projectThreeVisible: false,
            projectFourVisible: false,
            projectFiveVisible: false,
            projectSixVisible:false
        }
    }

    projectOneVisible = () => {
        this.setState({
            projectOneVisible: !this.state.projectOneVisible
        })
    }

    projectTwoVisible = () => {
        this.setState({
            projectTwoVisible:!this.state.projectTwoVisible
        })
    }

    projectThreeVisible = () => {
        this.setState({
            projectThreeVisible: !this.state.projectThreeVisible
        })
    }

    projectFourVisible = () => {
        this.setState({
            projectFourVisible: !this.state.projectFourVisible
        })
    }
    projectFiveVisible = () => {
        this.setState({
            projectFiveVisible: !this.state.projectFiveVisible
        })
    }

    projectSixVisible = () => {
        this.setState({
            projectSixVisible: !this.state.projectSixVisible
        })
    }

    // CLOSE OBJECTS

    projectOneClose = () => {
        this.setState({
            projectOneVisible:false
        })
    }

    projectTwoClose = () => {
        this.setState({
            projectTwoVisible: false
        })
    }

    projectThreeClose = () => {
        this.setState({
            projectThreeVisible:false
        })
    }

    projectFourClose = () => {
        this.setState({
            projectFourVisible: false
        })
    }

    projectFiveClose = () => {
        this.setState({
            projectFiveVisible:false
        })
    }

    projectSixClose = () => {
        this.setState({
            projectSixVisible:false
        })
    }


    render() {
        const {
            projectOneVisible,
            projectTwoVisible,
            projectThreeVisible,
            projectFourVisible,
            projectFiveVisible,
            projectSixVisible,
            projectOneClose,
            projectTwoClose,
            projectThreeClose,
            projectFourClose,
            projectFiveClose,
            projectSixClose} = this;
        return (
            <div className="portfolioWrapper">
                <div className="projectOneWrapper">
                    <div className="projectOneInfo">
                        <h2 className="projectOne">1. Face Detector App</h2>
                        <h3>React - CSS3 - RESTful API</h3>
                            <p className="projectOneDescription">Paste a URL into the detection box, using the Clarifai RESTful API it will recognize any faces within the image.</p>
                        <button className="previewButton" onClick={projectOneVisible}>Preview</button>
                    </div>
                    <div className="projectImageContainerOne">
                        <img src={brainApp} alt=""/>
                    </div>
                </div>

                <div className="projectTwoWrapper">
                    <div className="projectTwoInfo">
                    <h2 className="projectTwo">2. Planted</h2>
                    <h3>html5 - Sass - jQuery</h3>
                        <p className="projectTwoDescription">Perfect three page PSD Conversion</p>
                        <button className="previewButton" onClick={projectTwoVisible}>Preview</button>
                    </div>
                    <div className="projectImageContainerTwo">
                        <img src={planted} alt=""/>
                    </div>
                </div>
                    <div className="projectTwoObjectContainer">
                        {
                            this.state.projectTwoVisible ===true ? 
                            <ProjectTwo
                                projectTwoClose = {
                                    projectTwoClose
                                }
                                /> :
                                null
                        }
                    </div>

                 <div className="projectThreeWrapper">
                    <div className="projectThreeInfo">
                    <h2 className="projectThree">3. Broken Telephone</h2>
                    <h3>html5 - CSS - jQuery - Paired Programming - RESTful API</h3>
                        <p className="projectThreeDescription">Think you know quotes? Using the Google Translate API, guess who said these classic quotes after they have been translated a few times.</p>
                        <button className="previewButton" onClick={projectThreeVisible}>Preview</button>
                    </div>
                    <div className="projectImageContainerThree">
                        <img src={tele} alt=""/>
                    </div>
                </div>
                 <div className="projectFourObjectContainer">
                        {
                            this.state.projectThreeVisible === true ? 
                            <ProjectThree
                                projectThreeClose={projectThreeClose}/> :
                                null
                        }
                </div>

                <div className="projectFourWrapper">
                    <div className="projectFourInfo">
                    <h2 className="projectFour">4. RoboFriends Phonebook</h2>
                    <h3>React - Redux - RESTful API</h3>
                        <p className="projectFourDescription">Using the RoboHash api and a simple placeholder api, search through your robofriends information! Created with React, refactored using Redux.</p>
                        <button className="previewButton" onClick={projectFourVisible}>Preview</button>
                    </div>
                    <div className="projectImageContainerFour">
                        <img src={robots} alt=""/>
                    </div>
                </div>
                 <div className="projectFourObjectContainer">
                    {
                        this.state.projectFourVisible === true ?
                            <ProjectFour
                                projectFourClose={projectFourClose}
                                /> :
                                null
                        }
                    </div>

                 <div className="projectFiveWrapper">
                    <div className="projectFiveInfo">
                    <h2 className="projectFive">5. Dine-I-Mite</h2>
                    <h3>React - React Router - RESTful API - Firebase - Paired Programming - CSS </h3>
                        <p className="projectFiveDescription">Simple restuarunt list maker for the indecisive eater.</p>
                        <button className="previewButton" onClick={projectFiveVisible}>Preview</button>
                    </div>
                    <div className="projectImageContainerFive">
                        <img src={dine} alt=""/>
                    </div>
                </div>
                  {
                            this.state.projectFiveVisible === true ? 
                        <ProjectFive projectFiveClose={projectFiveClose} /> :
                                null
                        } 

                <div className="projectSixWrapper">
                    <div className="projectSixInfo">
                    <h2 className="projectSix">6. Drag Race Battle</h2>
                    <h3>React - RESTful API - Sass </h3>
                        <p className="projectSixDescription">Will you beat out the other queens?</p>
                        <button className="previewButton" onClick={projectSixVisible}>Preview</button>
                    </div>
                    <div className="projectImageContainerSix">
                        <img src={dragRace} alt=""/>
                    </div>
                </div>
                 {
                     this.state.projectSixVisible === true ?
                        <ProjectSix
                            projectSixClose={projectSixClose}
                         /> :
                         null
                 }
                

            </div>
        )
    }
}

export default Portfolio;

