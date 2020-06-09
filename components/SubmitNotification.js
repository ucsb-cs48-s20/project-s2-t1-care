import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

function Notification(props) {
  var d = new Date();
  var date = d.getMonth() + 1 + " " + d.getDate() + " " + d.getFullYear();
  var notif = "";
  const [show, setShow] = useState(true);

  if (props.json === 0) {
    return <p> </p>;
  } else {
    console.log(props.json[0]);
    if (props.json[0].date == date) {
      notif = (
        <Toast
          style={{
            //position: "absolute",
            minWidth: "250px",
            textAlign: "left",
          }}
          onClose={() => setShow(false)}
          show={show}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto"> journal buds </strong>
            <small> </small>
          </Toast.Header>
          <Toast.Body>you have submitted today</Toast.Body>
        </Toast>
      );
    } else {
      notif = (
        <Toast
          onClose={() => setShow(false)}
          show={show}
          style={{
            //position: "absolute",
            minWidth: "250px",
            textAlign: "left",
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto"> journal buds </strong>
            <small> </small>
          </Toast.Header>
          <Toast.Body>you have not submitted today</Toast.Body>
        </Toast>
      );
    }

    return <>{notif}</>;
  }
}

class SubmitNotification extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { plantLevel: 0, HistoryLog: [], plant2: 0 };
    this.plant = 10;

    this.log = 0;
  }

  async returnUserData() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    return res.json();
  }

  async componentDidMount() {
    const plantLevel = await this.returnUserData();

    if (plantLevel) {
      this.log = plantLevel.HistoryLog;
      this.setState({ plantLevel: plantLevel, plant2: plantLevel.PlantLevel });
    }
  }

  render() {
    return (
      <>
        <div className="container" style={{ textAlign: "right" }}>
          <div className="column" style={{ display: "inline-block" }}>
            <Notification json={this.log} />
          </div>
        </div>
      </>
    );
  }
}

export default SubmitNotification;
