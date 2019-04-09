// Dependencies
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Navigation from "./Navigation/Navigation";
import AppRouter from "./../AppRouter/AppRouter";
import Socials from "./Socials/Socials";
import MobileNav from "./Navigation/MobileNav";

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,
            navVisible: false,
        }
         this.updateDimensions = this.updateDimensions.bind(this);
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
        const { width, navVisible } = this.state;
        const { toggleNav } = this;

        return (
            <div className="mainWrapper">
            <Particles 
                params={particlesConfig}
                />
            <Router>
            
                <AppRouter 
                    width={width}
                />
                    
                {
                    width >= 650 ? 
                <Navigation
                    width={width}

                    /> :
                        
                <MobileNav
                    navVisible={navVisible}
                    toggleNav={toggleNav}
                />
                    
                }

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