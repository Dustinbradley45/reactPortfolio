import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from "./Navigation/Navigation";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About/About";
import Skills from "./Skills/Skills";
import AppRouter from "./../AppRouter/AppRouter";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";
import MobileNav from "./Navigation/MobileNav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
            width: window.innerWidth,
            navVisible: false,
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
            navVisible:!this.state.navVisible
        })
    }

    goToHomeLink = () => {
        this.setState({
            showLanding: true,
            goToAbout: false,
            goToSkills: false,
            gotToContact: false,
            goToPortfolio: false,
            navVisible: !this.state.navVisible
        })
    }
    goToSkillsLink = () => {
        this.setState({
            showLanding: false,
            goToAbout: false,
            goToSkills: true,
            goToContact: false,
            goToPortfolio: false,
            navVisible:!this.state.navVisible
        })
    }

    goToContactLink = () => {
        this.setState({
            showLanding: false,
            goToAbout: false,
            goToSkills: false,
            goToContact: true,
            goToPortfolio: false,
            navVisible:!this.state.navVisible
        })
    }

    goToPortfolioLink = () => {
         this.setState({
             showLanding: false,
             goToAbout: false,
             goToSkills: false,
             goToContact: false,
             goToPortfolio: true,
             navVisible:!this.state.navVisible
         })
    }

    
    componentDidMount() {

         window.addEventListener("resize", this.updateDimensions);
       
   }
    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }

     toggleNav = () => {
         this.setState({
             navVisible: !this.state.navVisible
         })
     }

    render() {
        const { particlesConfig } = this.props;
        const { showLanding, goToAbout, goToSkills, goToContact, goToPortfolio,fontWeight, width, navVisible } = this.state;
        const { goToAboutLink, goToHomeLink,goToSkillsLink, goToContactLink, goToPortfolioLink, updateDimensions, toggleNav } = this;

        return (
            <div className="mainWrapper">
                <Router>
            
            <Particles 
                params={particlesConfig}
                className="particles"
                />
                <AppRouter/>
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
                            navVisible={navVisible}
                            toggleNav={toggleNav}
                        />
                    
                }
            {/* {
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
                } */}
                <div className="socialsWrapper">
                    <Socials/>
                    </div> 
                </Router>    
            </div>
        )
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default MainPage;