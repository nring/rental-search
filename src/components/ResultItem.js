import React, { Component } from 'react';
import '../styles/ResultItem.css';

class ResultItem extends Component {

  render() {
    return (
      <li className="resultItem clearfix">
        <div className="resultsItem__rate">Daily Rate: {this.props.DailyRate} {this.props.CurrencyCode}</div>
        <div className="resultsItem__price">Total Price: {this.props.TotalPrice}</div>
        <a className="resultsItem__book" href={this.props.DeepLink} target="_blank">Click to book!</a>
      </li>
    )
  }
}

export default ResultItem;