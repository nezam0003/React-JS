import React, { Component } from 'react'
import './profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div className = "container">
                <div className="bio">
                    <h3>Md Nezam Khan</h3>
                    <p>Front-end Web developer designer and Entrepreneur</p>
                </div>
                <div className="skills">
                    <h3>Skills :</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div className="social">
                    <h3>Social links: </h3>
                    <ul>
                        <li>
                            <a href="#">facebook</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Whatsapp</a>
                        </li>
                        <li>
                            <a href="#">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
