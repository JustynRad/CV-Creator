import React, { Component } from "react";
import uniqid from 'uniqid';

class Skills extends Component {
    constructor() {
        super();

        this.state= {
            skill: '',
            skills: [
                {
                    id: uniqid(),
                    skill: 'Creative thinking'
                },
                {
                    id: uniqid(),
                    skill: 'Communication'
                },
                {
                    id: uniqid(),
                    skill: 'Proactive'
                },
            ],
            edit: false
        }
    }

    handleSkillChange = e => {
        this.setState({
            skill: e.target.value
        })
    }

    handleRemove = key => {
        const newSkills = this.state.skills.filter(skill => skill.id !== key)

        this.setState({
            skills: newSkills
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    onSubmitSkill = e => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: ''
        })

        this.toggleEdit()
    }

    render() {
        const {
            skill,
            skills,
            edit
        } = this.state;

        return (
            <div id="Skills">
                <h2>Skills</h2>
                    {skills.map(skill => {
                        return(
                            <li key={skill.id} onClick={() => this.handleRemove(skill.id)}>{skill.skill}</li>
                        )
                    })}

                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="skill-add" className="edit-form">
                        <label htmlFor="skill">Skill</label>
                        <input
                            id="skill"
                            type="text"
                            value={skill}
                            onChange={this.handleSkillChange}
                        />
                        <button
                            type="button"
                            onClick={this.onSubmitSkill}
                        >
                            Add Skill
                        </button>
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                    </form>
                }
            </div>
        )
    }

}

export default Skills;