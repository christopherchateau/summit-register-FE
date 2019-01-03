import React, { Component } from "react";
import MyMountainRegister from "../MyMountainRegister";
import { getMyMountains } from "../utilities/helper/apiCalls";
import "./MyMountains.css";

class MyMountains extends Component {
  constructor() {
    super();
    this.state = { myMountains: [] };
  }

  componentDidMount = async () => {
    const userId = this.props.userCredentials.data.id;
    const myMountains = await getMyMountains(userId);
    await this.setState({ myMountains });
  };

  render() {
    const cleanMountainData = this.state.myMountains.reduce((acc, log) => {
      if (!acc[log.attributes.mountain]) {
        acc[log.attributes.mountain] = [];
      }
      acc[log.attributes.mountain].push(log);
      return acc;
    }, {});

    const myMountainNames = Object.keys(cleanMountainData);

    const mountainCard = myMountainNames.map(mountain => {
      return (
        <div className="my-mountain">
          <h3>{mountain}</h3>
          {cleanMountainData[mountain].map(log => {
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

