import React from "react"

export default function Tours (props){
    return (
       <div className="card">
           <div className="img--container">
               <img src={`${props.item.image}`} alt="josj" className="card--img"/>
           </div>
           <div className="card--info">
               <div className="card--top">
                   <i className="fa fa-map-marker"></i>
                   <p className="card--country">{props.item.location}</p>
                   <p className="card--maps">View on Google Maps</p>
               </div>
               <p className="card--places">{props.item.place}</p>
               <p className="card--date">{props.item.date}</p>
               <p className="card--desc">{props.item.desc}</p>
           </div>
       </div>
    )
}