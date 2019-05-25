import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal, Button } from 'react-materialize';
import styles from './AppValue.module.scss';

function App() {
const trigger = <Button>Open Modal</Button>;

return (
    <div className={styles.app}>
      <header className="App-header">
        <img src={logo} className={styles.app_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Modal header="Modal Header" trigger={trigger}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal>
      </header>
    </div>
  );
}

export default App;
