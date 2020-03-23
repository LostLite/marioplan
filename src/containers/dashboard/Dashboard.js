import React from 'react';
import Notification from '../../components/layout/Notification';
import ListProjects from '../../components/project/ListProjects';

export default function Dashboard(){
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m8">
                    <ListProjects />
                </div>
                <div className="col s12 m3 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
    )
}
