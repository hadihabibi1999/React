import React, { Component } from 'react';
import './outPut.css';
class OutPut extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="result">
                <p className="result p">{this.props.result}</p>
            </div>
          );
    }
}

export default OutPut;