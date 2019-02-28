import React, {Component} from "react"
import axios from "axios"

import PortfolioItem from "./portfolio-item"


export default class extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Welcome to my portfolio!",
            isLoading: false,
            data: []
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
            data: []
        })
    }

    getPortfolioItems() {
        axios.get('https://alexjones.devcamp.space/portfolio/portfolio_items')
          .then(response => {
              console.log(response);
              
          this.setState({
              data: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log(error);
        });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} title={item.name} pic={item.logo_url} slug={item.slug} />
        })
    }

    componentDidMount() {
        this.getPortfolioItems()
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