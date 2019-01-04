import React, { Component } from "react";
import MyMountainRegister from "../MyMountainRegister";
import { getMyMountains } from "../utilities/helper/apiCalls";
import "./MyMountains.css";

class MyMountains extends Component {
  constructor() {
    super();
    this.state = { cleanMountainData: {} };
  }

  componentDidMount = async () => {
    const userId = this.props.userCredentials.data.id;
    const myMountains = await getMyMountains(userId);
    this.cleanUserMountainData(myMountains)
  };

  cleanUserMountainData = (myMountains) => {
    const cleanMountainData = myMountains.reduce((acc, log) => {
      if (!acc[log.attributes.mountain]) {
        acc[log.attributes.mountain] = [];
      }
      acc[log.attributes.mountain].push(log);
      return acc;
    }, {});
    this.setState({ cleanMountainData })
  }

  render() {

    const myMountainNames = Object.keys(this.state.cleanMountainData);

    const mountainCard = myMountainNames.sort().map(mountain => {
      return (
        <div className="my-mountain" key={mountain}>
          <h3>{mountain}</h3>
          {this.state.cleanMountainData[mountain].map(log => {
            return <MyMountainRegister key={log.attributes.id} log={log.attributes} />;
          })}
        </div>
      );
    });

    return (
      <div className="MyMountains">
        {mountainCard}
      </div>
    );
  }
}

export default MyMountains;