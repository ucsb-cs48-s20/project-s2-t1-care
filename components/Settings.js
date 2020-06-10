import { Button, Form } from "react-bootstrap";
import { mutate } from "swr";

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      goal: "0 hour(s)",
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
    event.preventDefault();

    const body = {
      user: this.state.user,
      goal: parseInt(this.state.goal),
    };

    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    alert("you have changed your sleep goal to " + this.state.goal + ".");
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Label>
          what would you like to change your sleep goal to?
          <br></br>
          <Form.Control
            className="col-md-5"
            as="select"
            name="goal"
            value={this.state.goal}
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
        <br />
        <Button variant="success" type="submit">
          submit
        </Button>
      </Form>
    );
  }
}
export default Settings;
