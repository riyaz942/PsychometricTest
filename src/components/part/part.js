import React, { Component } from 'react';
import { Checkbox} from 'react-materialize';
import styles from './part.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLeast, addMost } from '../../actions/answersActions';
class Part extends Component {

  constructor(props) {
    super(props)
    this.checkBoxFirstOptionRef = React.createRef()
    this.checkBoxSecondOptionRef = React.createRef()
    
    this.state = {
      checkBoxFirstOption: false,
      checkBoxSecondOption: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    //TODO check if the most selected part id is deferent and check current state then unselect if checked
    const {
      answersReducer : {answers},
      partId,
      sectionId,
    } = nextProps;

    const {
      checkBoxFirstOption,
      checkBoxSecondOption,
    } = this.state;

    if (
      checkBoxFirstOption 
      && answers[sectionId]
      && answers[sectionId].most
      && answers[sectionId].most.id !== partId
    ) {
      this.setState({checkBoxFirstOption: false});
      this.checkBoxFirstOptionRef.current._input.checked = false;
    }

    if (
      checkBoxSecondOption 
      && answers[sectionId]
      && answers[sectionId].least
      && answers[sectionId].least.id !== partId
    ) {
      this.setState({checkBoxSecondOption: false});
      this.checkBoxSecondOptionRef.current._input.checked = false;
    }

  }

  checkIfDataExists = (sectionId, partId, type) => {
    const {
      answersReducer,
    } = this.props;

    return (
      answersReducer[sectionId] &&
      answersReducer[sectionId][type] &&
      answersReducer[sectionId][type].id === partId
    )
  }

  onChangeFirstOption = event => {
    const {
      checkBoxFirstOption,
      checkBoxSecondOption,
    } = this.state;
    const {
      partId,
      sectionId,
      addMost
    } = this.props;
    const {
      checked,
      value
    } = event.target;

    if (checked) {
      addMost(sectionId, {
        id: partId,
        value
      })
    }

    this.setState({
      checkBoxFirstOption: !checkBoxFirstOption
    });

    if ( checkBoxSecondOption && !checkBoxFirstOption) {
      this.setState({checkBoxSecondOption: false});
      this.checkBoxSecondOptionRef.current._input.checked = false;
    }
  }

  onChangeSecondOption = event => {
    const {
      checkBoxFirstOption,
      checkBoxSecondOption,
    } = this.state;
    const {
      partId,
      sectionId,
      addLeast
    } = this.props;
    const {
      checked,
      value
    } = event.target;
    //TODO store data in reducers also add validation on each part that a section can't
    // Select more then two answer at a time

    if (checked) {
      addLeast(sectionId, {
        id: partId,
        value
      })
    }

    this.setState({
      checkBoxSecondOption: !checkBoxSecondOption
    });

    if ( checkBoxFirstOption && !checkBoxSecondOption ) {
      this.setState({checkBoxFirstOption: false})
      this.checkBoxFirstOptionRef.current._input.checked = false
    }
  }

  render() {
    const {
      showSectionId,
      sectionId,
      titleValue,
      firstCheckBoxValue,
      secondCheckBoxValue
    } = this.props;

    const {
      checkBoxFirstOption,
      checkBoxSecondOption,
    } = this.state;

    return(
     <div className={styles.part_container}>
      <div className={styles.title_container}>
        {showSectionId && (<div className={styles.title_number}><b>{sectionId}</b></div>)}
        <div className={styles.title_text}>{titleValue}</div>
      </div>

      <div className={styles.radio_container}>
        <Checkbox
          ref={this.checkBoxFirstOptionRef}
          value={firstCheckBoxValue}
          checked={checkBoxFirstOption}
          onChange={this.onChangeFirstOption}
        />
        <Checkbox
          ref={this.checkBoxSecondOptionRef}
          value={secondCheckBoxValue}
          checked={checkBoxSecondOption}
          onChange={this.onChangeSecondOption}
        />
      </div>
     </div>
    )
  }
}

Part.propTypes = {
  showSectionId: PropTypes.bool,

  sectionId: PropTypes.string.isRequired,
  partId: PropTypes.number.isRequired,

  titleValue: PropTypes.string,

  firstCheckBoxValue: PropTypes.string,
  secondCheckBoxValue: PropTypes.string,
};

function mapStateToProps(state) {
 
  return {
    answersReducer: state.answersReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({
      addMost,
      addLeast,
    },
    dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Part);