import React from "react";
import './ButtonField.css';

import contextObj from "../App/sprites/Sprites";

let flag = false;
let bombflag = false;
class ButtonField extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            src: this.props.src,
            clickCounter: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleMouseUp () {
        this.props.frightOn(true);
    }

    handleMouseDown(event) {  
        if (this.state.src === contextObj.buttonState[2]) {
            this.setState({ src: contextObj.buttonState[5]});
        }
        if(event.button === 0){

        this.props.frightOn(false);
    }
    }

    handleLoad() {
        if(this.props.isBomb) {
            this.setState({ src: contextObj.buttonState[4]});
        }
    }

    handleClick(event) {
        event.preventDefault();

        if (flag === false) {
            flag = true;
            this.props.onClickTimer();
        }



        if (event.button === 0) {
            this.setState({ src: contextObj.buttonState[3], isClicked: true });
            
            if(bombflag === false) {
                bombflag = true;
            this.props.isClickedToGen(true);
            }
        
            
        }
        if(event.button === 2 && !this.state.isClicked) {
            if(this.state.clickCounter === 0) {
                this.setState({ src: contextObj.buttonState[1],
                clickCounter: 1 });
                this.props.onChangeMineCount(true);
                
            }

            if (this.state.clickCounter === 1) {
                this.setState({ src: contextObj.buttonState[2],
                clickCounter: 2 });
                this.props.onChangeMineCount(false);
                
            }
            if (this.state.clickCounter === 2) {
                this.setState({ src: contextObj.buttonState[0],
                clickCounter: 0 });
                
            }
        }
    } 


    render () {
        
        return ( <img src={this.state.src} onLoad={this.handleLoad} onClick={this.handleClick} onContextMenu={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}/>  
        )
    }
}

export default ButtonField;