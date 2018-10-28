import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import title from './images/title.png';
import chrome from './images/chrome-logo.png';
import firefox from './images/firefox-logo.png';
import edge from './images/microsoft-edge-logo.png';
import safari from './images/safari-icon.png';
import blank from './images/question.png';
import correct from './sounds/correct.mp3';
import wrong from './sounds/wrong.mp3';
import winner from './sounds/winner.mp3';

const array = [chrome, chrome, firefox, firefox, edge, edge, safari, safari];

const changeState = function(key,value) {
  return new Promise((resolve, reject) => {
    this.setState({ [key]: value });
    resolve(this.state[key]);
    if(!this.state[key]) { reject("NO KEY PRESENT"); }
  })
};

const scramble = () => {
  for(let j = 0; j < 8; j++) {
    for(let i = 0; i < 8; i++) {
      let a = Math.floor(Math.random() * Math.floor(8));
      let temp = array[i];
      array[i] = array[a];
      array[a] = temp;
    }
  }
}

scramble();


class App extends Component {
  state = {
    "global": 0,
    "correct": 0,
    "cardOne": "",
    "cardTwo": "",
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false
  }

  soundCorrect = new Audio(correct);
  soundWrong = new Audio(wrong);
  soundWinner = new Audio(winner);

  changeState = (key, value) => {
    return new Promise((resolve, reject) => {
      this.setState({ [key]: value });
      resolve(this);
      if(!this.state[key]) { reject("NO KEY PRESENT"); }
    })
  }

  default = () => {
    this.setState({
      "global": 0,
      "correct": 0,
      "cardOne": "",
      "cardTwo": "",
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
      "6": false,
      "7": false,
      "8": false
    });
  }

  rotateCard = (event) => {
    this.setState({
      [event.target.id]: true,
      "global": this.state.global += 1,
    });

    if(this.state.global === 1) {
      this.setState({ "cardOne": event.target.alt })
      this.changeState("cardOne", event.target.alt).then(function(event) {
      });
    }
    else if(this.state.global === 2) {
      this.changeState("cardTwo", event.target.alt).then(function(event) {
        if(event.state.cardOne == event.state.cardTwo) {
          event.setState({
            "global": 0,
          });

          event.changeState("correct", event.state.correct += 1).then(function(foo) {
            if(foo.state.correct == 4) {
              foo.soundWinner.play();
              alert("WINNER");
              scramble();
              setTimeout(foo.default, 1500);
            } else {
              foo.soundCorrect.play();
            }
          })
        } else {
          event.soundWrong.play();
          setTimeout(event.default, 500);
        }
      });
    }
  }

  render() {
    let number = 0;
    return (
      <div className="App">
        <img src={title} alt="Title" />
        <div>
          {array.map(a => {
          number += 1;
          let temp = "";
          a.includes("chrome") ? temp = "chrome"
          : a.includes("firefox") ? temp = "firefox"
          : a.includes("safari") ? temp = "safari"
          : a.includes("microsoft") ? temp = "edge"
          : temp = null;
          return <Card key={number} onClick={this.rotateCard.bind(number)} alt={temp} id={number.toString()} hidden={this.state[number]} blanksrc={blank} src={a} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
