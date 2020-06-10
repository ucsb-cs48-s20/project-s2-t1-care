import React from "react";
import Plot from "react-plotly.js";

function GenerateGraphData(inputList) {
  let x = [];
  let y = [];
  let y2 = [];
  var i;
  for (i = 0; i < inputList.length; i++) {
    x.push(inputList.length - 1 - i);
    y.push(parseInt(inputList[i].todaySleep));
    let temp = 0;
    if (inputList[i].todayMood == "sad") {
      temp = 3;
    } else if (inputList[i].todayMood == "okay") {
      temp = 6;
    } else if (inputList[i].todayMood == "happy") {
      temp = 10;
    }
    y2.push(temp);
  }
  let result = [
    {
      x: x,
      y: y,
      name: "sleep",
      type: "scatter",
    },
    { x: x, y: y2, name: "mood", type: "scatter" },
  ];
  return result;
}

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { userData: 0, HistoryLog: [], plant2: 0 };
    this.firstLevel = 0;
  }

  async returnuserData() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    return res.json();
  }
  async componentDidMount() {
    const userData = await this.returnuserData();
    if (userData) {
      this.firstLevel = userData.HistoryLog;
    }
    if (userData) {
      this.setState({ userData: userData, plant2: userData.userData });
    }
  }

  render() {
    let toGraph = GenerateGraphData(this.firstLevel);
    return (
      <Plot
        data={toGraph}
        layout={{
          title: "your mood and sleep over time",
          plot_bgcolor: "#FAFAD2",
          paper_bgcolor: "#FAFAD2",
        }}
      />
    );
  }
}
export default Graph;
