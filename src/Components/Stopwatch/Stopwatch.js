import React from "react";
import './Stopwatch.css';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.stopwatch = this.stopwatch.bind(this);
    }

    stopwatch () {
        return (
            <div id="stopwatch">
                <img src={this.props.timer[0]} /><img src={this.props.timer[1]} /><img src={this.props.timer[2]} />
            </div>
        );
    }

    render () {
        return this.stopwatch();
    }
}

export default Stopwatch;