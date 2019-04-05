import React, { Component } from "react";
import MobileNavList from "./MobileNavList";

class MobileNav extends Component {
    constructor() {
        super();
        this.state = {
            navVisible: false,
            // backgroundColor:"black"
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
        <React.Fragment>
            {
                this.state.navVisible === true ?
                    <div className="mobileNavWrapperWhite">
                        <div className="mobileNavBorderWhite">
                            <button className="mobileNavButtonWhite" onClick={toggleNav} aria-label="menu" >
                                <div className="mobileNavIconWhite"></div>
                            </button>
                            </div>
                        </div>
                        :
                                    
                    <div className="mobileNavWrapperBlack">
                        <div className="mobileNavBorderBlack">
                            <button className="mobileNavButtonBlack" onClick={toggleNav} aria-label="menu" >
                                <div className="mobileNavIconBlack"></div>
                            </button>
                        </div>
                    </div>
                   
        }
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
          </React.Fragment>
        )
    }
}
export default MobileNav;