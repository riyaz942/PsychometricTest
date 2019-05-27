import React, { Component } from 'react';
import styles from './section.module.scss';
import Part from '../part/part';
import map from 'lodash/map';

export default class Section extends Component {

  render() {
    const {
      sectionId,
      sectionData,
    } = this.props;

    return (
    <div className={styles.section_container}>
      {
        map(sectionData, (data, index) => (
          <Part
            buttonGroupName="aNameisRequried"
            titleNumber={index === 0 ? sectionId : null}
            titleValue={data.question}
          />
        ))
      }
    </div>
    )
  }
}
