import React, { Component } from "react";
import SkillBadges from "./SkillBadges";
import ScrollableAnchor from "react-scrollable-anchor";

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            skillBadgeVisible: false
        }
    }

    toggleBadges = () => {
        return (
            this.setState({
               skillBadgeVisible:!this.state.skillBadgeVisible
           })
       )
   }

    render() {
        const { toggleBadges } = this;
        const { skillBadgeVisible } = this.state;
        
        return (
            <div className="skillsWrapper">
                <div className="educationInfo">
                    <ScrollableAnchor id={"education"}>
                        <h2>Education</h2>
                    </ScrollableAnchor>
                    <h3>HackerYou - Web Development Immersive</h3>
                        <p>The Web Development Immersive program is a 9 weeks crash course in everything from the basics of html5 to the complexities of component based javaScript frameworks like React.js</p>
                        
                    {
                        skillBadgeVisible === false ? 
                                <button onClick={toggleBadges} className="stackToggle">
                                    <a href="#badges">
                                        See Stack
                                        </a></button> :
                                
                                <button onClick={toggleBadges} className="stackToggle">
                                    <a href="#education">Close Stack</a></button>
                        }
                        
              
                </div>
                {
                    skillBadgeVisible === true ?
                        <SkillBadges /> :
                        null
                }
           
            </div>
        )
    }
}

export default Skills;