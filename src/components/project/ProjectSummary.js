import React from 'react'

export default function ProjectSummary({project}) {
    const {title} = project;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>Posted by The Wanderer</p>
                <p className="grey-text">23rd March, 2020</p>
            </div>
        </div>
    )
}
