import React, { Component } from 'react';

class General extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            title: "",
            phoneNum: "",
            email: "",
            linkedin: "",
            location: "",
            edit: false
        };
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phoneNum: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
           email: e.target.value 
        })
    }

    handleLinkedInChange = (e) => {
        this.setState({
            linkedin: e.target.value
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        const { name, title, phoneNum, email, linkedin, location, edit } = this.state;

        return (
            <div id="General">
                <h1>{name ? name: 'Your Name'}</h1>
                <p className="title">{title ? title: 'Your Job Title'}</p>
                <p className="phone-num">{phoneNum ? phoneNum: 'Your Number'}</p>
                <p className="email">{email ? email : 'Your Email'}</p>
                <p className="linked-in">{linkedin ? linkedin : 'Your LinkedIn Username'}</p>
                <p className="location">{location ? location: 'Your City'}</p>
                <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
                    Edit
                </button>

                {edit &&
                    <form id="general-edit" className="edit-form">
                        <label htmlFor="name">Your Name</label>
                        <input id="name" type="text" onChange={this.handleNameChange}/>
                        <label htmlFor="title">Your Job Title</label>
                        <input id="title" type="text" onChange={this.handleTitleChange}/>
                        <label htmlFor="phone-num">Your Number</label>
                        <input id="phone-num" type="text" onChange={this.handlePhoneChange}/>
                        <label htmlFor="email">Your Email</label>
                        <input id="email" type="text" onChange={this.handleEmailChange}/>
                        <label hmtlFor="linked-in">Your LinkedIn Username</label>
                        <input id="linked-in" type="text" onChange={this.handleLinkedInChange}/>
                        <label htmlFor="location">Your City</label>
                        <input id="location" type="text" onChange={this.handleLocationChange}/>

                        <button type="button" onClick={this.toggleEdit}>
                            Close Edit
                        </button>
                    </form>
                }
            </div>
        )
    }
}

export default General;