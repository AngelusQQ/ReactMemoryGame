import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import chrome from './images/chrome-logo.png';
import firefox from './images/firefox-logo.png';
import edge from './images/microsoft-edge-logo.png';
import safari from './images/safari-icon.png';
import blank from './images/question.png';

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
    "global": 0,
    "ansOne": "",
    "ansTwo": "",
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false
  }

  default = () => {
    this.setState({
      "global": 0,
      "20": "",
      "40": "",
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
      "6": false,
      "7": false,
      "8": false
    })
  }

  rotateCard = (num) => {
    console.log(num.target.alt);
    this.setState({
      [num.target.id]: true,
      "global": this.state.global += 1,
    });
    if(this.state.global === 1) {

      this.setState({ [this.state.global * 20]: num.target.alt })
    }
    console.log(this.state[this.state.global * 20]);
    if(this.state.global === 2) {
      setTimeout(this.default, 2000);
    }
  }

  render() {
    let number = 0;
    return (
      <div className="App">
        {array.map(a => {
        number += 1;
        let temp = "";
        const truthy = false;
        a.includes("chrome") ? temp = "chrome"
        : a.includes("firefox") ? temp = "firefox"
        : a.includes("safari") ? temp = "safari"
        : a.includes("microsoft") ? temp = "edge"
        : temp = null;
        console.log(this.state[number], temp);
        return <Card key={number} onClick={this.rotateCard.bind(number)} alt={temp} id={number.toString()} hidden={this.state[number]} blanksrc={blank} src={a} />
        })}
      </div>
    );
  }
}

export default App;
