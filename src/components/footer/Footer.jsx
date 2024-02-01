import React from "react";
import Github from "./github.png";

export default function Footer() {
    return (
        <footer className="social">
            <a className="github" href="https://github.com/ThomasPortolano"><img src={Github}></img></a>
        </footer>
    )
}