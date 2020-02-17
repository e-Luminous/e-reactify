import React, { Component } from "react";
import "../css/style.css";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: "July 27, 2020"
    };
    console.log("Deadline", this.state.deadline);
  }

  getTime = () => {
    let time = Date.parse(this.state.deadline) - Date.parse(new Date());
    // console.log("later unit", time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(((time / 1000) * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({ days, hours, minutes, seconds });
  };

  componentWillMount = () => {
    this.getTime();
  };

  componentDidMount = () => {
    setInterval(() => {
      this.getTime();
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };

  render() {
    return (
      <div className="contents container">
        <div className="row">
          <div className="col s12 l12">
            <h3 className="fgc">Time Remains</h3>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.days}</h3>
                  <h6>Days</h6>
                </div>
              </div>
            </div>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.hours} </h3>
                  <h6>Hours</h6>
                </div>
              </div>
            </div>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.minutes} </h3>
                  <h6>Minutes</h6>
                </div>
              </div>
            </div>
            <div className="col s12 l3">
              <div className="card">
                <div className="card-content">
                  <h3> {this.state.seconds} </h3>
                  <h6>Seconds</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h3 className="fgc">Subscription Plan</h3>
          <div className="col s12 l4">
            <div className="card">
              <div className="card-content">
                <h4 className="grey-text text-darken-2">Silver</h4>
                <i className="material-icons large circleSilver">cloud</i>
                <h3 className="center-align">$100</h3>
                <br />
                <p>Valid for 6 months</p>
                <hr />
                <p>No backup</p>
                <hr />
                <p>No Update</p>
                <br />
                <a class="waves-effect btn grey darken-2 subsBtn">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="card">
              <div className="card-content">
                <h4 className="amber-text text-darken-2">Golden</h4>
                <i className="material-icons large circleGolden">cloud</i>
                <h3 className="center-align">$250</h3>
                <br />
                <p>Valid for 3 months</p>
                <hr />
                <p>1 year backup</p>
                <hr />
                <p>2 year Update</p>
                <br />
                <a class="waves-effect btn amber darken-2 subsBtn">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="card">
              <div className="card-content">
                <div className="card-content">
                  <h4 className="amber-text text-darken-2">Golden</h4>
                  <i className="material-icons large circleGolden">cloud</i>
                  <h3 className="center-align">$250</h3>
                  <br />
                  <p>Valid for 3 months</p>
                  <hr />
                  <p>1 year backup</p>
                  <hr />
                  <p>2 year Update</p>
                  <br />
                  <a class="waves-effect btn amber darken-2 subsBtn">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription;
