import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Card, Button } from '@material-ui/core';
import axios from 'axios';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles"
import swal from 'sweetalert';

const theme = createMuiTheme({
    palette: {
        primary: { main: "#000000" },
        secondary: { main: "#000000" }
    },
});

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    submit = () => {
        console.log('in submit', this.state);
        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
            swal("Oops!", "Please complete all fields!", "warning");
        } else {
            axios({
                method: 'POST',
                url: '/contact',
                data: this.state
            }).then((response) => {
                console.log(response)
                swal("Success!", "Ryan will be in touch with you shortly.", "success");
            }).catch((error) => {
                console.log(error)
                swal("Oops!", "Something went wrong. Please try again.", "error");
            });
            this.setState({
                name: '',
                email: '',
                message: ''
            });
        }
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
                </div>
                <div>
                    <MuiThemeProvider theme={theme}>
                        <Card>
                            <TextField
                                placeholder="name"
                                type="text"
                                onChange={this.handleChangeFor('name')}
                                margin="normal"
                                value={this.state.name} />
                                
                            <TextField
                                placeholder="email"
                                type="text"
                                onChange={this.handleChangeFor('email')}
                                margin="normal"
                                value={this.state.email} />
                            <br />
                            <TextField
                                placeholder="message"
                                variant="outlined"
                                multiline rows="4"
                                type="text"
                                onChange={this.handleChangeFor('message')}
                                margin="normal"
                                value={this.state.message} />
                            <br />
                            <Button id="submitButton" margin="normal" onClick={this.submit} variant="outlined">Send</Button>
                        </Card>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default Contact;