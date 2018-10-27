import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import chrome from './images/chrome-logo.png';
import firefox from './images/firefox-logo.png';
import edge from './images/microsoft-edge-logo.png';
import safari from './images/safari-icon.png';

const array = ["chrome", "chrome", "firefox", "firefox", "edge", "edge", "safari", "safari"];

console.log(array);

for(let j = 0; j < 8; j++) {
  for(let i = 0; i < 8; i++) {
    let a = Math.floor(Math.random() * Math.floor(8));
    let temp = array[i];
    array[i] = array[a];
    array[a] = temp;
  }
}

console.log(array);
class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={chrome} height="256" width="256" />
      <img src={chrome} height="256" width="256" />
      <img src={chrome} height="256" width="256" />
      </div>
    );
  }
}

export default App;
