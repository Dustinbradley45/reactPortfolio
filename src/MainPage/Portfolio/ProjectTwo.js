import React, {Component} from "react";

class ProjectTwo extends Component {
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
        const { projectTwoClose } = this.props;

        return (
            <React.Fragment>
            <div className="projectTwoObjectWrapper">
                <embed src="https://dustinbradley45.github.io/dustinBradleyProject2/" type="text/html" style={ {width} }></embed>
            </div>
                <div className="buttonContainer">
                    <a href="https://github.com/Dustinbradley45/dustinBradleyProject2" className="previewButton githubButton" target="_blank">Github</a>
                    <a href="https://dustinbradley45.github.io/dustinBradleyProject2/" className="previewButton liveButton" target="_blank">Live</a>
                    <button className="mobileButton" onClick={mobile}>Mobile</button>
                    <button className="tabletButton" onClick={tablet}>Tablet</button>
                    <button className="desktopButton" onClick={desktop}>Desktop</button>
                    <button className="closeButton" onClick={projectTwoClose}>Close</button>
                </div>
            </React.Fragment>
        )
    }
}

export default ProjectTwo;