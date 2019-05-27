import React, { Component } from 'react';
import { RadioGroup, Checkbox} from 'react-materialize';
import styles from './part.module.scss';

export default class Part extends Component {

  constructor(props) {
    super(props)
    this.checkBoxFirstOptionRef = React.createRef()
    this.checkBoxSecondOptionRef = React.createRef()
    
    this.state = {
      checkBoxFirstOption: false,
      checkBoxSecondOption: false,
    }
  }

  onChangeFirstOption = event => {
    const {
      checkBoxFirstOption,
      checkBoxSecondOption,
    } = this.state;

    this.setState({
      checkBoxFirstOption: !checkBoxFirstOption
    });

    if ( checkBoxSecondOption && !checkBoxFirstOption) {
      this.setState({checkBoxSecondOption: false})
      this.checkBoxSecondOptionRef.current._input.checked = false
    }
  }

  onChangeSecondOption = event => {
    const {
      checkBoxFirstOption,
      checkBoxSecondOption,
    } = this.state;

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