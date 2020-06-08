import Button from "react-bootstrap/Button";
import { mutate } from "swr";
import Router from "next/router";
import { plantGrowth } from "../utils/growLogic";

export class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      sleep: "0 hour(s)",
      mood: "okay",
      currGoal: 8,
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const userData = await this.returnUserData();
    if (userData) {
      this.setState({ currGoal: userData.goal });
    }
  }

  async returnUserData() {
    const res = await fetch("/api/daily?sub=" + this.state.user.sub);
    return res.json();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    var plantLevel = plantGrowth(
      parseInt(this.state.currGoal),
      this.state.mood,
      parseInt(this.state.sleep)
    );

    event.preventDefault();

    var d = new Date();
    var date = d.getMonth() + 1 + " " + d.getDate() + " " + d.getFullYear();
    console.log(date);
    const entry = {
      date: date,
      todaySleep: this.state.sleep,
      todayMood: this.state.mood,
    };

    var currGoal = 8;

    const body = {
      user: this.state.user,
      plantLevel: plantLevel,
      entry: entry,
      goal: currGoal,
    };
    //get request, make sure they have submitted as different day

    const res = await fetch("/api/daily", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    //delay, you submitted _ something and will be redirected
    Router.push("/");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          sleep goal is {this.state.currGoal}
          <br></br>
        </label>
        <br></br>
        <label>
          how many hours of sleep did you have?
          <br></br>
          <select
            name="sleep"
            value={this.state.sleep}
            onChange={this.handleInputChange}
          >
            <option value="0 hour(s)">0 hour(s)</option>
            <option value="1 hour(s)">1 hour(s)</option>
            <option value="2 hour(s)">2 hour(s)</option>
            <option value="3 hour(s)">3 hour(s)</option>
            <option value="4 hour(s)">4 hour(s)</option>
            <option value="5 hour(s)">5 hour(s)</option>
            <option value="6 hour(s)">6 hour(s)</option>
            <option value="7 hour(s)">7 hour(s)</option>
            <option value="8 hour(s)">8 hour(s)</option>
            <option value="9 hour(s)">9 hour(s)</option>
            <option value="10+ hour(s)">10+ hour(s)</option>
          </select>
        </label>
        <br></br>
        <label>
          how are you feeling today?
          <br></br>
          <select
            name="mood"
            value={this.state.mood}
            onChange={this.handleInputChange}
          >
            <option value="happy">:)</option>
            <option value="okay">:|</option>
            <option value="sad">:'(</option>
            <option value="angry">>:(</option>
          </select>
        </label>
        <br></br>
        <Button variant="success" type="submit">
          submit
        </Button>
      </form>
    );
  }
}
export default JournalForm;
