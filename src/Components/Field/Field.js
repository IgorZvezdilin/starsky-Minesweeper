import React from "react";
import ButtonField from "../ButtonField/ButtonField";
import './Field.css';


class Field extends React.Component {
    constructor(props) {
        super(props);

        this.generateField = this.generateField.bind(this);
        this.generateFieldWithBomb = this.generateFieldWithBomb.bind(this);
        this.OnClickGenerate = this.OnClickGenerate.bind(this);

        this.state = {
            isClicked: false
        }
    }

    OnClickGenerate (isClicked) {
        if(isClicked){
        this.setState({ isClicked: true});
    } else {
        this.setState({ isClicked: false});
    }
}

    generateFieldWithBomb() {


        let arrWithoutBomb = this.generateField();

        if(this.state.isClicked === false) {
            return ( 
            <div id="field">
                {arrWithoutBomb}  
            </div>);
        }

        const randomArr = [];
        do {
            let randomNum = Math.floor(Math.random() * 256);
    
                if(!randomArr.includes(randomNum)) {
                    randomArr.push(randomNum);
                }
    
            } while(randomArr.length < 40)
            
           
         for(let j = 0; j< randomArr.length; j++) {
    
            arrWithoutBomb[randomArr[j]] = <ButtonField key={'buttonField' + randomArr[j]} src ={this.props.src} onClickTimer={this.props.onClickTimer} onChangeMineCount={this.props.onChangeMineCount} frightOn={this.props.frightOn} isBomb={true} />
        }

        if (this.state.isClicked === true) {
           return( 
           <div id="field">
              {arrWithoutBomb}  
            </div>)
    
    }
    }

    generateField () {
        const buttonArray = [];
        
        for(let i = 0; i< 256; i++) {
            buttonArray.push(<ButtonField key={'buttonField' + i} src ={this.props.src} onClickTimer={this.props.onClickTimer} onChangeMineCount={this.props.onChangeMineCount} frightOn={this.props.frightOn} isBomb={false} isClickedToGen={this.OnClickGenerate} />);
        }

        return buttonArray;
    }

    render () {
        return this.generateFieldWithBomb();
    }
}

export default Field;