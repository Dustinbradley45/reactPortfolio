import React, {Component} from "react";

class ProjectSixObject extends Component {
    constructor() {
        super();
        this.state = {
              width: "100%"
        }

    }

     desktop = () => {
         this.setState({
             width: "100%"
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
         const {
             tablet,
             desktop,
             mobile
         } = this;
         const {
             width
         } = this.state;
         const {
             projectSixClose
         } = this.props;
        
        return (
             <div className="projectSixObjectWrapper">
                <embed src="http://dustinbradley.ca/DragRace/" type="text/html" style={{ width }}></embed>
                 <div className="buttonContainer">
                    <a href="https://github.com/Dustinbradley45/drag-race-battle" className="previewButton githubButton" target="_blank">Github</a>
                    <a href="http://dustinbradley.ca/DragRace/" className="previewButton liveButton" target="_blank">Live</a>
                    <button className="mobileButton" onClick={mobile}>Mobile</button>
                    <button className="tabletButton" onClick={tablet}>Tablet</button>
                    <button className="desktopButton" onClick={desktop}>Desktop</button>
                    <button className="closeButton" onClick={projectSixClose}>Close</button>
                </div>
            </div>
        )
    }
}

export default ProjectSixObject;
                   