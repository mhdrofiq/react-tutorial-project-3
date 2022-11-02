import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App(){
    return(
        <div className="container">
            <Navbar/>
            <Hero/>
            <Card
                img={require("./images/swim.png")}
                title="Life lessons with Katie Zaferes"
                rating="5.0"
                reviews={6}
                price={136}
                location="USA"
            />
            <Card
                img={require("./images/wedding.png")}
                title="Learn wedding photography"
                rating="5.0"
                reviews={30}
                price={125}
                location="USA"
            />
            <Card
                img={require("./images/bike.png")}
                title="Group mountain biking"
                rating="4.8"
                reviews={2}
                price={50}
                location="USA"
            />
        </div>
    )
}
