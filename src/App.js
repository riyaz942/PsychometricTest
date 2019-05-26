import React from 'react';
import { Modal, Button } from 'react-materialize';
import styles from './app.module.scss';
import Table from './components/table/table';

function App() {
const trigger = <Button>Open Modal</Button>;

return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <Table />
        {/* <Modal header="Modal Header" trigger={trigger}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal> */}
      </div>
    </div>
  );
}

export default App;
