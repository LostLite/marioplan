import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class ProjectForm extends Component {
    state = {
        project: {
            title:'',
            content: '',
        } ,
        loading: false
    }

    handleChange = e => {
        this.setState({project: {...this.state.project, [e.target.id]: e.target.value}})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createProject(this.state.project)
    }

    componentDidMount(){}

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Project Details</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Save Project</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    //the dispatch method takes in an action creator
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(ProjectForm);
