import React from "react"
import "../styles/Header.css"

export default function Header(props){
    return (
        <nav
            className={props.darkMode ? "dark" : ""}
        >
            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.handleMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}