import React from "react";
import MineCounter from "../MineCounter/MineCounter";
import Stopwatch from "../Stopwatch/Stopwatch"
import Startbutton from "../Button/Startbutton";
import './TopBlock.css';

class TopBlock extends React.Component {
    render () {
        return (
        <div id="roof">
            <MineCounter mineCount={this.props.mineCount} />
            <Startbutton isFright={this.props.isFright} emoji={this.props.emoji} />
            <Stopwatch timer = {this.props.timer} />
        </div>
        )
    }
}

export default TopBlock;