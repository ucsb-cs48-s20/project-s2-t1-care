import {
  Container,
  Button,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import Router from "next/router";
import { plantGrowth } from "../utils/growLogic";

export class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: props.user, 
      sleep: "0 hour(s)", 
      mood: "okay",
      log: "",
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
      todaySleep: this.state.sleep,
      todayMood: this.state.mood,
      log: this.state.log
    };

    const body = {
      user: this.state.user,
      plantLevel: plantLevel,
      entry: entry,
    };

    const res = await fetch("/api/daily", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    this.setState({
      log: ""
    });

    Router.push("/");
  }

  render() {
    return (
      <Container>
        <br/><br/>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
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
              {/* <br></br> */}
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
          <div className = "row">
          <div className="col-md-10">
            <Form.Label>log (optional):</Form.Label>
            <Form.Control as="textarea" rows="3" name = "log" value = {this.state.log} onChange = {this.handleInputChange}/>
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
