import React, { Component } from 'react';
import ResultItem from '../components/ResultItem';

class ResultsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let items = [],
        errors = [];

    if (this.props.results && this.props.results.Result && this.props.results.Result.length) {
      items = this.props.results.Result;
    } else if (this.props.results && this.props.results.Errors && this.props.results.Errors) {
      errors.push(this.props.results.Errors);
    }

    return (
      <ul className="resultsList">
        {errors.map((error, i) => {
          return (
            <li key={i} className="resultsItem--error">{error.Error.ErrorMessage}</li>
          );
        })}
        {items.map(item => {
          return (
            <ResultItem
              key={item.ResultId}
              {...item} />
          );
        })}
      </ul>
    );
  }
}

ResultsList.propTypes = {
  results: React.PropTypes.object.isRequired
}

export default ResultsList;