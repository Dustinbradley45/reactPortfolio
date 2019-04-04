import React, { Component } from 'react';

class ProjectThree extends Component {
    constructor() {
        super();
        this.state = {
            width: "100%"
        }
    }

      desktop = () => {
        this.setState({
            width:"100%"
        })
    }

    tablet = () => {
        this.setState({
            width: "60%"
        })
    }

    mobile = () => {
        this.setState({
            width: "40%"
        })
    }


    render() {
         const { tablet, desktop, mobile} = this;
        const { width } = this.state;
        const { projectThreeClose } = this.props;

        return (
            <React.Fragment>
                <div className="projectThreeObjectWrapper">
                    <embed src="https://dustinbradley45.github.io/brokenPhone/" type="text/html" style={ {width} }></embed>
                </div>
                <div className="buttonContainer">
                    <button className="mobileButton" onClick={mobile}>Mobile</button>
                    <button className="tabletButton" onClick={tablet}>Tablet</button>
                    <button className="desktopButton" onClick={desktop}>Desktop</button>
                    <button className="closeButton" onClick={projectThreeClose}>Close</button>
                </div>
            </React.Fragment>
        )
    }
}

export default ProjectThree;