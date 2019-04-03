import React, { Component } from "react";
import { logo } from "./../Assets/dustinLogo.svg";
import Particles from 'react-particles-js';
// import posed from 'react-pose';
import LowerWordAnimation from "./LowerWordAnimation";
import ContinueButtonLink from "./ContinueButtonLink";
import { TweenLite } from "gsap";

class LoadingScreen extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: "hidden",
            loadingWordsVisible: true
        }

        this.d = null;
        this.u = null;
        this.s = null;
        this.t = null;
        this.i = null;
        this.n = null;
        this.b = null;
        this.r = null;
        this.a = null;
        this.d = null;
        this.l = null;
        this.e = null;
        this.y = null;
        this.changePosition = null;  
        
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loadingWordsVisible: false
            })
            
        }, 4000);

        this.changePosition = TweenLite.to(this.d, 1, {
            y: -50,
            x: -50,
          
        });
        // this.changePosition = TweenLite.to(this.u, 1, {
        //     y: -20
        // });
        // this.changePosition = TweenLite.to(this.s, 1, {
        //     y: -20
        // });
        // this.changePosition = TweenLite.to(this.t, 1, {
        //     y: -20
        // });
        // this.changePosition = TweenLite.to(this.i, 1, {
        //     y: -20
        // });
        // this.changePosition = TweenLite.to(this.n, 1, {
        //     y: -20
        // });
        //  this.changePosition = TweenLite.to(this.d, 1, {
        //      y: -20
        //  });
    
    }

  

    

    render() {
        const { isVisible, loadingWordsVisible } = this.state;
        const { loadingScreen, goToMain, particlesConfig } = this.props;
        const { changePosition, setBack } = this;
    
        return (
             <div className="loadingScreenWrapper">
            {/* <img src="./../../Assets/dustinLogo.svg" alt=""/> */}
            <Particles
            className="particles"
            params={particlesConfig}	
            />
                <h1 className="myName"><span ref={ span => this.d = span }>D</span>ustin Bradley</h1>
             
            
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