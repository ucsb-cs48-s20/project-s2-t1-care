import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Toast from "react-bootstrap/Toast";

class PlantGif extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { plantLevel: 0, HistoryLog: [], plant2: 0 };
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
    } else if (this.plant < 60) {
      this.plantIMG = "plantframes/frame_" + this.plant + "_delay-0.04s.gif";
    } else {
      this.plant = 0;
    }
    console.log(this.plant);
    if (plantLevel) {
      console.log(plantLevel.HistoryLog);
      this.firstLevel = plantLevel.HistoryLog;
    }
    if (plantLevel) {
      this.setState({ plantLevel: plantLevel, plant2: plantLevel.PlantLevel });
    }
  }

  render() {
    return (
      <>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="column" style={{ display: "inline-block" }}>
            <img
              src={this.plantIMG}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div
          className="column"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          this is your plant. it is a representation of how you're doing. log
          more entries and meet your goals to see it improve.
        </div>
        <div
          className="column"
          style={{ textAlign: "center", margin: "0 auto" }}
        ></div>
      </>
    );
  }
}
export default PlantGif;
