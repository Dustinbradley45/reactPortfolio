import React, { Component } from "react";
import ProjectFiveObject from "./../ProjectObjects/ProjectFiveObject";
import { TweenLite } from "gsap";
import dine from "./../../../Assets/dine-I-might.png";


class ProjectFive extends Component {
    constructor() {
        super();

        this.projectFiveInfo = null;
        this.projectFiveImage = null;


    }

    componentDidMount() {
          // PROJECTFIVE ANIMTION
          this.animateFromRight = TweenLite.to(this.projectFiveInfo, 1, {
              opacity: 1,
              x: "0",
              y: "0",
              delay: 1.6
          })
          this.animateFromLeft = TweenLite.to(this.projectFiveImage, 1, {
              opacity: 1,
              x: "0",
              y: "0",
              delay: 1.6
          })
    }

    render() {
        const { projectFiveVisible, projectFiveClose, width, projectFiveVisibleState } = this.props;
        return (
            <React.Fragment>
                 <div className="projectFiveWrapper">
                    <div className="projectFiveInfo" ref={div => this.projectFiveInfo = div}>
                    <h2 className="projectFive">5. Dine-I-Mite</h2>
                    <h3><span className="langUsed">React</span>  <span className="langUsed">React Router</span> <span className="langUsed">RESTful API</span> <span className="langUsed">Firebase</span> <span className="langUsed">Paired Programming</span> <span className="langUsed">CSS3</span> <span className="langUsed">Firebase</span> </h3>
                            <p className="projectFiveDescription">Take the indecisitveness out of your next dinner date with Dine-I-Mite! Using the Yelp API, Dine-I-Mite helps the indecisive pick a Restaraunt.</p>
                        {
                                width >= 900 ?
                                    <button className="previewButton" onClick={projectFiveVisible}>Preview</button> :
                                    <React.Fragment>
                                        <a href="https://github.com/Dustinbradley45/dineWithMe" className="previewButton githubButton" target="_blank">Github</a>
                                        <a href="https://restdecider2.firebaseapp.com/" className="previewButton liveButton" target="_blank">Live</a>
                                    </React.Fragment>
                            }       
                    </div>
                    <div className="projectImageContainerFive" ref={div => this.projectFiveImage = div}>
                        <img src={dine} alt="Dine-I-Mite Preview"/>
                    </div>
                </div>
                  {
                    projectFiveVisibleState === true ? 
                    <ProjectFiveObject projectFiveClose={projectFiveClose} /> :
                        null
                } 
            </React.Fragment>
        )
    }
}

export default ProjectFive;