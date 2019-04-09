import React, { Component } from "react";
import { logo } from "./../Assets/dustinLogo.svg";
import Particles from 'react-particles-js';
import LowerWordAnimation from "./LowerWordAnimation";
import ContinueButtonLink from "./ContinueButtonLink";
import { TweenLite } from "gsap";


class LoadingScreen extends Component {
    constructor() {
        super();
        this.state = {
            loadingWordsVisible: true
        }

     
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loadingWordsVisible: false
            })
            
        }, 4000);
    
    }

  

    

    render() {
        const { loadingWordsVisible } = this.state;
        const { loadingScreen, goToMain, particlesConfig } = this.props;
    
        return (
            <div className="loadingScreenWrapper">
            <Particles
            params={particlesConfig}	
            />
                <h1 className="myName">Dustin Bradley</h1>
                {
                    loadingWordsVisible === true ? 
                        <LowerWordAnimation /> :
                        <ContinueButtonLink 
                            goToMain={goToMain}
                        />   
                }
            </div>

        )
    }


} 


export default LoadingScreen;