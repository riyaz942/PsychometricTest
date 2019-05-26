import React from 'react';
import { Modal, Button } from 'react-materialize';
import styles from './app.module.scss';
import Section from './components/section/section';

function App() {
const trigger = <Button>Open Modal</Button>;

return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <Section />
        {/* <Modal header="Modal Header" trigger={trigger}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal> */}
      </div>
    </div>
  );
}

export default App;
