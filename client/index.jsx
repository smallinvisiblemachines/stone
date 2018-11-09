// IMPORTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>This is the app.</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div id="global-wrapper">
    <App />
  </div>,
  document.getElementById('root')
);