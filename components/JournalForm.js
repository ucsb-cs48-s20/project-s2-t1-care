import { mutate } from "swr";
import Router from "next/router";
import { plantGrowth } from "../utils/growLogic";
import {
  Container,
  Button,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";

export class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      sleep: "0 hour(s)",
      mood: "okay",
      log: "",
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

  async returnPlantLevel() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    return res.json();
  }

  async handleSubmit(event) {
    var plantLevel = plantGrowth(
      this.state.currGoal,
      this.state.mood,
      this.state.sleep
    );

    event.preventDefault();

    var d = new Date();
    var date = d.getMonth() + 1 + " " + d.getDate() + " " + d.getFullYear();
    const entry = {
      date: date,
      todaySleep: this.state.sleep,
      todayMood: this.state.mood,
      log: this.state.log,
    };

    var currGoal = 8;

    const body = {
      user: this.state.user,
      plantLevel: plantLevel,
      entry: entry,
      goal: currGoal,
    };

    const res = await fetch("/api/daily", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    this.setState({
      log: "",
    });
    Router.push("/");
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <p>
            {" "}
            your sleep goal is currently set to {
              this.state.currGoal
            } hour(s).{" "}
          </p>

          <div className="row">
            <br></br>
            <div className="col-md-5">
              <Form.Label>
                how many hours of sleep did you have?
                <br></br>
                <Form.Control
                  as="select"
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
                </Form.Control>
              </Form.Label>
            </div>
            <div className="col-md-5">
              <Form.Label>
                how are you feeling today?
                <br></br>
                <Form.Control
                  as="select"
                  name="mood"
                  value={this.state.mood}
                  onChange={this.handleInputChange}
                >
                  <option value="happy"> :)</option>
                  <option value="okay"> :|</option>
                  <option value="sad"> :'(</option>
                  <option value="angry">>:(</option>
                </Form.Control>
              </Form.Label>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <Form.Label>note (optional):</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="log"
                value={this.state.log}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <br />
          <br />
          <Button variant="success" type="submit">
            submit
          </Button>
        </Form>
      </Container>
    );
  }
}
export default JournalForm;
