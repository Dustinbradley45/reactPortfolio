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

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            showLanding: true,
            goToAbout: false,
            goToSkills: false,
            goToContact:false,
            goToPortfolio: false,
            fontWeight :"600",
        }
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




    render() {
        const { particlesConfig } = this.props;
        const { showLanding, goToAbout, goToSkills, goToContact, goToPortfolio,fontWeight } = this.state;
        const { goToAboutLink, goToHomeLink,goToSkillsLink, goToContactLink, goToPortfolioLink } = this;

        return (
            <div className="mainWrapper">
            <Particles 
                params={particlesConfig}
                className="particles"
            />
                <Navigation
                    activeLink={fontWeight}
                    goToAboutLink={goToAboutLink}
                    goToHomeLink={goToHomeLink}
                    goToSkillsLink={goToSkillsLink}
                    goToContactLink={goToContactLink}
                    goToPortfolioLink={goToPortfolioLink}
                    />
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
                                        <Portfolio /> :
                                        null
                }
                <div className="socialsWrapper">
                    <Socials/>

                </div>
            
                
            </div>
        
        
        )
    }
}

export default MainPage;