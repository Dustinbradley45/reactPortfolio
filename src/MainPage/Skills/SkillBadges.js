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
import Sass from "./../../Assets/devicon-master/icons/sass/sass-original.svg";
import npm from "./../../Assets/devicon-master/icons/npm/npm-original-wordmark.svg";
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
        this.firebase = null;
        this.responsive = null;
        this.npm = null;

        
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

        this.fadeIn = TweenLite.to(this.firebase, 1, {
            opacity: 1,
            y: "-10",
            delay: 3,
        })
        this.fadeIn = TweenLite.to(this.responsive, 1, {
            opacity: 1,
            y: "-10",
            delay: 3.2,
        })

        this.fadeIn = TweenLite.to(this.npm, 1, {
            opacity: 1,
            y: "-10",
            delay: 3.4,
        })

        }
    
    render() {
    
        return (

            <div className="iconWrapper" id="scrollTop">
                <div className="iconContainer" ref={div => this.html = div}>
                    <img src={html} alt="html5 logo"  />
                    <p>HTML5</p>
                </div>
                <div className="iconContainer" ref={div => this.css = div}>
                    <img src={css} alt="css3 logo" />
                    <p>CSS3</p>
                </div>
                <div className="iconContainer" ref={div => this.javaScript = div}>
                    <img src={javaScript} alt="javascript logo" />
                    <p>JavaScript</p>
                </div>
                <div className="iconContainer" ref={div => this.jquery = div}>
                    <img src={jQuery} alt="jQuery logo" />
                    <p>jQuery</p>
                </div>
                <div className="iconContainer" ref={div => this.react = div}>
                    <img src={react} alt="react.js logo" />
                    <p>React</p>
                </div>
                <div className="iconContainer" ref={div => this.redux = div}>
                    <img src={redux} alt="redux logo" />
                    <p>Redux</p>
                </div>
                <div className="iconContainer" ref={div => this.node = div}>
                    <img src={node} alt="node.js logo" />
                    <p>Node</p>
                </div>
                <div className="iconContainer" ref={div => this.gulp = div}>
                    <img src={gulp} alt="gulp logo" />
                    <p>Gulp</p>
                </div>
                <div className="iconContainer" ref={div => this.github = div}>
                    <img src={gitHub} alt="gitHub logo" />
                    <p>GitHub</p>
                </div>
                <div className="iconContainer firebase" ref={div=> this.firebase = div}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 35 35" data-tags="firebase">
                        <g fill="rgba(0,0,0,0.6)" transform="scale(0.03125 0.03125)">
                            <path fill="rgba(0,0,0,0.6)" d="M165.973 668.715l100.907-649.045c1.746-11.192 11.317-19.654 22.863-19.654 8.817 0 16.482 4.934 20.383 12.192l0.061 0.123 108.501 203.563-252.715 452.821zM882.56 826.197l-96.085-597.291c-1.912-11.031-11.411-19.313-22.845-19.313-6.368 0-12.136 2.569-16.324 6.728l0.001-0.001-605.867 609.877 335.232 188.928c9.744 5.573 21.416 8.859 33.856 8.859s24.112-3.286 34.196-9.038l-0.34 0.179 338.176-188.928zM610.133 304.981l-77.653-148.565c-3.95-7.42-11.635-12.385-20.48-12.385s-16.53 4.965-20.419 12.261l-0.061 0.125-340.907 610.901 459.52-462.336z" />
                        </g>
                    </svg>
                        <p>Firebase</p>
                </div>
                <div className="iconContainer responsive" ref={div => this.responsive = div}>
                    <svg  version="1.1" viewBox="0 0 35 35" fill="rgba(0,0,0,0.6)" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-label="Responsive Web Design"><g /><path d="M31.454 32.013h-30.908c-0.276 0-0.5-0.224-0.5-0.5v-31.026c0-0.276 0.224-0.5 0.5-0.5h30.908c0.276 0 0.5 0.224 0.5 0.5v31.025c0 0.277-0.224 0.501-0.5 0.501zM1.046 31.013h29.908v-30.026h-29.908v30.026z" fill="rgba(0,0,0,0.6)" /><path d="M31.454 32.013h-12.906c-0.276 0-0.5-0.224-0.5-0.5v-13.017c0-0.276 0.224-0.5 0.5-0.5h12.906c0.276 0 0.5 0.224 0.5 0.5v13.017c0 0.276-0.224 0.5-0.5 0.5zM19.048 31.013h11.906v-12.017h-11.906v12.017z" fill="rgba(0,0,0,0.6)" /><path d="M31.454 32.013h-23.132c-0.276 0-0.5-0.224-0.5-0.5v-23.25c0-0.276 0.224-0.5 0.5-0.5h23.132c0.276 0 0.5 0.224 0.5 0.5v23.25c0 0.276-0.224 0.5-0.5 0.5zM8.822 31.013h22.132v-22.25h-22.132v22.25z" fill="rgba(0,0,0,0.6)" /><path d="M25.694 21.794h-4.832c-0.207 0-0.375-0.168-0.375-0.375v-1.166c0-0.207 0.168-0.375 0.375-0.375h4.832c0.207 0 0.375 0.168 0.375 0.375v1.166c0 0.207-0.168 0.375-0.375 0.375zM21.237 21.044h4.082v-0.416h-4.082v0.416z" fill="rgba(0,0,0,0.6)" /><path d="M21.149 11.802h-10.568c-0.207 0-0.375-0.168-0.375-0.375v-1.167c0-0.207 0.168-0.375 0.375-0.375h10.568c0.207 0 0.375 0.168 0.375 0.375v1.167c0 0.207-0.168 0.375-0.375 0.375zM10.956 11.052h9.818v-0.417h-9.818v0.417z" fill="rgba(0,0,0,0.6)" /><path d="M16.92 3.824h-13.916c-0.207 0-0.375-0.168-0.375-0.375v-1.168c0-0.207 0.168-0.375 0.375-0.375h13.916c0.207 0 0.375 0.168 0.375 0.375v1.168c0 0.207-0.168 0.375-0.375 0.375zM3.379 3.074h13.166v-0.418h-13.166v0.418z" fill="rgba(0,0,0,0.6)" /></svg>
                    <p>RWD</p>
                </div>
                <div className="iconContainer" ref={div => this.npm = div}>
                    <img src={npm} alt="NPM Icon" />
                    <p>npm</p>

                </div>
            </div>
    
        )
    }
    }

export default SkillBadges;