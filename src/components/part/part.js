import React, { Component } from 'react';
import {RadioGroup} from 'react-materialize';
import styles from './part.module.scss';

export default class Part extends Component {

  render() {
    return(
     <div className={styles.part_container}>
      <div className={styles.title_container}>
        <div className={styles.title_number}><b>1</b></div>
        <div className={styles.title_text}>part title lamba bhi</div>
      </div>

      <div className={styles.radio_container}>
        <RadioGroup
          name="size"
          label="T-Shirt Size"
          onChange={null}
          options={[{label: '',value: 'xl'},{label: '',value: 'l'}]}
        />
      </div>
     </div>
    )
  }
}
