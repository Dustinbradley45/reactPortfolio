import React from "react";

const Navigation = (props) => {
    const { goToAboutLink, goToHomeLink, goToSkillsLink, goToContactLink, goToPortfolioLink } = props;
    return (
        <nav>
            <p>Menu</p>
            <ul className="mainNav">
                <li className="navigationLinks"><button
                    onClick={goToHomeLink}>Home</button></li>
                <li className="navigationLinks"><button
                    onClick={goToAboutLink}>About</button></li>
                <li className="navigationLinks"><button onClick={goToSkillsLink}>Skills</button></li>
                <li className="navigationLinks"><button onClick={goToPortfolioLink}>Portfolio</button></li>
                <li className="navigationLinks"><button onClick={goToContactLink}>Contact</button></li>
            </ul>
        </nav>
    )
}

export default Navigation;