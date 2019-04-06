import React, {Component} from "react";

class ProjectSix extends Component {
    constructor() {
        super();

    }

    render() {
        return (
             <div className="projectSixObjectWrapper">
                <embed src="http://dustinbradley.ca/DragRace/" type="text/html"></embed>
                  <a href="https://github.com/Dustinbradley45/drag-race-battle" className="previewButton githubButton" target="_blank">Github</a>
                <a href="#" className="previewButton liveButton" target="_blank">Live</a>
            </div>
        )
    }
}

export default ProjectSix;