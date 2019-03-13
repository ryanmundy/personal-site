import React from 'react';
import { Card, Grid } from '@material-ui/core';


const Portfolio = () => (
    <div>
        <div className="div__container container__background--large">
            <h1>Portfolio</h1>
            <Grid id="projectGrid" container justify="center">
                <Grid>
                    <Card id="projectCard">
                        <h3>Loaves and Fishes</h3>
                        <img id="projectImage" src="adminhome.png"  alt=''></img>
                        <p>Built with: React</p>
                        <p>Loaves & Fishes is currently using a system that can be time consuming by utilizing a paper system for tracking each and every dining site, for which they have over 80 locations. Afterwards, these massive pile of sheets are being manually entered into an Excel Spreadsheet. Keep in mind, Loaves & Fishes have served a record number of 1,000,000 meals in 2018, and are expected to serve 1,300,000 this year. With the record breaking numbers, we replace this laborious process with a digital system that is more efficient to the organization. This system will allow users to gather information about meals on site in real time and also manage locations and generate reports to assist with grant applications.</p>
                        <p><a style={{color: "white"}}href="https://loavesandfishes.herokuapp.com/#/home" target="_blank">Live Site</a></p>
                        <p><a href="https://github.com/loavesandfishesmn2019/loavesandfishes" target="_blank"><img className="linkImage" height="25px" src="GitHub_Logo_White.png" alt="github" /></a></p>
                    </Card>
                    <Card id="projectCard">
                        <h3>Caffeinated</h3>
                        <img id="projectImage" src="caffeinated.png" width="500" alt=''></img>
                        <p>Built with: React</p>
                        <p>A simple way for caffeine lovers to share their favorite products and discover new ones. Allows users to leave reviews, add products, and locate products using Google Maps API.</p>
                        <p><a href="https://github.com/ryanmundy/caffeinated-solo-project" target="_blank"><img className="linkImage" height="25px" src="GitHub_Logo_White.png" alt="github" /></a></p>
                    </Card>
                    <Card id="projectCard">
                        <h3>Feedback</h3>
                        <img id="projectImage" src="Feedback.png" width="500" alt=''></img>
                        <p>Built with: React</p>
                        <p>This app is designed allow users to collect data about how a student is feeling at a particular time. It gathers information about the students overall feelings, understanding, and sense of support. It also allows the student to add comments at the end. The application features a confirmation page that allows the student to click a "save" button after all categories have been completed. After saving their feedback, students are able to click a button to return to the initial page that has been reset.</p>
                        <p><a style={{ color: "white" }} href="https://nameless-dusk-53745.herokuapp.com/#/" target="_blank">Live Site</a></p>
                        <p><a href="https://github.com/ryanmundy/weekend-challenge-5-feedback" target="_blank"><img className="linkImage" height="25px" src="GitHub_Logo_White.png" alt="github" /></a></p>
                    </Card>
                    <Card id="projectCard">
                        <h3>To Do List</h3>
                        <img id="projectImage" src="ToDo.png" width="500" alt=''></img>
                        <p>Built with: JavaScript</p>
                        <p>This app is designed to allow users a convenient way to organize their tasks. It allows the user to input a new task, which appears as incomplete on the DOM. The user is able to mark a task as complete, which turns the task green and moves it to the bottom of the list on the DOM.</p>
                        <p><a style={{ color: "white" }} href="https://afternoon-woodland-10344.herokuapp.com/" target="_blank">Live Site</a></p>
                        <p><a href="https://github.com/ryanmundy/to-do-app" target="_blank"><img className="linkImage" height="25px" src="GitHub_Logo_White.png" alt="github" /></a></p>
                    </Card>
                </Grid>
            </Grid>
        </div>
    </div>
);

export default Portfolio;