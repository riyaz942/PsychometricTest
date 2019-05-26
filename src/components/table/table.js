import React, { Component } from 'react';
import Section from '../section/section';
import styles from './table.module.scss';

export default class Table extends Component {
  render() {
    return (
      <div className={styles.table_container}>
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />        
      </div>
    );
  }
}
