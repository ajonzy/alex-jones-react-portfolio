import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"

const names = [
    {title: "Alex", category: "Utah"}, 
    {title: "Kaitlyn", category: "Utah"},
    {title: "Aaron", category: "Maine"}, 
    {title: "Mariah", category: "Maine"}
]

export default class extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Welcome to my portfolio!",
            isLoading: false,
            data: names
        }

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
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
            return <PortfolioItem title={item.title} />
        })
    }

    handlePageTitleUpdate() {
        this.state.pageTitle == "Welcome to my portfolio!" ? this.setState({
            pageTitle: "Something Else"
        }) : this.setState({
            pageTitle: "Welcome to my portfolio!"
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>

                <hr/>

                {this.portfolioItems()}
                <button onClick={() => this.handleFilter("Maine")}>Maine</button>
                <button onClick={() => this.handleFilter("Utah")}>Utah</button>
                <button onClick={() => this.handleReset()}>Reset</button>

                <hr/>

            </div>
        )
    }
}