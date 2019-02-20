import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class NavigationCompontent extends Component {
    constructor() {
        super()


    }

    render() {
        return(
            <div>
                <NavLink exact to="/" activeClassName="nav-link-active"><button>Home</button></NavLink>
                <NavLink to="/about-me" activeClassName="nav-link-active"><button>About</button></NavLink>
                <NavLink to="/contact" activeClassName="nav-link-active"><button>Contact</button></NavLink>
                <NavLink to="/blog" activeClassName="nav-link-active"><button>Blog</button></NavLink>
                {true ? <button>Add Blog</button> : null}
            </div>
        )
    }
}