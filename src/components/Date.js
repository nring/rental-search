import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const Date = (props) => (
  // <input type="date"
  //   className="input__date"
  //   name={props.name}
  //   onChange={props.changeFunction} />

  <DatePicker
    name={props.name}
    onChange={props.changeFunction}
    selected={props.selectedDate}
    minDate={props.minDate}
    maxDate={props.maxDate}
    dateFormat="MM/DD/YYYY" />
);

Date.propTypes = {
  name: React.PropTypes.string.isRequired,
  changeFunction: React.PropTypes.func.isRequired,
  selectedDate: React.PropTypes.object,
  minDate: React.PropTypes.object.isRequired,
  maxDate: React.PropTypes.object.isRequired
}

export default Date;