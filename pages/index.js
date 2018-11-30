import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="page-title">Home</h1>
        <p data-testid="page-content">This is the home page!</p>
      </div>
    );
  }
}

export default Home;
