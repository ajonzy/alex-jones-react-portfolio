import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"

const names = [
    {title: "Alex", category: "Utah", slug: "Alex"}, 
    {title: "Kaitlyn", category: "Utah", slug: "Kaitlyn"},
    {title: "Aaron", category: "Maine", slug: "Aaron"}, 
    {title: "Mariah", category: "Maine", slug: "Mariah"}
]

export default class extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Welcome to my portfolio!",
            isLoading: false,
            data: names
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    handleReset() {
        this.setState({
            data: names
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} slug={item.slug} />
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <hr/>

                <button onClick={() => this.handleFilter("Maine")}>Maine</button>
                <button onClick={() => this.handleFilter("Utah")}>Utah</button>
                <button onClick={() => this.handleReset()}>Reset</button>
                {this.portfolioItems()}

                <hr/>

            </div>
        )
    }
}