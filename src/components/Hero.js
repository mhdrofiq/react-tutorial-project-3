import React from "react"
import picturegrid from "../images/grid.png"

export default function Navbar(){
    return(
        <section className="hero">
            <img className="hero-photo" src={picturegrid}/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">
                Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.
            </p>
        </section>
    )
}