function JSONDisplay(props) {
  if (props.json === 0) {
    return <p> start growing by submitting a journal entry! </p>;
  } else {
    console.log(props.json);
    const listItems = props.json.map((element) => (
      <>
        <p>
          {" "}
          on {element.date}, you felt {element.todayMood} and got{" "}
          {element.todaySleep} of sleep.
        </p>
        {(element.hasOwnProperty("log") && element.log !== "") &&
          <blockquote style = {{marginLeft: "20px"}}> {element.log} </blockquote>
        }
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
    this.state = { userData: 0, testList: [], plant2: 0 };
    this.plant = 10;
    this.plantIMG = "plantframes/frame_00_delay-0.04s.gif";
    this.firstLevel = 0;
  }

  async returnuserData() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    return res.json();
  }
  async componentDidMount() {
    const userData = await this.returnuserData();
    if (userData) {
      console.log(userData.testList);
      this.firstLevel = userData.HistoryLog;
    }
    if (userData) {
      this.setState({ userData: userData, plant2: userData.userData });
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
      <div className = "col-md-8">
        <JSONDisplay json={this.firstLevel} />
     </div>
    )  
  }
}
export default JournalLog;
