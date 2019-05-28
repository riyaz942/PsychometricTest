import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import map from 'lodash/map';

class Result extends Component {

  getResult = () => {
    const {
      answersReducer: {answers}
    } = this.props;
    let mostAnswers = {
      star: 0,
      triangle: 0,
      square: 0,
      z: 0,
      n: 0,
    }
    let leastAnswers = {
      star: 0,
      triangle: 0,
      square: 0,
      z: 0,
      n: 0,
    }
    
    const answersKeys= Object.keys(answers);

    map(answersKeys, key => {
      const {
        most,
        least
      } = answers[key];

      switch(most.value) {
        case 'star':
          mostAnswers = {
            ...mostAnswers,
            star: mostAnswers.star + 1
          }
          break;
        case 'triangle':
          mostAnswers = {
            ...mostAnswers,
            triangle: mostAnswers.triangle + 1
          }
          break;
        case 'square':
          mostAnswers = {
            ...mostAnswers,
            square: mostAnswers.square + 1
          }
          break;
        case 'z':
          mostAnswers = {
            ...mostAnswers,
            z: mostAnswers.z + 1
          }
          break;
        case 'n':
          mostAnswers = {
            ...mostAnswers,
            n: mostAnswers.n + 1
          }
          break;
        default: break;
      }


      switch(least.value) {
        case 'star':
          leastAnswers = {
            ...leastAnswers,
            star: leastAnswers.star + 1
          }
          break;
        case 'triangle':
          leastAnswers = {
            ...leastAnswers,
            triangle: leastAnswers.triangle + 1
          }
          break;
        case 'square':
            leastAnswers = {
            ...leastAnswers,
            square: leastAnswers.square + 1
          }
          break;
        case 'z':
          leastAnswers = {
            ...leastAnswers,
            z: leastAnswers.z + 1
          }
          break;
        case 'n':
          leastAnswers = {
            ...leastAnswers,
            n: leastAnswers.n + 1
          }
          break;
        default: break;
      }
    });

    return {
      mostAnswers,
      leastAnswers
    }
  }

  render() {
    const {mostAnswers, leastAnswers} = this.getResult();
    const resultContainerStyle = {
      margin: 20,
    }
    return (
     <div style={{
       display: 'flex',
     }}>
      <div style={resultContainerStyle}>
        MOST Count <br/>
        ---------------<br/>
        {`star : ${mostAnswers.star}`}<br/>
        {`triangle : ${mostAnswers.triangle}`}<br/>
        {`square : ${mostAnswers.square}`}<br/>
        {`z : ${mostAnswers.z}`}<br/>
        {`n : ${mostAnswers.n}`}<br/><br/>
      </div>

      <div style={resultContainerStyle}>
        LEAST Count <br/>
        --------------- <br/>
        {`star : ${leastAnswers.star}`}<br/>
        {`triangle : ${leastAnswers.triangle}`}<br/>
        {`square : ${leastAnswers.square}`}<br/>
        {`z : ${leastAnswers.z}`}<br/>
        {`n : ${leastAnswers.n}`}<br/>
      </div>
     </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    answersReducer: state.answersReducer
  };
}

export default connect(mapStateToProps, null)(Result);
