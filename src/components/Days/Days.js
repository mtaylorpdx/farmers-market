import React from "react";
import Location from "./Locations";
import Photo from "./Photo";
import "./Days.css";
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import marketSchedule from "../Data/MarketSchedule.js";

class Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = marketSchedule[0];
  }

  handleClick = (index) => {
    this.setState(marketSchedule[index]);
  };

  render() {
    return (
      <React.Fragment>
        <div className="days-box">
          <div className="days-row">
            {/* <h4>Days</h4> */}
            <p><Button variant="outlined" onClick={() => this.handleClick(0)}>Sunday</Button></p>
            <p><Button variant="outlined" onClick={() => this.handleClick(1)}>Monday</Button></p>
            <p><Button variant="outlined" onClick={() => this.handleClick(2)}>Tuesday</Button></p>
            <p><Button variant="outlined" onClick={() => this.handleClick(3)}>Wednesday</Button></p>
            <p><Button variant="outlined" onClick={() => this.handleClick(4)}>Thursday</Button></p>          
            <p><Button variant="outlined" disabled>No Friday Locations</Button></p> 
            <p><Button variant="outlined" onClick={() => this.handleClick(5)}>Saturday</Button></p>

          </div>
          <div className="days-row">
            <Photo img={this.state.img}/>
          </div>
          <div className="days-row">
            <Location
              day={this.state.day}
              hours={this.state.hours}
              location={this.state.location}
              booth={this.state.booth}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Days;
