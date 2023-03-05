import React from 'react';
import Field from '../Field/Field';
import TopBlock from '../TopBlock/TopBlock';
import './App.css';

import contextObj from './sprites/Sprites.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.timer = this.timer.bind(this);
    this.changeMineCount = this.changeMineCount.bind(this);
    this.renderMineCount = this.renderMineCount.bind(this);
    this.frightOn = this.frightOn.bind(this);
    
    this.state = {
      buttonFieldStateSrc: contextObj.buttonState[0],
      mineCount: 40,
      stopwatchTime: [contextObj.numbers[0],contextObj.numbers[0],contextObj.numbers[0]],
      emoji: contextObj.emojiState,
      isFright: contextObj.emojiState[4]
    }
  }

   timer () {
    let stopwatchArr = [contextObj.numbers[0], contextObj.numbers[0], contextObj.numbers[0]];
    let stopwatchCounter = 0;
    let duration = 1000;

    const stopwatchIntervalId = setInterval(() => {
      stopwatchArr[0] = contextObj.numbers[Math.trunc(stopwatchCounter/100)];
      stopwatchArr[1] = contextObj.numbers[Math.trunc(stopwatchCounter/10)%10];
      stopwatchArr[2] = contextObj.numbers[Math.trunc(stopwatchCounter%10)];

      this.setState({ stopwatchTime: stopwatchArr });
      stopwatchCounter++;

      if (stopwatchCounter === 1000) {
        clearInterval(stopwatchIntervalId);
      }
    }, duration);
  }

  changeMineCount (changeCount) {
    let mineCount = this.state.mineCount;
    if (changeCount) {
      mineCount--;
      this.setState({ mineCount: mineCount})
    } else {
      mineCount++;
      this.setState({ mineCount: mineCount });
    }
  }

  renderMineCount() {
    let mineCount = this.state.mineCount;
    let arrFornumbers = [contextObj.numbers[0], contextObj.numbers[4], contextObj.numbers[0]];

    arrFornumbers[1] = contextObj.numbers[Math.trunc(mineCount/10)];
    arrFornumbers[2] = contextObj.numbers[mineCount%10];
    return arrFornumbers;
  }

  frightOn (isFright) {

    if(isFright) {
      this.setState({ isFright: contextObj.emojiState[4] });
    } else {
      this.setState({ isFright: contextObj.emojiState[1] });
    }
  }


  render () {
    return (
          <div id='minesweeper'>
          <TopBlock timer={this.state.stopwatchTime} mineCount={this.renderMineCount} isFright={this.state.isFright} emoji={this.state.emoji} />
          <Field src={this.state.buttonFieldStateSrc} onClickTimer={this.timer} onChangeMineCount={this.changeMineCount} frightOn={this.frightOn} />
          </div>
    );
  }
}

export default App;
