import React, { Component } from "react";
import SkillBadges from "./SkillBadges";
import ScrollableAnchor from "react-scrollable-anchor";
import { TweenLite } from "gsap";

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            skillBadgeVisible: false
        }
        this.header = null;
        this.subHeading = null;
        this.paragraph = null;
        this.moveInLeft = null;
        this.moveInRight = null;
    }

     scrollTo = () => {
         TweenLite.to(window, 2, {
             scrollTo: "#badgeWrapper"
         });

     };

    toggleBadges = () => {
        this.scrollTo()
        return (
            this.setState({
                skillBadgeVisible:!this.state.skillBadgeVisible
            })
            )
    }
    
    componentDidMount() {
        this.moveInLeft = TweenLite.to(this.header, .8, {
            opacity: 1,
            y: "-10",
        })

         this.moveInRight = TweenLite.to(this.subHeading, .8, {
             opacity: 1,
             y: "-10",
             delay:.5
         })

         this.moveInLeft = TweenLite.to(this.paragraph, .8, {
             opacity: 1,
             y: "-10",
             delay:.5
         })

    }

    render() {
       
        const { toggleBadges } = this;
        const { skillBadgeVisible } = this.state;
        
        return (
            <div className="skillsWrapper">
                <div className="educationInfo">
                   
                    <h2 ref={h2 => this.header = h2}>Education</h2>
                  
                    <h3 ref={h3 => this.subHeading = h3}>HackerYou - Web Development Immersive</h3>
                    <p ref={p => this.paragraph = p}>The Web Development Immersive program is a 9 weeks crash course in everything from the basics of html5 to the complexities of component based javaScript frameworks like React.js</p>
                        
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