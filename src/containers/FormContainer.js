import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import '../styles/Forms.css';
import Location from '../components/Location';
import Time from '../components/Time';
import Date from '../components/Date';
import Moment from 'moment';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeOptions: [],
      location: '',
      startDate: Moment(),
      startTime: '00:00',
      endDate: Moment(),
      endTime: '00:00',
      results: []
    }

    this.handleLocation = this.handleLocation.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  componentDidMount() {
    this.setTimeOptions();
  }

  setTimeOptions() {

    const timeOptions = [];

    // 48 Time Operations. Easier than writing them all out
    for (let i = 0; i < 24; i++) {
      let time;
      for (let i2 = 0; i2 < 2; i2++) {
        time = this.padNumber(i) + ':' + ( (i2 % 2 === 0) ? '00' : '30');
        timeOptions.push({val: time, name: time})
        // TODO: write out different name values (for 12:00 am, 12:00 pm)
      }
    }

    this.setState({
      timeOptions: timeOptions
    });
  }

  padNumber(num) {
    return (num < 10 ? '0' : '') + num;
  }
  handleLocation(event) {
    this.setState({ location: event.target.value });
  }
  handleStartDate(date) {
    this.setState({ startDate: date });
  }
  handleStartTime(event) {
    this.setState({ startTime: event.target.value });
  }
  handleEndDate(date) {
    this.setState({ endDate: date });
  }
  handleEndTime(event) {
    this.setState({ endTime: event.target.value });
  }
  handleFormSubmit(event) {
    event.preventDefault();

    // TODO: Add a loading indicator
    var _this = this;

    const endpoint = 'https://api.hotwire.com/v1/search/car?apikey=jguzhrtaw6ucmu2sfnek24vn&format=JSONP',
          params =  '&dest=' + this.state.location +
                    '&startdate=' + Moment(this.state.startDate).format('MM/DD/YYYY') +
                    '&enddate=' + Moment(this.state.endDate).format('MM/DD/YYYY') +
                    '&pickuptime=' + this.state.startTime +
                    '&dropofftime=' + this.state.endTime;

    fetchJsonp(endpoint + params)
      .then(response => response.json())
      .then(json => {
        _this.props.onSubmit(json);
      })
      .catch(error => {
        _this.props.onSubmit({error: error});
      })

  }

  render() {
    return (
      <form className="rentalSearch clearfix" onSubmit={this.handleFormSubmit}>

        <Location
          name={'location'}
          displayName={'Search Location'}
          changeFunction={this.handleLocation}
          content={this.state.location} />

        <div className="formGroup formGroup--half">
          <label htmlFor="input__startDate" className="formGroup__label">Start Date and Time</label>
          <Date
            name={'startDate'}
            changeFunction={this.handleStartDate}
            selectedDate={this.state.startDate}
            minDate={Moment()}
            maxDate={Moment().add(1, 'year')} />
          <Time
            name={'startTime'}
            options={this.state.timeOptions}
            changeFunction={this.handleStartTime} />
        </div>

        <div className="formGroup formGroup--half">
          <label htmlFor="input__endDate" className="formGroup__label">End Date and Time</label>
          <Date
            name={'endDate'}
            changeFunction={this.handleEndDate}
            selectedDate={this.state.endDate}
            minDate={this.state.startDate}
            maxDate={Moment().add(1, 'year')} />
          <Time
            name={'endTime'}
            options={this.state.timeOptions}
            changeFunction={this.handleEndTime} />

          <input type="submit" className="btn floatRight" value="Search" />
        </div>

      </form>
    )
  }
}

FormContainer.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default FormContainer;