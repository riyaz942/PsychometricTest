import React, { Component } from 'react';
import {RadioGroup} from 'react-materialize';
import styles from './part.module.scss';

export default class Part extends Component {

  render() {
    const {
      titleNumber,
      titleValue,
      onChange,
      buttonGroupName,
      buttonValueName
    } = this.props;
    return(
     <div className={styles.part_container}>
      <div className={styles.title_container}>
        {titleNumber && (<div className={styles.title_number}><b>{titleNumber}</b></div>)}
        <div className={styles.title_text}>{titleValue}</div>
      </div>

      <div className={styles.radio_container}>
        <RadioGroup
          name={buttonGroupName}
          onChange={onChange}
          options={buttonValueName}
        />
      </div>
     </div>
    )
  }
}

Part.defaultProps = {
  buttonValueName: [{label: '',value: 'xl'},{label: '',value: 'l'}],
}
