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

class JournalLog extends React.Component {
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

    return <JSONDisplay json={this.firstLevel} />;
  }
}
export default JournalLog;
