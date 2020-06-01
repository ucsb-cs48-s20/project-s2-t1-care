import React from "react";
import Plot from "react-plotly.js";
function GenerateGraphData(inputList) {
  let x = [];
  let y = [];
  var i;
  for (i = 0; i < inputList.length; i++) {
    x.push(i);
    y.push(parseInt(inputList[i].todaySleep));
  }
  let result = {
    x: x,
    y: y,
    type: "scatter",
  };
  return result;
}

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { userData: 0, testList: [], plant2: 0 };
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
      this.firstLevel = userData.testList;
    }
    if (userData) {
      this.setState({ userData: userData, plant2: userData.userData });
    }
  }

  render() {
    let toGraph = [GenerateGraphData(this.firstLevel)];
    return <Plot data={toGraph} />;
  }
}
export default Graph;
