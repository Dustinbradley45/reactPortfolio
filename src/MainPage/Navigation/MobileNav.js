import React, { Component } from "react";
import MobileNavList from "./MobileNavList";

class MobileNav extends Component {
    constructor() {
        super();
        this.state = {
            navVisible:false
        }
    }

    toggleNav = () => {
        this.setState({
            navVisible:!this.state.navVisible
        })
    }

    render() {
        const { toggleNav } = this;
         const {
             goToAboutLink,
             goToHomeLink,
             goToSkillsLink,
             goToContactLink,
             goToPortfolioLink,
             activeLink
         } = this.props;

        return (
            <div className="mobileNavWrapper">
                <div className="mobileNavBorder">
                    <button className="mobileNavButton" onClick={toggleNav} aria-label="menu" >
                        <div className="mobileNavIcon"></div>
                    </button>
                </div>
                {
                    this.state.navVisible === true ? 
                        <MobileNavList
                            toggleNav={toggleNav}
                            goToAboutLink={goToAboutLink}
                            goToHomeLink={goToHomeLink}
                            goToSkillsLink={goToSkillsLink}
                            goToContactLink={goToContactLink}
                            goToPortfolioLink={goToPortfolioLink}/> :
                        null
                        
                }
            </div>
        )
    }
}
export default MobileNav;