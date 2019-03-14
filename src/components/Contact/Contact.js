import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Card, Button } from '@material-ui/core';
import axios from 'axios';


class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    submit = () => {
        console.log('in submit', this.state);
        axios({
            method: 'POST',
            url: '/contact',
            data: this.state
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });
    }

    //change handler for inputs
    handleChangeFor = (propertyName) => (event) => {
        event.preventDefault();
        this.setState({
                ...this.state,
                [propertyName]: event.target.value
        });
    }

    render() {
        return (

            <div className="div__container container__background--large">
                <div>
                    <h1>Contact Me</h1>
                    <hr></hr>
                </div>
                <div className="links">
                    <h3>If you like the work I do, connect with me on <a style={{ color: "white" }} target="_blank" href="https://www.linkedin.com/in/ryan-mundy-4b147b88/">LinkedIn!</a></h3>
                    <a target="_blank" href="https://www.linkedin.com/in/ryan-mundy-4b147b88/"><img className="linkImage" height="25px" src="Logo-White-48px-TM.png" alt="linkedin" /></a>
                </div>

                <div>
                    <Card>
                        <TextField
                            placeholder="name"
                            type="text"
                            onChange={this.handleChangeFor('name')} />
                        <TextField
                            placeholder="email"
                            type="text"
                            onChange={this.handleChangeFor('email')} />
                            <br/>
                        <TextField
                            placeholder="message"
                            variant="outlined"
                            multiline rows="4"
                            type="text"
                            onChange={this.handleChangeFor('message')} />
                            <br/>
                            <Button onClick={this.submit} variant="outlined">Send</Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Contact;