import React from "react";

const MobileNavList = (props) => {
     const {
         goToAboutLink,
         goToHomeLink,
         goToSkillsLink,
         goToContactLink,
         goToPortfolioLink,
         activeLink,
         toggleNav
     } = props;
    return (
        
        <div className="navListHolder">
            <nav>
                {/* <p>Menu</p> */}
                <ul className="mobileNavList">
                    <li className="mobileNavigationLinks" ><button
                        onClick={goToHomeLink}>Home</button></li>
                    <li className="mobileNavigationLinks" ><button
                        onClick={goToAboutLink}>About</button></li>
                    <li className="mobileNavigationLinks" ><button onClick={goToSkillsLink}>Skills</button></li>
                    <li className="mobileNavigationLinks"><button onClick={goToPortfolioLink}>Portfolio</button></li>
                    <li className="mobileNavigationLinks"><button onClick={goToContactLink}>Contact</button></li>
                </ul>
            </nav>
        </div> 
        
    )
}

export default MobileNavList;