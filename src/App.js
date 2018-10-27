import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import chrome from './images/chrome-logo.png';
import firefox from './images/firefox-logo.png';
import edge from './images/microsoft-edge-logo.png';
import safari from './images/safari-icon.png';

const array = [chrome, chrome, firefox, firefox, edge, edge, safari, safari];

for(let j = 0; j < 8; j++) {
  for(let i = 0; i < 8; i++) {
    let a = Math.floor(Math.random() * Math.floor(8));
    let temp = array[i];
    array[i] = array[a];
    array[a] = temp;
  }
}

class App extends Component {
  state = {
    numClicked: 0
  }

  rotateCard = () => {
    console.log("abc");
    const c = document.getElementById("chrome");
    c.style.opacity = 0.2;
  }

  render() {
    return (
      <div className="App">
        {array.map(a => {
        let temp = "";
        a.includes("chrome") ? temp = "chrome"
        : a.includes("firefox") ? temp = "firefox"
        : a.includes("safari") ? temp = "safari"
        : a.includes("microsoft") ? temp = "edge"
        : temp = null;
        return <Card onClick={this.rotateCard} id={temp} src={a} />
        })}
      </div>
    );
  }
}

export default App;
