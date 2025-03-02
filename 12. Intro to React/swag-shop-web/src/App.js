import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from './services/http-service';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    // Bind the loadData function
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    http.getProducts()
      .then(data => {
        this.setState({ products: data });
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <h2>Products</h2>
            <ul>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <li key={index}>{JSON.stringify(product)}</li>
                ))
              ) : (
                <li>No products loaded</li>
              )}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
