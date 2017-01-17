import React, { Component } from 'react';
import Location from '../components/Location';
import Time from '../components/Time';
import Date from '../components/Date';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeOptions: [],
      location: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: ''
    }

    this.handleLocation = this.handleLocation.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  componentDidMount() {

    const timeOptions = [];

    // 48 Time Operations. Easier than writing them all out
    for (let i = 0; i < 24; i++) {
      let time;
      for (let i2 = 0; i2 < 2; i2++) {
        time = this.padNumber(i) + ':' + ( (i2 % 2 === 0) ? '00' : '30');
        timeOptions.push({val: time, name: time})
        // TODO: write out different name values (for 12:00 am, 12:00 pm)
      }
      timeOptions.push({val: time, name: time});
    }

    this.setState({
      timeOptions: timeOptions
    })
  }

  padNumber(num) {
    return (num < 10 ? '0' : '') + num;
  }
  handleLocation(event) {  
    this.setState({ location: event.target.value });
  }
  handleStartDate(event) {
    console.log('Start Date changed');
  }
  handleStartTime(event) {
    console.log(event);
  }
  handleEndDate(event) {
    console.log('Start Date changed');
  }
  handleEndTime(event) {
    console.log(event);
  }
  handleFormSubmit(event) {
    event.preventDefault();

    const endpoint = 'http://api.hotwire.com/v1/search/car?apikey=jguzhrtaw6ucmu2sfnek24vn',
          opts = {
            method: 'GET',
            mode: 'no-cors'
          },
          params =  '&dest=' + this.state.location +
                    '&startdate=' + this.state.startDate +
                    '&enddate=' + this.state.endDate +
                    '&pickuptime=' + this.state.startTime +
                    '&dropofftime=' + this.state.endTime;

    fetch(endpoint + params, opts)
      .then(function(response){
        console.log(response);
      });
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
        </div>

        <input type="submit" className="btn" value="Search" />

      </form>
    )
  }


}

export default FormContainer;