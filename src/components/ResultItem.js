import React, { Component } from 'react';
import '../styles/ResultItem.css';

class ResultItem extends Component {

  render() {
    return (
      <li className="resultItem">
        <p>Daily Rate: {this.props.DailyRate} {this.props.CurrencyCode}</p>
        <p>Total Price: {this.props.TotalPrice}</p>
        <a href={this.props.DeepLink} target="_blank">Click to book!</a>
      </li>
    )
  }
}

export default ResultItem;