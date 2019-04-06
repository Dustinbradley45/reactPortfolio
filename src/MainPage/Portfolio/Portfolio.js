import React, { Component } from "react";
import { Controller, Scene } from 'react-scrollmagic';
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

        const {
            width
        } = this.props;
        return (

            <Controller>
            <div className="portfolioWrapper">
                <div className="projectOneWrapper">
                    <div className="projectOneInfo">
                        <h2 className="projectOne"><span className="projectNum">1.</span> Face Detector App</h2>
                        <h3><span className="langUsed">React</span> <span className="langUsed">CSS3</span> <span className="langUsed">RESTful API</span> </h3>
                            <p className="projectOneDescription">Paste a URL into the detection box, using the Clarifai RESTful API it will recognize any faces within the image.</p>
                            {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectOneVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/face-detection" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="http://dustinbradley.ca/DragRace/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
                    </div>
                    <div className="projectImageContainerOne">
                        <img src={brainApp} alt=""/>
                    </div>
                </div>

                <div className="projectTwoWrapper">
                    <div className="projectTwoInfo">
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
                    <h3><span className="langUsed">HTML5</span> <span className="langUsed">CSS3</span> <span className="langUsed">RESTful API</span> <span className="langUsed">Paired Programming</span></h3>
                        <p className="projectThreeDescription">Think you know quotes? Using the Google Translate API, guess who said these classic quotes after they have been translated a few times.</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectThreeVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/brokenPhone" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="https://dustinbradley45.github.io/brokenPhone/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
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
                    <h3><span className="langUsed">React</span>  <span className="langUsed">Redux</span> <span className="langUsed">RESTful API</span></h3>
                        <p className="projectFourDescription">Using the RoboHash api and a simple placeholder api, search through your robofriends information! Created with React, refactored using Redux.</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectFourVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/robo_pals_redux" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="http://dustinbradley.ca/RoboFriends/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
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
                    <h3><span className="langUsed">React</span>  <span className="langUsed">React Router</span> <span className="langUsed">RESTful API</span> <span className="langUsed">Firebase</span> <span className="langUsed">Paired Programming</span> <span className="langUsed">CSS3</span> </h3>
                        <p className="projectFiveDescription">Simple restuarunt list maker for the indecisive eater.</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectFiveVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/dineWithMe" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="https://restdecider2.firebaseapp.com/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
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
                    <h3><span className="langUsed">React</span> <span className="langUsed">RESTful API</span> <span className="langUsed">Sass</span> </h3>
                        <p className="projectSixDescription">Will you beat out the other queens?</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectSixVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/drag-race-battle" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="#" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
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
            </Controller>
        )
    }
}

export default Portfolio;

