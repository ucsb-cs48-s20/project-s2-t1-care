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
        className="mr-3"
        style={{ backgroundColor: "DarkGreen" }}
        onClose={() => setShow(false)}
        show={show}
      >
        <Toast.Header>
          your plant level is at its max! go to settings to reset it and see
          your plant grow again.
        </Toast.Header>
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
    if (userData) {
      this.setState({ plantLevel: userData.PlantLevel });
    }
  }

  render() {
    return (
      <>
        <Notification level={this.state.plantLevel} />
      </>
    );
  }
}

export default MaxLevelNotification;
