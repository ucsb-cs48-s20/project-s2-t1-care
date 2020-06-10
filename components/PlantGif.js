import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Container, Toast, Alert } from "react-bootstrap";
import React, { useState } from 'react';


function JSONDisplay(props) {
  const [showNotification, setShowNotification] = useState(true);

  const closeNotification = () => setShowNotification(false);

  var d = new Date();
  var date = d.getMonth() + 1 + " " + d.getDate() + " " + d.getFullYear();
  var notif = "";
  if (props.json === 0) {
    return <p> </p>;
  } else {
    console.log("JSONDisplay Props: ", props);
    if (props.json[0].date == date) {
      notif = (
        <Toast show = {showNotification} onClose = {closeNotification} className = "mr-3" style = {{backgroundColor: "DarkGreen"}}
          // style={{
          //   position: "absolute",
          //   top: "150px",
          //   right: "180px",
          // }}
        >
          <Toast.Header> you have submitted today </Toast.Header>
          {/* <Toast.Body>you have submitted today</Toast.Body> */}
        </Toast>
      );
    } else {
      notif = (
        <Toast show = {showNotification} onClose = {closeNotification} className = "mr-3" style = {{backgroundColor: "DarkGreen"}}
          // style={{
          //   position: "absolute",
          //   top: 100,
          //   right: 100,
          // }}
        >
          <Toast.Body>you have not submitted today</Toast.Body>
        </Toast>
      );
    }
  //   const listItems = props.json.map((element) => (
  //     <>
  //       <p>
  //         {" "}
  //         on {element.date}, you felt {element.todayMood} and got{" "}
  //         {element.todaySleep} of sleep.
  //       </p>
  //       <br />
  //     </>
  //   ));
   return <>{notif}</>;
  }
}

class PlantGif extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { plantLevel: 0, testList: [], plant2: 0 };
    this.plant = 10;
    this.plantIMG = "plantframes/frame_00_delay-0.04s.gif";
    this.firstLevel = 0;

    // this.state = {
    //   showNotification: true
    // };
  }

  // toggleShowNotification() {
  //   this.setState({
  //     showNotification: !showNotification
  //   })
  // }

  async returnPlantLevel() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    return res.json();
  }

  async componentDidMount() {
    const plantLevel = await this.returnPlantLevel();
    if (plantLevel) {
      this.plant = Math.floor(plantLevel.PlantLevel / 4);
    } else {
      this.plant = 0;
    }
    if (this.plant < 10) {
      this.plantIMG = "plantframes/frame_0" + this.plant + "_delay-0.04s.gif";
    } else if (this.plant < 60) {
      this.plantIMG = "plantframes/frame_" + this.plant + "_delay-0.04s.gif";
    } else {
      this.plant = 0;
    }
    //console.log(this.plant);
    if (plantLevel) {
      //console.log(plantLevel.testList);
      this.firstLevel = plantLevel.testList;
      this.setState({ plantLevel: plantLevel, plant2: plantLevel.PlantLevel });
    }
  }

  render() {
    // const jsonData = this.firstLevel;
    // var jsonDisplay;
    // if (jsonData === 0) {
    //   jsonDisplay = <p>start growing by submitting a journal entry!</p>;
    // } else {
    //   jsonDisplay = <p>{jsonData}</p>;
    // }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7" style={{ textAlign: "center" }}>
            {/* //  className="container" 
        // style={{ textAlign: "center" }} 
        > */}
            {/* <div className="column mt-3" style={{ display: "inline-block" }}> */}
            <img
              src={this.plantIMG}
              className="img-fluid"
              style={{
                width: "450px",
                maxWidth: "200%",
                maxHeight: "200%",
                mixBlendMode: "multiply",
              }}
            />
            {/* </div> */}
          </div>
          <div className="col-md-4">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <div className = "row ml-2">
            <JSONDisplay json={this.firstLevel} />
            </div>

            <div className = "row">
            <Alert
              className="column mt-5"
              style={{ verticalAlign: "bottom" }}
              //style={{ textAlign: "center", margin: "0 auto" }}
            >
              <Alert.Heading> this is your plant. </Alert.Heading>
              <br />
              it is a representation of how you're doing.
              log more entries and meet your goals to see it improve.
            </Alert>
            </div>
          </div>
          {/* <div
          className="column"
          style={{ textAlign: "center", margin: "0 auto" }}
        ></div> */}
        </div>
        {/* <JSONDisplay/> */}
      </div>
    );
  }
}
export default PlantGif;
