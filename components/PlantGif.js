import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Container, Toast, Alert } from "react-bootstrap";
import SubmitNotification from "../components/SubmitNotification";
import MaxLevelNotification from "../components/MaxLevelNotification";

class PlantGif extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { plantLevel: 0, HistoryLog: [] };
    this.plant = 10;
    this.plantIMG = "plantframes/frame_00_delay-0.04s.gif";
    this.firstLevel = 0;
  }

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
    } else if (this.plant < 30) {
      this.plantIMG = "plantframes/frame_" + this.plant + "_delay-0.04s.gif";
    } else {
      this.plantIMG = "plantframes/frame_30_delay-0.04s.gif";
    }
    if (plantLevel) {
      this.firstLevel = plantLevel.HistoryLog;
    }
    if (plantLevel) {
      this.setState({ plantLevel: plantLevel });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7" style={{ textAlign: "center" }}>
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
          </div>
          <div className="col-md-4">
            <br />
            <br />
            <br />
            <br />

            <div className="row ml-2">
              <SubmitNotification user={this.user} />
              <MaxLevelNotification user={this.user} />
            </div>

            <div className="row">
              <Alert
                className="column mt-5"
                style={{ verticalAlign: "bottom" }}
              >
                <Alert.Heading> this is your plant. </Alert.Heading>
                <br />
                it is a representation of how you are taking care of yourself.
                log more entries and meet your goals to see it grow with you.
              </Alert>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PlantGif;
