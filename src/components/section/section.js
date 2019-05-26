import React, { Component } from 'react';
import styles from './section.module.scss';
import Part from '../part/part';

export default class Section extends Component{

  render() {
    return(
     <div styles={styles.section_container}>
      <Part
          buttonGroupName="aNameisRequried"
          titleNumber="1"
          titleValue="something i missed"
        />
        <Part
          buttonGroupName="aNameisRequried"
          titleValue="something i missed"
        />
        <Part
          buttonGroupName="aNameisRequried"
          titleValue="something i missed"
        />
     </div>
    )
  }
}
