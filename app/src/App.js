import './App.css';
import _ from 'lodash';
import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import { v4 as uuidv4 } from 'uuid';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
   };
  }
render(){
  return (
    <div className="container-fluid row d-flex justify-content-between">
      <header>Linhchi</header>
      <div className="col-8">
        <Table/>
      </div>

    </div>
    
  );
}
}

export default App;
