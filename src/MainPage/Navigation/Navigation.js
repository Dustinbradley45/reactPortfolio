import React, { Component} from "react";
import { TweenLite, TimelineLite } from "gsap";

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            animState: false
        }
        
        this.linkLoad = null;
        this.navHome = null;
        this.navAbout = null;
        this.navSkill = null;
        this.navPortfolio = null;
        this.navContact = null;


    }
    componentDidMount() {
        this.linkLoad = TweenLite.to(this.navHome, 1, {
            x: -10,
            y: -20,
            autoAlpha: 1,
            rotation: "-45",
        },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navAbout, 1, {
                x: -10,
                y: -20,
            autoAlpha: 1,
            rotation: "-45", 
            delay: 0.4,
            },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navSkill, 1, {
                x: -10,
                y: -20,
                autoAlpha: 1,
                rotation: "-45",
                delay: 0.8,
            },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navPortfolio, 1, {
                x: -10,
                y: -20,
                autoAlpha: 1,
            rotation: "-45",
                delay:1.2
            },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navContact, 1, {
                x: -10,
                y: -20,
                autoAlpha: 1,
                rotation: "-45",
                delay:1.6,
            },
            0.1);
        
        

    }

    render() {
      
        const { goToAboutLink, goToHomeLink, goToSkillsLink, goToContactLink, goToPortfolioLink } = this.props;
        
        return (
            <nav>
                <p>Menu</p>
                <ul className="mainNav">
                    <li className="navigationLinks" ref={li => this.navHome = li}><button
                        onClick={goToHomeLink}>Home</button></li>
                    <li className="navigationLinks" ref={li => this.navAbout = li}><button
                        onClick={goToAboutLink}>About</button></li>
                    <li className="navigationLinks" ref={li => this.navSkill = li}><button onClick={goToSkillsLink}>Skills</button></li>
                    <li className="navigationLinks" ref={li => this.navPortfolio = li}><button onClick={goToPortfolioLink}>Portfolio</button></li>
                    <li className="navigationLinks" ref={li => this.navContact = li}><button onClick={goToContactLink}>Contact</button></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;