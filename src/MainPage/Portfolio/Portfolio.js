import React, {Component } from "react";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projectOneVIsible: false,
        }
    }
    render() {
        return (
            <div className="portfolioWrapper">
                <div className="projectOneWrapper">
                    <div className="projectOneInfo">
                    <h2 className="projectOne">1. Face Detector App</h2>
                    <h3>React - CSS3 - RESTful API</h3>
                        <p className="projectOneDescription">Paste a URL into the detection box, using the Clarifai RESTful API it will recognize any faces within the image.</p>
                        <button>Preview</button>
                    </div>
                    <div className="projectImageContainerOne"></div>
                </div>

                <div className="projectTwoWrapper">
                    <div className="projectTwoInfo">
                    <h2 className="projectTwo">2. Planted</h2>
                    <h3>html5 - Sass - jQuery</h3>
                        <p className="projectTwoDescription">Perfect three page PSD Conversion</p>
                        <button>Preview</button>
                    </div>
                    <div className="projectImageContainerTwo">
                    </div>
                </div>

                 <div className="projectThreeWrapper">
                    <div className="projectThreeInfo">
                    <h2 className="projectThree">3. Broken Telephone</h2>
                    <h3>html5 - CSS - jQuery - Paired Programming - RESTful API</h3>
                        <p className="projectThreeDescription">Think you know quotes? Using the Google Translate API, guess who said these classic quotes after they have been translated a few times.</p>
                        <button>Preview</button>
                    </div>
                    <div className="projectImageContainerThree">
                    </div>
                </div>

                <div className="projectFourWrapper">
                    <div className="projectFourInfo">
                    <h2 className="projectFour">4. RoboFriends Phonebook</h2>
                    <h3>React - Redux - RESTful API</h3>
                        <p className="projectFourDescription">Using the RoboHash api and a simple placeholder api, search through your robofriends information! Created with React, refactored using Redux.</p>
                        <button>Preview</button>
                    </div>
                    <div className="projectImageContainerFour">
                    </div>
                </div>

                 <div className="projectFiveWrapper">
                    <div className="projectFiveInfo">
                    <h2 className="projectFive">5. Dine-I-Mite</h2>
                    <h3>React - React Router - RESTful API - Firebase - Paired Programming - CSS </h3>
                        <p className="projectFiveDescription">Simple restuarunt list maker for the indecisive eater.</p>
                        <button>Preview</button>
                    </div>
                    <div className="projectImageContainerFive">
                    </div>
                </div>

                <div className="projectSixWrapper">
                    <div className="projectSixInfo">
                    <h2 className="projectSix">6. Drag Race Battle</h2>
                    <h3>React - RESTful API - Sass </h3>
                        <p className="projectSixDescription">Will you beat out the other queens?</p>
                        <button>Preview</button>
                    </div>
                    <div className="projectImageContainerSix">
                    </div>
                </div>
                

            </div>
        )
    }
}

export default Portfolio;

