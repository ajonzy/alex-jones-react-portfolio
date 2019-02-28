import React from "react"
import { Link } from "react-router-dom"

export default function(props) {
    return (
        <div>   
            <Link to={`/portfolio/${props.slug}`}>
                <h3>{props.title}</h3>
                <img src={props.pic} alt="" style={{width: "50px"}}/>
            </Link>
        </div>
    )
}