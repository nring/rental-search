import React from 'react';

const Location = (props) => (
  <div className="formGroup">
    <label htmlFor={props.name} className="formGroup__label">{props.displayName}</label>
    <input type="text"
      id={props.name}
      className="input__location"
      name={props.name}
      onChange={props.changeFunction}
      value={props.content} />
  </div>
);

Location.propTypes = {
  name: React.PropTypes.string.isRequired,
  displayName: React.PropTypes.string,
  changeFunction: React.PropTypes.func.isRequired,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired
}

export default Location;