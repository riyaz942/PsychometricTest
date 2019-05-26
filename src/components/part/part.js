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
    this.setState({
      checkBoxFirstOption: !this.state.checkBoxFirstOption
    });
    this.checkBoxSecondOptionRef.current._input.checked = false
  }

  onChangeSecondOption = event => {
    this.setState({
      checkBoxSecondOption: !this.state.checkBoxSecondOption
    });
  }

  render() {
    const {
      titleNumber,
      titleValue,
      onChange,
      buttonGroupName,
      buttonValueName
    } = this.props;

    const {
      checkBoxFirstOption,
      checkBoxSecondOption,
    } = this.state;

    return(
     <div className={styles.part_container}>
      <div className={styles.title_container}>
        {titleNumber && (<div className={styles.title_number}><b>{titleNumber}</b></div>)}
        <div className={styles.title_text}>{titleValue}</div>
      </div>

      <div className={styles.radio_container}>
        <Checkbox
          ref={this.checkBoxFirstOptionRef}
          value="Blue"
          checked={checkBoxFirstOption}
          onChange={this.onChangeFirstOption}
        />
        <Checkbox
          ref={this.checkBoxSecondOptionRef}
          value="Red"
          checked={checkBoxSecondOption}
          onChange={this.onChangeSecondOption}
        />
        
        {/* <RadioGroup
          name={buttonGroupName}
          onChange={onChange}
          options={buttonValueName}
        /> */}
      </div>
     </div>
    )
  }
}

Part.defaultProps = {
  buttonValueName: [{label: '',value: 'xl'},{label: '',value: 'l'}],
}
