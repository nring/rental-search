import React from 'react';

const Time = (props) => (
  <select 
    className="input__time"
    name={props.name}
    onChange={props.changeFunction}>
    {props.options.map(option => {
      return (
        <option
          key={option.val}
          value={option.val}>{option.name}</option>
      );
    })}
  </select>
);

Time.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  changeFunction: React.PropTypes.func.isRequired
}

export default Time;