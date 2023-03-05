import React from "react";
import '../Stopwatch/Stopwatch.css'

class MineCounter extends React.Component {
   constructor(props) {
    super(props);

    this.mineCounter = this.mineCounter.bind(this);

   }
   

   

   mineCounter() {
    return (
        <div id="mine-counter">
            <img src={this.props.mineCount()[0]}/><img src={this.props.mineCount()[1]} /><img src={this.props.mineCount()[2]} />
        </div>
    )
   }

    render () {
        return this.mineCounter();
    }
}

export default MineCounter;