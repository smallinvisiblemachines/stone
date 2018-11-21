// IMPORTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddPage extends Component {
  constructor() {
    super();
    
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(e) {
    e.preventDefault();

    console.log('add a page');
  }
  render() {
    return (
      <form>
        <button onClick={this.handleOnClick}>Add Page</button>
        <input type="text" placeholder="Page Title"/>
        <textarea></textarea>
      </form>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>This is the app.</h1>
        <AddPage />
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