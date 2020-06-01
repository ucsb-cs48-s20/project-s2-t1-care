import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function JSONDisplay(props) {
  if (props.json === 0) {
    return <p> start growing by submitting a journal entry! </p>;
  } else {
    console.log(props.json[0]);
    const listItems = props.json.map((element) => (
      <>
        <p>
          {" "}
          on {element.date}, you felt {element.todayMood} and got{" "}
          {element.todaySleep} of sleep.
        </p>
        <br />
      </>
    ));
    return (
      <>
        <p> {listItems} </p>
      </>
    );
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
      console.log(plantLevel.testList);
      this.firstLevel = plantLevel.testList;
    }
    if (plantLevel) {
      this.setState({ plantLevel: plantLevel, plant2: plantLevel.PlantLevel });
    }
  }

  render() {
    const jsonData = this.firstlevel;
    let jsonDisplay;
    if (jsonData === 0) {
      jsonDisplay = <p>Start growing by submitting a Journal entry!</p>;
    } else {
      jsonDisplay = <p>{jsonData}</p>;
    }

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
        {/* <div className="column">
          <JSONDisplay json={this.firstLevel} />
        </div> */}
        <div className="column" style={{ textAlign: "center" }}>
          This is your plant. It is a representation of how you're doing. Log
          more entries and meet your goals to see it improve.
        </div>
      </>
    );
  }
}
export default PlantGif;
