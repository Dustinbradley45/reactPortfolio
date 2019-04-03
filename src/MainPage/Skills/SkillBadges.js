import React, { Component } from "react";
import html from "./../../Assets/devicon-master/icons/html5/html5-plain.svg";
import css from "./../../Assets/devicon-master/icons/css3/css3-plain.svg";
import react from "./../../Assets/devicon-master/icons/react/react-original.svg";
import redux from "./../../Assets/devicon-master/icons/redux/redux-original.svg";
import node from "./../../Assets/devicon-master/icons/nodejs/nodejs-original.svg";
import jQuery from "./../../Assets/devicon-master/icons/jquery/jquery-plain.svg";
import javaScript from "./../../Assets/devicon-master/icons/javascript/javascript-plain.svg";
import gulp from "./../../Assets/devicon-master/icons/gulp/gulp-plain.svg";
import gitHub from "./../../Assets/devicon-master/icons/github/github-original.svg";
import { TweenLite } from "gsap";


class SkillBadges extends Component {
    constructor() {
        super();

        this.fadeIn = null;
        this.html = null;
        this.css = null;
        this.javaScript = null;
        this.jquery = null;
        this.react = null;
        this.redux = null;
        this.node = null;
        this.gulp = null;
        this.github = null;

        
    }
    componentDidMount() {
        this.fadeIn = TweenLite.to(this.html, 1, {
            opacity: 1,
            y:"-10",
            delay:1.2
        })
         this.fadeIn = TweenLite.to(this.css, 1, {
             opacity: 1,
             y: "-10",
             delay: 1.4
         })
         this.fadeIn = TweenLite.to(this.javaScript, 1, {
             opacity: 1,
             y: "-10",
             delay: 1.6

         })
         this.fadeIn = TweenLite.to(this.jquery, 1, {
             opacity: 1,
             y: "-10",
              delay: 1.8
         })
         this.fadeIn = TweenLite.to(this.react, 1, {
             opacity: 1,
             y: "-10",
              delay: 2,
         })
         this.fadeIn = TweenLite.to(this.redux, 1, {
             opacity: 1,
             y: "-10",
              delay: 2.2
         })
         this.fadeIn = TweenLite.to(this.node, 1, {
             opacity: 1,
             y: "-10",
              delay: 2.4
         })
         this.fadeIn = TweenLite.to(this.gulp, 1, {
             opacity: 1,
             y: "-10",
             delay:2.6
         })
         this.fadeIn = TweenLite.to(this.github, 1, {
             opacity: 1,
             y: "-10",
             delay:2.8,
         })

        }
    
    render() {
    
        return (

            <div className="iconWrapper" id="scrollTop">
                <div className="iconContainer" ref={div => this.html = div}>
                    <img src={html} alt="html5 logo"  />
                    <p>html5</p>
                </div>
                <div className="iconContainer" ref={div => this.css = div}>
                    <img src={css} alt="css3 logo" />
                    <p>css3</p>
                </div>
                <div className="iconContainer" ref={div => this.javaScript = div}>
                    <img src={javaScript} alt="javascript logo" />
                    <p>javaScript</p>
                </div>
                <div className="iconContainer" ref={div => this.jquery = div}>
                    <img src={jQuery} alt="jQuery logo" />
                    <p>jQuery</p>
                </div>
                <div className="iconContainer" ref={div => this.react = div}>
                    <img src={react} alt="react.js logo" />
                    <p>React.js</p>
                </div>
                <div className="iconContainer" ref={div => this.redux = div}>
                    <img src={redux} alt="redux logo" />
                    <p>Redux</p>
                </div>
                <div className="iconContainer" ref={div => this.node = div}>
                    <img src={node} alt="node.js logo" />
                    <p>Node.js</p>
                </div>
                <div className="iconContainer" ref={div => this.gulp = div}>
                    <img src={gulp} alt="gulp logo" />
                    <p>Gulp</p>
                </div>
                <div className="iconContainer" ref={div => this.github = div}>
                    <img src={gitHub} alt="gitHub logo" />
                    <p>GitHub</p>
                </div>
            </div>
    
        )
    }
    }

export default SkillBadges;