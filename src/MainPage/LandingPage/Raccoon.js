import React, { Component } from "react";
import { TweenLite } from "gsap";
class Raccoon extends Component {
    constructor() {
        super();
        this.state = {
            raccoon:true,
        }

        this.animateRaccoon = null;
        this.raccoon = null;

}

     componentDidMount() {

         this.animateRaccoon = TweenLite.to(this.raccoon, 1, {
                 rotation: "0",
             repeat: -1,
             delay: 2,
             fill:"#FF0000"
             },
             .1);

     }

render() {

    return (
        <div className= "raccoon" ref={div => this.raccoon = div}>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1485 1651 c-47 -12 -110 -47 -171 -97 l-57 -47 -67 17 c-73 17 -257
21 -343 7 -46 -8 -54 -5 -157 47 -88 44 -120 55 -174 59 -78 7 -105 -7 -136
-67 -24 -47 -27 -154 -5 -214 14 -40 14 -40 -24 -81 -132 -143 -248 -404 -286
-641 l-6 -41 88 -6 c89 -7 280 -49 387 -87 86 -29 168 -77 292 -169 123 -91
182 -116 255 -108 65 8 114 35 211 117 137 117 341 206 551 241 l78 13 -7 31
c-31 144 -159 422 -255 555 l-61 85 21 92 c23 99 28 222 10 255 -11 21 -67 49
-96 47 -10 -1 -31 -4 -48 -8z m106 -52 c19 -19 21 -30 17 -93 -3 -39 -15 -111
-28 -159 l-22 -88 27 -37 c119 -162 192 -300 257 -487 l38 -110 -58 -12 c-31
-7 -60 -12 -63 -13 -3 0 -27 35 -54 78 -60 94 -190 227 -265 269 -58 33 -148
63 -188 63 -38 0 -86 -28 -106 -61 -15 -25 -66 -245 -66 -283 0 -6 22 -19 50
-29 27 -10 68 -32 92 -50 43 -33 108 -128 107 -157 0 -24 -174 -160 -204 -160
-5 0 -2 5 8 11 56 32 59 134 6 194 -69 78 -170 44 -200 -68 -12 -47 2 -100 34
-122 36 -25 9 -17 -36 12 -98 61 -212 155 -209 171 13 59 114 150 195 174 22
7 41 18 44 25 8 20 -35 250 -52 283 -24 46 -53 60 -120 60 -143 -1 -330 -134
-461 -330 l-50 -75 -39 7 c-22 4 -61 7 -87 7 -26 1 -50 5 -53 11 -3 5 3 47 14
92 52 219 155 423 272 540 l47 47 -21 42 c-30 62 -34 136 -9 193 43 95 116 86
363 -50 21 -11 33 -12 55 -4 52 20 242 24 324 6 112 -24 124 -22 188 30 108
89 209 117 253 73z"/>
<path d="M455 1560 c-3 -5 2 -21 11 -35 16 -25 16 -97 -2 -167 -9 -39 4 -35
64 20 56 52 62 73 37 123 -24 46 -95 84 -110 59z"/>
<path d="M1494 1520 c-29 -12 -71 -64 -79 -99 -5 -25 0 -35 47 -80 54 -51 86
-66 73 -33 -4 9 -12 40 -18 68 -9 43 -8 59 6 96 9 24 17 47 17 51 0 9 -19 8
-46 -3z"/>
</g>
</svg>

    </div>
    )
}
}

export default Raccoon;