import React, { Component } from 'react';
import moment from "moment"

import PortfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./naviagation/navigation-container"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Alex Jones Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}