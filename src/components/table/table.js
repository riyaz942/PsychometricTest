import React, { Component, Fragment } from "react";
import Section from "../section/section";
import styles from "./table.module.scss";
import questions from "../../questions.json";
import map from "lodash/map";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: Object.keys(questions)
    };
  }

  render() {
    const { keys } = this.state;

    return (
      <Fragment>
        <div
          style={{
            marginTop: 32
          }}
        >
          Choose one MOST and one LEAST in each of the 28 groups of words.
        </div>
        <div className={styles.table_header_container}>
          {map([0, 1, 2], value =>
            <div className={`${styles.header_part_container} part_${value}`}>
              <div className={styles.header_title_container} />
              <div className={styles.header_value_container}>most/least</div>
            </div>
          )}
        </div>

        <div className={styles.table_container}>
          {map(keys, key => {
            return <Section sectionId={key} sectionData={questions[key]} />;
          })}
        </div>
      </Fragment>
    );
  }
}
