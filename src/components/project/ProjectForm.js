import React, { Component } from 'react'

export default class ProjectForm extends Component {
    state = {
        title:'',
        content: '',
        loading: false
    }

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    componentDidMount(){}

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Project Details</h5>
                <div className="input-field">
                    <label for="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label for="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div class="input-field">
                    <button class="btn pink lighten-1 z-depth-0">Save Project</button>
                </div>
            </form>
        )
    }
}
