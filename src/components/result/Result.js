import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import map from 'lodash/map';

class Result extends Component {

  /* ------------------------------------A stupid result function------------------------------------ */
  getCount = () => {
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

  /* ------------------------------------Actual score function------------------------------------ */
  getScore = () => {
    const {mostAnswers, leastAnswers} = this.getCount();
    let star, triangle, square, z;
    const starDifference = mostAnswers.star - leastAnswers.star;
    const triangleDifference = mostAnswers.triangle - leastAnswers.triangle;
    const squareDifference = mostAnswers.square - leastAnswers.square;
    const zDifference = mostAnswers.z - leastAnswers.z;
    // const nDifference = mostAnswers.n - leastAnswers.n;

    if (starDifference => 6 && starDifference <= 24) {
      star = 7
    } else if (starDifference => 5 && starDifference <= 3) {
      star = 6
    } else if (starDifference => 0 && starDifference <= 2) {
      star = 5      
    } else if (starDifference => -2 && starDifference <= -1) {
      star = 4
    } else if (starDifference => -5 && starDifference <= -3) {
      star = 3
    } else if (starDifference => -8 && starDifference <= -6) {
      star = 2
    } else if (starDifference => -26 && starDifference <= -9) {
      star = 1
    }


    if (triangleDifference => 12 && triangleDifference <= 26) {
      triangle = 7
    } else if (triangleDifference => 9 && triangleDifference <= 11) {
      triangle = 6
    } else if (triangleDifference => 6 && triangleDifference <= 8) {
      triangle = 5
    } else if (triangleDifference => 3 && triangleDifference <= 5) {
      triangle = 4
    } else if (triangleDifference => 0 && triangleDifference <= 2) {
      triangle = 3
    } else if (triangleDifference => -4 && triangleDifference <= -1) {
      triangle = 2
    } else if (triangleDifference => -27 && triangleDifference <= -5) {
      triangle = 1
    }


    if (squareDifference => 8 && squareDifference <= 28) {
      square = 7
    } else if (squareDifference => 6 && squareDifference <= 7) {
      square = 6
    } else if (squareDifference => 3 && squareDifference <= 5) {
      square = 5
    } else if (squareDifference => 1 && squareDifference <= 2) {
      square = 4
    } else if (squareDifference => -2 && squareDifference <= 0) {
      square = 3
    } else if (squareDifference => -5 && squareDifference <= -3) {
      square = 2
    } else if (squareDifference => -26 && squareDifference <= -6) {
      square = 1
    }


    if (zDifference => 6 && zDifference <= 27) {
      z = 7
    } else if (zDifference => 0 && zDifference <= 5) {
      z = 6
    } else if (zDifference => -4 && zDifference <= -1) {
      z = 5
    } else if (zDifference => -7 && zDifference <= -5) {
      z = 4
    } else if (zDifference => -11 && zDifference <= -8) {
      z = 3
    } else if (zDifference => -12 && zDifference <= -14) {
      z = 2
    } else if (zDifference => -27 && zDifference <= -15) {
      z = 1
    }

    
    return {
      star,
      triangle,
      square,
      z
    }
  }
  /* ------------------------------------Render Function------------------------------------ */

  render() {
    const {mostAnswers, leastAnswers} = this.getCount();
    const score = this.getScore();
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
      <div style={resultContainerStyle}>
        Score <br/>
        --------------- <br/>
        {`star : ${score.star}`}<br/>
        {`triangle : ${score.triangle}`}<br/>
        {`square : ${score.square}`}<br/>
        {`z : ${score.z}`}<br/>
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
