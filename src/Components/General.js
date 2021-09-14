import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin} from '@fortawesome/free-brands-svg-icons';
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
                <h1 className = "name">{name ? name: 'Your name'}</h1>
                <p className="title">{title ? title: 'Your title'}</p>
                <div className = "gen-info">
                    <p className="phone-num">{phoneNum ? <Fragment><FontAwesomeIcon icon={faMobileAlt}/> {phoneNum}</Fragment>: <Fragment><FontAwesomeIcon icon={faMobileAlt}/> 555-555-5555</Fragment>}</p>
                    <p className="email">{email ? <Fragment><FontAwesomeIcon icon={faEnvelope}/> {email}</Fragment> : <Fragment><FontAwesomeIcon icon={faEnvelope}/> yourEmail@website.com</Fragment>}</p>
                    <p className="linked-in">{linkedin ? <Fragment><FontAwesomeIcon icon={faLinkedin}/> {linkedin}</Fragment> : <Fragment><FontAwesomeIcon icon={faLinkedin}/> Your LinkedIn Username </Fragment>}</p>
                    <p className="location">{location ? <Fragment><FontAwesomeIcon icon={faHome}/> {location}</Fragment> : <Fragment><FontAwesomeIcon icon={faHome}/> Your City, State </Fragment>}</p>
                    <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
                        Edit
                    </button>
                </div>

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