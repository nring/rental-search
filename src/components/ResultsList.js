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
    } else if (this.props.results && this.props.results.Errors && this.props.results.Errors.length) {
      errors = this.props.results.Errors;
      // Handle errors
    }

    return (
      <ul className="resultsList">
        {/*errors.map(error => {
          return (
            <Error />
          )
        })*/}
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