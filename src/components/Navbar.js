import React from "react"
import ReactLogoSmall from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <nav>
            <img src= {ReactLogoSmall} className="nav--icon" width='50px'/>
            <h3 className="nav--logo_text"> ReactFacts</h3>
            <h4 className="nav--title"> React Course - Project 1</h4>
        </nav>
    )
}