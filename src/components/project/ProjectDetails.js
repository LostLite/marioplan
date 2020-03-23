import React from 'react'

function ProjectDetails(props) {
    console.log(props.projectId)
    return (
        <div className="section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {props.projectId}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aspernatur sequi laudantium nostrum dolores, distinctio odio ducimus mollitia voluptatum ad quidem aut quae maxime repellendus odit, quibusdam asperiores exercitationem consequuntur.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Wanderer</div>
                    <div>23rd March, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
