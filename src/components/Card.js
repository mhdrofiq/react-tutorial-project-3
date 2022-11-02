import React from "react"

export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {/* this is conditional rendering */}
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={props.cover}/>
            <div className="card-stats">
                <img className="card-star" src="images/star.png"/>
                <span>{props.stats.rating}</span>
                <span className="grey">
                    ({props.stats.reviews}) - {props.location}
                    </span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}