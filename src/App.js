import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return(
            <Card
                key={item.id}

                // "spreads" the props of the object, the cleanest way but more obscure
                {...item}

                // the better way of passing props of an object, just pass the whole thing, explicit access in html
                // item={item}

                // the manual way of passing props of an object
                // img={item.cover}
                // title={item.title}
                // rating={item.stats.rating}
                // reviews={item.stats.reviews}
                // price={item.price}
                // location={item.location}
                // openSpots={item.openSpots}
            />
        )
    })

    return(
        <div className="container">
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
