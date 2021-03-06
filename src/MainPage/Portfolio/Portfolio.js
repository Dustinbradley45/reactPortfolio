// DEPENDENCIES
import React, { Component } from "react";
import {TweenLite } from "gsap";

// COMPONENTS
import ProjectOne from "./Projects/ProjectOne.js";
import ProjectTwo from "./Projects/ProjectTwo";
import ProjectThree from "./Projects/ProjectThree";
import ProjectFour from "./Projects/ProjectFour.js";
import ProjectFive from "./Projects/ProjectFive.js";
import ProjectSix from "./Projects/ProjectSix.js";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projectOneVisibleState: false,
            projectTwoVisibleState: false,
            projectThreeVisibleState: false,
            projectFourVisibleState: false,
            projectFiveVisibleState: false,
            projectSixVisibleState:false
        }

        this.animateFromRight = null;
        this.animateFromLeft = null;
    }

    // SHOW PROJECT OBJECT
    projectOneVisible = () => {
        this.setState({
            projectOneVisibleState: !this.state.projectOneVisibleState
        })
    }

    projectTwoVisible = () => {
        this.setState({
            projectTwoVisibleState:!this.state.projectTwoVisibleState
        })
    }

    projectThreeVisible = () => {
        this.setState({
            projectThreeVisibleState: !this.state.projectThreeVisibleState
        })
    }

    projectFourVisible = () => {
        this.setState({
            projectFourVisibleState: !this.state.projectFourVisibleState
        })
    }
    projectFiveVisible = () => {
        this.setState({
            projectFiveVisibleState: !this.state.projectFiveVisibleState
        })
    }

    projectSixVisible = () => {
        this.setState({
            projectSixVisibleState: !this.state.projectSixVisibleState
        })
    }

    // CLOSE OBJECTS
    projectOneClose = () => {
        this.setState({
            projectOneVisibleState:false
        })
    }

    projectTwoClose = () => {
        this.setState({
            projectTwoVisibleState: false
        })
    }

    projectThreeClose = () => {
        this.setState({
            projectThreeVisibleState:false
        })
    }

    projectFourClose = () => {
        this.setState({
            projectFourVisibleState: false
        })
    }

    projectFiveClose = () => {
        this.setState({
            projectFiveVisibleState:false
        })
    }

    projectSixClose = () => {
        this.setState({
            projectSixVisibleState:false
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

        const {
            projectOneVisibleState,
            projectTwoVisibleState,
            projectThreeVisibleState,
            projectFourVisibleState,
            projectFiveVisibleState,
            projectSixVisibleState
        } = this.state;

        return (

            <div className="portfolioWrapper">
                
            <ProjectOne
                projectOneClose={projectOneClose}
                projectOneVisible={projectOneVisible}
                projectOneVisibleState={projectOneVisibleState}
                width={width}
            />
           
            <ProjectTwo
                projectTwoClose={projectTwoClose}
                projectTwoVisible={projectTwoVisible}
                projectTwoVisibleState={projectTwoVisibleState}
                width={width}
            />
            
            <ProjectThree
                projectThreeClose={projectThreeClose}
                projectThreeVisible={projectThreeVisible}
                projectThreeVisibleState={projectThreeVisibleState}
                width={width}
            />
                
            <ProjectFour
                projectFourClose={projectFourClose}
                projectFourVisible={projectFourVisible}
                projectFourVisibleState={projectFourVisibleState}
                width={width}
            />

            <ProjectFive
                projectFiveClose={projectFiveClose}
                projectFiveVisible={projectFiveVisible}
                projectFiveVisibleState={projectFiveVisibleState}
                width={width}
            />

            <ProjectSix
                    projectSixClose={projectSixClose}
                    projectSixVisible={projectSixVisible}
                    projectSixVisibleState={projectSixVisibleState}
                    width={width}
            />
         </div>
         
        )
    }
}

export default Portfolio;

