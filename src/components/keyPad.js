import React, { Component } from 'react';
import './keyPad.css';

class KeyPad extends Component {

    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);   
    }

    render() { 
        return (

        <div className="calculator">
           <div className="display"></div>
              <div className="buttons">

              <button name="AC"onClick={this.buttonPressed} className="button top">AC</button>
              <button name="±" onClick={this.buttonPressed} className="button top">±</button>
              <button name="%" onClick={this.buttonPressed} className="button top">%</button>
              <button name="/" onClick={this.buttonPressed} className="button right">÷</button>
              <button name="7" onClick={this.buttonPressed} className="button classic">7</button>
              <button name="8" onClick={this.buttonPressed} className="button classic">8</button>
              <button name="9" onClick={this.buttonPressed} className="button classic">9</button>
              <button name="*" onClick={this.buttonPressed} className="button right">×</button>
              <button name="4" onClick={this.buttonPressed} className="button classic">4</button>
              <button name="5" onClick={this.buttonPressed} className="button classic">5</button>
              <button name="6" onClick={this.buttonPressed} className="button classic">6</button>
              <button name="-" onClick={this.buttonPressed} className="button right">–</button>
              <button name="1" onClick={this.buttonPressed} className="button classic">1</button>
              <button name="2" onClick={this.buttonPressed} className="button classic">2</button>
              <button name="3" onClick={this.buttonPressed} className="button classic">3</button>
              <button name="+" onClick={this.buttonPressed} className="button right">+</button>
              <button name="0" onClick={this.buttonPressed} className="button classic zero">0</button>
              <button name="." onClick={this.buttonPressed} className="button classic">.</button>
              <button name="=" onClick={this.buttonPressed} className="button right">=</button>

            </div>
          </div>
          );
    }
}

export default KeyPad;