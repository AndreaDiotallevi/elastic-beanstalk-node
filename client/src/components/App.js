import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    res: "",
  };

  componentDidMount() {
    const res = axios.get("/flowers");
    this.setState({ res });
  }

  render() {
    return (
      <div>
        <div>App</div>
        <div>{this.res}</div>
      </div>
    );
  }
}

export default App;
