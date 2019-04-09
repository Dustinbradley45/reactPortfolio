import React from "react";
import MobileNavList from "./MobileNavList";

const MobileNav = ({navVisible, toggleNav }) => {

        return (
        <React.Fragment>
            {
                navVisible === true ?
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
                    navVisible === true ? 
                     
                        <MobileNavList
                            toggleNav={toggleNav}
                          /> :
                        null
                        
                }
          </React.Fragment>
        )
    }

export default MobileNav;