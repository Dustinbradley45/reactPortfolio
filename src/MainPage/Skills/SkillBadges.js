import React from "react";
import html from "./../../Assets/devicon-master/icons/html5/html5-plain.svg";
import css from "./../../Assets/devicon-master/icons/css3/css3-plain.svg";
import react from "./../../Assets/devicon-master/icons/react/react-original.svg";
import redux from "./../../Assets/devicon-master/icons/redux/redux-original.svg";
import node from "./../../Assets/devicon-master/icons/nodejs/nodejs-original.svg";
import jQuery from "./../../Assets/devicon-master/icons/jquery/jquery-plain.svg";
import javaScript from "./../../Assets/devicon-master/icons/javascript/javascript-plain.svg";
import gulp from "./../../Assets/devicon-master/icons/gulp/gulp-plain.svg";
import gitHub from "./../../Assets/devicon-master/icons/github/github-original.svg";
import ScrollableAnchor from "react-scrollable-anchor";


const SkillBadges = () => {
    return (
    <ScrollableAnchor id={"badges"}>
     <div className="iconWrapper">
                <div className="iconContainer">
                    <img src={html} alt="html5 logo" />
                    <p>html5</p>
                </div>
                <div className="iconContainer">
                    <img src={css} alt="css3 logo" />
                    <p>css3</p>
                </div>
                <div className="iconContainer">
                    <img src={javaScript} alt="javascript logo" />
                    <p>javaScript</p>
                </div>
                <div className="iconContainer">
                    <img src={jQuery} alt="jQuery logo" />
                    <p>jQuery</p>
                </div>
                <div className="iconContainer">
                    <img src={react} alt="react.js logo" />
                    <p>React.js</p>
                </div>
                <div className="iconContainer">
                    <img src={redux} alt="redux logo" />
                    <p>Redux</p>
                </div>
                <div className="iconContainer">
                    <img src={node} alt="node.js logo" />
                    <p>Node.js</p>
                </div>
                <div className="iconContainer">
                    <img src={gulp} alt="gulp logo" />
                    <p>Gulp</p>
                </div>
                <div className="iconContainer">
                    <img src={gitHub} alt="gitHub logo"/>
                    <p>GitHub</p>
                </div>
            </div>
        </ScrollableAnchor>
    )
}

export default SkillBadges;