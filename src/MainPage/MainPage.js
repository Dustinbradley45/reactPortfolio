import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from "./Header/Header.js";
import Navigation from "./Navigation/Navigation";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";
import MobileNav from "./Navigation/MobileNav";
import WindowResize from "./WindowResize/WindowResize";

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            showLanding: true,
            goToAbout: false,
            goToSkills: false,
            goToContact:false,
            goToPortfolio: false,
            fontWeight: "600",
            height: window.innerHeight,
            width: window.innerWidth
        }
         this.updateDimensions = this.updateDimensions.bind(this);
    }

    goToAboutLink = () => {
        this.setState({
            showLanding:false,
            goToAbout: true,
            goToSkills: false,
            goToContact: false,
            goToPortfolio: false,
        })
    }

    goToHomeLink = () => {
        this.setState({
            showLanding: true,
            goToAbout: false,
            goToSkills: false,
            gotToContact: false,
            goToPortfolio: false,
        })
    }
    goToSkillsLink = () => {
        this.setState({
            showLanding: false,
            goToAbout: false,
            goToSkills: true,
            goToContact: false,
            goToPortfolio: false,
        })
    }

    goToContactLink = () => {
        this.setState({
            showLanding: false,
            goToAbout: false,
            goToSkills: false,
            goToContact: true,
            goToPortfolio: false,
        })
    }

    goToPortfolioLink = () => {
         this.setState({
             showLanding: false,
             goToAbout: false,
             goToSkills: false,
             goToContact: false,
             goToPortfolio: true,
         })
    }

    
    componentDidMount() {
         console.log(this.state.height);
         // Additionally I could have just used an arrow function for the binding `this` to the component...
         window.addEventListener("resize", this.updateDimensions);
       
   }
    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }





    render() {
        const { particlesConfig } = this.props;
        const { showLanding, goToAbout, goToSkills, goToContact, goToPortfolio,fontWeight, width } = this.state;
        const { goToAboutLink, goToHomeLink,goToSkillsLink, goToContactLink, goToPortfolioLink, updateDimensions } = this;

        return (
            <div className="mainWrapper">
                <WindowResize
                    updateDimensions={updateDimensions}
                />
            <Particles 
                params={particlesConfig}
                className="particles"
                />
                {
                    this.state.width >= 650 ? 
                <Navigation
                    activeLink={fontWeight}
                    goToAboutLink={goToAboutLink}
                    goToHomeLink={goToHomeLink}
                    width={this.state.width}
                    goToSkillsLink={goToSkillsLink}
                    goToContactLink={goToContactLink}
                    goToPortfolioLink={goToPortfolioLink}
                        /> :
                        
                <MobileNav
                    goToAboutLink={goToAboutLink}
                    goToHomeLink={goToHomeLink}
                    goToSkillsLink={goToSkillsLink}
                    goToContactLink={goToContactLink}
                    goToPortfolioLink={goToPortfolioLink}
                        />
                    
                }
            {
                    showLanding === true ? 
                        <LandingPage /> :
                            goToAbout === true ?
                            <About />
                            : goToSkills === true ?
                                <Skills /> :
                                goToContact === true ?
                                    <Contact /> 
                                    : goToPortfolio === true ?
                                        <Portfolio 
                                            width={width}
                                        /> :
                                        null
            }
                <div className="socialsWrapper">
                    <Socials/>

                </div>

            
                
            </div>
        
        
        
        )
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default MainPage;