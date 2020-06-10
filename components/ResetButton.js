import React from "react";
import Button from "react-bootstrap/Button";
import Router from "next/router";
class ResetButton extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { userData: 0 };
  }
  async resetLevel(e) {
    e.preventDefault();
    if (
      confirm(
        "are you sure you want to reset your plant? this action is irreversible. note: resetting will keep your log of journal entries."
      )
    ) {
      const body = {
        user: this.user,
      };
      const res = await fetch("/api/resetLevel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      alert(
        "Your plant level has reset. You will now be redirected to the main page."
      );
      Router.push("/");
    }
  }

  async returnuserData() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    return res.json();
  }
  async componentDidMount() {
    const userData = await this.returnuserData();
    if (userData) {
      this.setState({ userData: userData });
    }
  }

  render() {
    return (
      <>
        would you like to reset your plant level?
        <br></br>
        <Button
          variant="danger"
          type="submit"
          onClick={this.resetLevel.bind(this)}
        >
          reset
        </Button>
      </>
    );
  }
}
export default ResetButton;
