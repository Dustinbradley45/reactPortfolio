import React from "react";
import Particles from 'react-particles-js';
import { NavLink } from "react-router-dom";

const particlesConfig = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FFFFFF"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#FFFFFF"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5681952697743787,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "size_min": 0.1,
                "sync": true
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 47.34960581453156,
            "color": "#ffffff",
            "opacity": 0.08680761065997453,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 236.74802907265777,
                "rotateY": 552.4120678362015
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

const MobileNavList = ({ toggleNav }) => {

    return (
        
        <div className="navListHolder">
         <Particles 
                params={particlesConfig}
                className="particles"
                />
            <nav>
                <ul className="mobileNavList">
                    <li className="mobileNavigationLinks" ><NavLink
                        exact to="/" activeClassName="NavActiveLinksMobile" onClick={toggleNav}>Home</NavLink></li>
                    
                    <li className="mobileNavigationLinks" ><NavLink
                        to="/about" activeClassName="NavActiveLinksMobile" onClick={toggleNav} >About</NavLink></li>
                    
                    <li className="mobileNavigationLinks" ><NavLink to="/skills" activeClassName="NavActiveLinksMobile" onClick={toggleNav}>Skills</NavLink></li>

                    <li className="mobileNavigationLinks"><NavLink to="/portfolio" activeClassName="NavActiveLinksMobile" onClick={toggleNav}>Portfolio</NavLink></li>

                    <li className="mobileNavigationLinks"><NavLink to="/contact" activeClassName="NavActiveLinksMobile" onClick={toggleNav}> Contact</NavLink></li>
                </ul>
            </nav>
        </div> 
        
    )
}

export default MobileNavList;