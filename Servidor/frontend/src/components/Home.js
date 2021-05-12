import React, { Component } from 'react';//
import home from '../assets/images/home.png';

export default class Home extends Component {
    constructor() {
      super();
      this.state = {
        message: 'Loading...'
      };
    }

    // Example to call api with fetch (axios is recomended)
    callAPI() {
        fetch("http://localhost:3000/")
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    }
  
  componentDidMount() {
      this.callAPI();
  }
    
    render() {
      return (
        <div className="container mt-3">
          <div className="container-da-imagem">
            <img src={home} alt="homeImage"></img>
          </div>
          <h1>Welcome to my home page</h1>
          <p>{this.state.message}</p>
        </div>
      );
    }
  }