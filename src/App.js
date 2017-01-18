import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import ResultsList from './components/ResultsList';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }

    this.setResults = this.setResults.bind(this);
  }

  setResults(results) {
    this.setState({ results: results });
  }

  render() {
    return (
      <div className="app">
        <h1>Rental Search</h1>
        <FormContainer
          onSubmit={this.setResults} />
        <ResultsList 
          results={this.state.results} />
      </div>
    );
  }
}

export default App;
