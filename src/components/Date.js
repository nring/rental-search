import React from 'react';

const Date = (props) => (
  <input type="date"
    className="input__date"
    name={props.name}
    onChange={props.changeFunction} />
);

Date.propTypes = {
  name: React.PropTypes.string.isRequired,
  changeFunction: React.PropTypes.func.isRequired
}

export default Date;