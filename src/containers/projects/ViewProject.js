import React from 'react';
import ProjectDetails from '../../components/project/ProjectDetails';

export default function ViewProject(props) {
    return (
        <div className="container">
            <div className="row">
                <ProjectDetails projectId={props.match.params.id}/>
            </div>
        </div>
    )
}
