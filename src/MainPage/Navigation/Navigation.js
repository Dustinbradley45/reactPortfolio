import React, { Component} from "react";
import { TweenLite, TimelineLite } from "gsap";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    constructor() {
        super();
      
        
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
            delay:1
        },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navAbout, 1, {
                x: -10,
                y: -20,
            autoAlpha: 1,
            rotation: "-45", 
            delay: 1.4,
            },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navSkill, 1, {
                x: -10,
                y: -20,
                autoAlpha: 1,
                rotation: "-45",
                delay: 1.8,
            },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navPortfolio, 1, {
                x: -10,
                y: -20,
                autoAlpha: 1,
            rotation: "-45",
                delay:2.2
            },
            0.1);
        
        this.linkLoad = TweenLite.to(this.navContact, 1, {
                x: -10,
                y: -20,
                autoAlpha: 1,
                rotation: "-45",
                delay:2.6,
            },
            0.1);
        
        

    }

    render() {
      
        const { goToAboutLink, goToHomeLink, goToSkillsLink, goToContactLink, goToPortfolioLink} = this.props;
        
        return (
            <nav>
                <ul className="mainNav">
                    <li className="navigationLinks" ref={li => this.navHome = li}><NavLink exact to="/"
                        activeClassName = "NavActiveLinksMain"> Home </NavLink></li>
                    <li className="navigationLinks" ref={li => this.navAbout = li}><NavLink to="/about"
                        activeClassName="NavActiveLinksMain"
                        >About</NavLink></li>
                    <li className="navigationLinks" ref={li => this.navSkill = li}><NavLink to="/skills"
                    activeClassName = "NavActiveLinksMain"
                    >Skills</NavLink></li>
                    <li className="navigationLinks" ref={li => this.navPortfolio = li}><NavLink to="/portfolio"
                    activeClassName = "NavActiveLinksMain">Portfolio</NavLink></li>
                    <li className="navigationLinks" ref={li => this.navContact = li}><NavLink to="/contact" activeClassName="NavActiveLinksMain">Contact</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;