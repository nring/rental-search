import React, { Component } from 'react';
import '../styles/Forms.css';
import Location from '../components/Location';
import Time from '../components/Time';
import Date from '../components/Date';
import Data from '../data/Data.json';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeOptions: [],
      location: '',
      startDate: '',
      startTime: '00:00',
      endDate: '',
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
  handleStartDate(event) {
    var date = event.target.value.split('-');
    date = date[1] + '/' + date[2] + '/' + date[0];
    this.setState({ startDate: date });
  }
  handleStartTime(event) {
    this.setState({ startTime: event.target.value });
  }
  handleEndDate(event) {
    var date = event.target.value.split('-');
    date = date[1] + '/' + date[2] + '/' + date[0];
    this.setState({ endDate: date });
  }
  handleEndTime(event) {
    this.setState({ endTime: event.target.value });
  }
  handleFormSubmit(event) {
    event.preventDefault();

    /*
    TODO: Route this through a service to bypass CORS errors
    TODO: Add a loading indicator
    var _this = this;

    const endpoint = 'https://api.hotwire.com/v1/search/car?apikey=jguzhrtaw6ucmu2sfnek24vn&format=JSON',
          opts = {
            method: 'GET',
            mode: 'cors',
            headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
            }
          },
          params =  '&dest=' + this.state.location +
                    '&startdate=' + this.state.startDate +
                    '&enddate=' + this.state.endDate +
                    '&pickuptime=' + this.state.startTime +
                    '&dropofftime=' + this.state.endTime;

    fetch(endpoint + params, opts)
      .then(response => response.json())
      .then(json => {
        _this.props.onSubmit(json);
      })
      .catch(error => {
        _this.props.onSubmit({error: error});
      })
    */
      this.props.onSubmit(Data)
  }

  render() {
    return (
      <form className="rentalSearch" onSubmit={this.handleFormSubmit}>

        <Location
          name={'location'}
          displayName={'Search Location'}
          changeFunction={this.handleLocation}
          content={this.state.location} />

        <div className="formGroup formGroup--half">
          <label htmlFor="input__startDate" className="formGroup__label">Start Date and Time</label>
          <Date
            name={'startDate'}
            changeFunction={this.handleStartDate} />
          <Time
            name={'startTime'}
            options={this.state.timeOptions}
            changeFunction={this.handleStartTime} />
        </div>

        <div className="formGroup formGroup--half">
          <label htmlFor="input__endDate" className="formGroup__label">End Date and Time</label>
          <Date
            name={'endDate'}
            changeFunction={this.handleEndDate} />
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