import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

function Notification(props) {
  const [show, setShow] = useState(true);
  const level = props.level;

  if (level > 120) {
    var notif = "";
    notif = (
      <Toast
        style={{
          //position: "absolute",
          maxWidth: "250px",
          textAlign: "left",
        }}
        onClose={() => setShow(false)}
        show={show}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto"> journal buds </strong>
          <small> </small>
        </Toast.Header>
        <Toast.Body>
          your plant level is at its max! go to settings to reset it and see
          your plant grow again.
        </Toast.Body>
      </Toast>
    );
  } else {
    return <p></p>;
  }
  return <>{notif}</>;
}

class MaxLevelNotification extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { plantLevel: 0 };
    this.plant = 10;
    this.plantLevel = 0;

    this.log = 0;
  }

  async returnUserData() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    return res.json();
  }

  async componentDidMount() {
    const userData = await this.returnUserData();
    console.log(userData);
    if (userData) {
      this.setState({ plantLevel: userData.PlantLevel });
    }
  }

  render() {
    return (
      <>
        <div className="container" style={{ textAlign: "right" }}>
          <div className="column" style={{ display: "inline-block" }}>
            <Notification level={this.state.plantLevel} />
          </div>
        </div>
      </>
    );
  }
}

export default MaxLevelNotification;
