import React, { Component } from 'react';
import Section from '../section/section';
import styles from './table.module.scss';
import questions from '../../questions.json';
import map from 'lodash/map';

export default class Table extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      keys: Object.keys(questions)
    }
  }

  render() {
    const {keys} = this.state;

    return (
      <div className={styles.table_container}>
        {
          map(keys, (key)=> {
            return (
              <Section
                sectionId={key}
                sectionData={questions[key]}
              />
            );
          })
        }
      </div>
    );
  }
}
