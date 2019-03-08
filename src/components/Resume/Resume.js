import React from 'react';

const Resume = () => (
    <div>
        <div className="div__container container__background--large--resume">
            <h1>Resume</h1>
            <div className="links">
            <a target="_blank" href="https://github.com/ryanmundy"><img className="linkImage" height="25px" src="GitHub_Logo_White.png" alt="github" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/ryan-mundy-4b147b88/"><img className="linkImage" height="25px" src="Logo-White-48px-TM.png" alt="linkedin" /></a>
            </div>
            <hr></hr>
            <h2>Education</h2>
            <h3 className="school">Prime Digital Academy</h3>
            <p>Full Stack Software Engineering Certification, 2019</p>
            <h3 className="school">Hamline University</h3>
            <p>Bachelor of Arts, Criminal Justice, 2013</p>
            <hr></hr>
            <h2>Experience</h2>
            <h3>Student, Prime Digital Academy (2018-2019)</h3>
            <ul>
                <li>Flexibility working with both front-end and back-end development on a variety of web application projects that included both individual and team approaches as well as presenting them in front of others</li>
            </ul>
            <h3>Probation Officer, Ramsey County Community Corrections (2017-2018)</h3>
            <ul>
                <li>Supervised a diverse caseload of male and female clients involved with the criminal justice system using evidence based practices</li>
                <li>Motivated clients by setting goals for them and holding them accountable</li>
                <li>Served alongside others in a diverse, team based environment</li>
            </ul>
            <h3>Correctional Officer, Ramsey County Community Corrections (2014-2019)</h3>
            <ul>
                <li>Supervised a diverse group of male and female clients serving time as a result of their involvement with the criminal justice system</li>
                <li>Facilitated cognitive behavioral therapy groups for incarcerated individuals</li>
            </ul>
            <h3>Shift Leader, Culver's (2008-2015)</h3>
            <ul>
                <li>Directed a team of employees in a customer service based setting</li>
                <li>Interacted with a diverse staff and community, building conflict management skills</li>
            </ul>
        </div>
    </div>
);

export default Resume;