import Button from "react-bootstrap/Button";
import { mutate } from "swr";
import Router from "next/router";
import { plantGrowth } from "../utils/growLogic";

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      goal: "0 hour(s)",
      sleep: "0 hour(s)",
      mood: "okay",
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    var plantLevel = plantGrowth(this.state.mood, parseInt(this.state.sleep));

    event.preventDefault();

    var d = new Date();
    var date = d.getMonth() + 1 + " " + d.getDate() + " " + d.getFullYear();
    console.log(date);
    const entry = {
      date: date,
      todayGoal: this.state.goal,
      todaySleep: this.state.sleep,
      todayMood: this.state.mood,
    };

    const body = {
      user: this.state.user,
      plantLevel: plantLevel,
      entry: entry,
    };
    //get request, make sure they have submitted as different day

    const res = await fetch("/api/daily", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    /* if (res.status === 201) {
        const userObj = await res.json();
        mutate(userObj);
      } */

    //delay, you submitted _ something and will be redirected
    Router.push("/");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          sleep goal is automatically set to 8 hours. if you want to change it,
          go to the settings page!
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
export default Settings;
