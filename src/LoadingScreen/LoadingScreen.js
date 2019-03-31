import React, { Component } from "react";
import { logo } from "./../Assets/dustinLogo.svg";
import Particles from 'react-particles-js';
// import posed from 'react-pose';
import LowerWordAnimation from "./LowerWordAnimation";
import ContinueButtonLink from "./ContinueButtonLink";





class LoadingScreen extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: "hidden",
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
        const { isVisible, loadingWordsVisible } = this.state;
        const { loadingScreen, goToMain, particlesConfig } = this.props;
        return (
             <div className="loadingScreenWrapper">
            {/* <img src="./../../Assets/dustinLogo.svg" alt=""/> */}
            <Particles
            className="particles"
            params={particlesConfig}	
            />
                <h1>Dustin Bradley</h1>
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