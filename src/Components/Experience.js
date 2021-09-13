import React, { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            company: "",
            title: "",
            startDate: "",
            endDate: "",
            location: "",
            desc: "",
            experience: [
                {
                    id: uniqid(),
                    company: "New Grad Company",
                    title: "Full Stack Developer",
                    date: "Aug 2017 - Present",
                    location: "San Diego, CA",
                    desc: "A new grad working at the New Grad Company",
                }
            ],
            edit: false
        };
    }

    handleCompanyChange = (e) => {
        this.setState({
            company: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleStartDateChange = (e) => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDateChange = (e) => {
        this.setState({
            endDate: e.target.value
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleDescChange = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    handleRemove = (key) => {
        const newExperience = this.state.experience.filter(exp => exp.id !== key)

        this.setState({
            experience: newExperience
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    onSubmitExperience = (e) => {
        e.preventDefault();
        
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.compnany,
                title: this.state.title,
                date: this.state.startDate + ' - ' + this.state.endDate,
                location: this.state.location,
                desc: this.state.desc
            }),
            company: "",
            title: "",
            startDate: "",
            endDate: "",
            location: "",
            desc: "",
        })

        this.toggleEdit()
    }

    render() {
        const { company, title, startDate, endDate, location, desc, experience, edit } = this.state;

        return (
            <div id="Experience">
                <h2>Experience</h2>
                {experience.map(exp => {
                    return (
                        <div key={exp.id} onClick={() => this.handleRemove(exp.id)}>
                            <div>
                                <p className="experience-date">{exp.date}</p>
                                <p className="experience-title">{exp.title}</p>
                            </div>
                            <div>
                                <p className="experience-company">{exp.company}</p>
                                <p className="experience-location">{exp.location}</p>
                                <p className="experience-desc">{exp.desc}</p>
                            </div>
                        </div>
                    )
                })}
                <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
                    Add
                </button>

                {edit &&
                    <form id="experience-add" className="edit-form">
                        <label htmlFor="company">Company</label>
                        <input id="company" type="text" value={company} onChange={this.handleCompanyChange}/>

                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" value={title} onChange={this.handleTitleChange}/>

                        <label htmlFor="start-date">Start Date</label>
                        <input id="start-date" type="text" value={startDate} onChange={this.handleStartDateChange}/>

                        <label htmlFor="end-date">End Date</label>
                        <input id="end-date" type="text" value={endDate} onChange={this.handleEndDateChange}/>

                        <label htmlFor="location">Location</label>
                        <input id="location" type="text" value={location} onChange={this.handleLocationChange}/>

                        <label htmlFor="desc">Description</label>
                        <input id="desc" type="text" value={desc} onChange={this.handleDescChange}/>

                        <button type="button" onClick={this.onSubmitExperience}>
                            Add Experience
                        </button>

                        <button type="button" onClick={this.toggleEdit}>
                            Close
                        </button>
                    </form>
                }
            </div>
        )
    }
}

export default Experience;