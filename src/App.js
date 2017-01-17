import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import ResultItem from './components/ResultItem';
import Time from './components/Time';
import './App.css';

class App extends Component {

  getValue() {

    console.log(this);
  }

  render() {
    return (
      <div className="app">

        <FormContainer />

        <ul>
          <ResultItem />
        </ul>
      </div>
    );
  }
}

export default App;
