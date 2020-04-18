import React, {Component} from 'react';
import Notification from '../../components/layout/Notification';
import ListProjects from '../../components/project/ListProjects';
import { connect } from 'react-redux';

class Dashboard extends Component { 

    render(){
        const {projects} = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m8">
                        <ListProjects projects={projects}/>
                    </div>
                    <div className="col s12 m3 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps, null)(Dashboard)
