import React from "react";
import portrait from "./portrait.jpg";

export default function Header() {
    return (
        <div className="intro">
            <img className="portrait" src={portrait} alt="My portrait"></img>
            <h1 className="name">Thomas Portolano</h1>
            <p className="position">Head of Products</p>
            <p className="location">Shanghai, China</p>
            <div className="contact">
                <a href="mailto:thomas.portolano@gmail.com"><button className="email button">Email</button></a>
                <a href="https://www.linkedin.com/in/thomasportolano/"><button className="linkedin button">LinkedIn</button></a>
            </div>
        </div>
    );
}