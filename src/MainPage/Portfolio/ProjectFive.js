import React, { Component } from 'react';

class ProjectFive extends Component {
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
        const { projectFiveClose } = this.props;
        return (
            <div className="projectFiveObjectWrapper">
                <embed src="https://restdecider2.firebaseapp.com/" type="text/html" style={ {width} }></embed>
                <div className="buttonContainer">
                    <a href="https://github.com/Dustinbradley45/dineWithMe" className="previewButton githubButton" target="_blank">Github</a>
                    <a href="https://restdecider2.firebaseapp.com/" className="previewButton liveButton" target="_blank">Live</a>
                    <button className="mobileButton" onClick={mobile}>Mobile</button>
                    <button className="tabletButton" onClick={tablet}>Tablet</button>
                    <button className="desktopButton" onClick={desktop}>Desktop</button>
                    <button className="closeButton" onClick={projectFiveClose}>Close</button>
                </div>
            </div>
        )
    }
}

export default ProjectFive;

