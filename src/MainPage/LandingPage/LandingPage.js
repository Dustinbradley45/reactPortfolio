import React from "react";
import { animated, useSpring } from "react-spring";

const LandingPage = () => {
    const fadeIn = useSpring({
        opacity: 1, from: { opacity: 0 },
        color: '#2D3747'
    });
    const fromRight = useSpring({
        transform:"translateX(1000)",

    })
    return(
        <animated.div className="landingPageWrapper" style={fadeIn} >
        
            <animated.h1 style={fromRight}>Hi, i'm Dustin.</animated.h1>
            <h2>Web Developer <span className="dev"> &#60; &#62;</span>.</h2>
            <h3>Toronto Lover.</h3>
        </animated.div>
    )
}

export default LandingPage;