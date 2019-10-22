import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tasksFetched } from './../Actions/Action_types'
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <Button  variant="primary" onClick={()=> dispatch(tasksFetched("data"))}>Ds</Button>
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
      </header>
    </div>
  );
}

export default App;
