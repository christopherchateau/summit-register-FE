import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Info from "..";

describe("Info", () => {
  let wrapper;
  const currentLocation = {
    latitude: 39.6295333,
    longitude: -105.1153598,
    sum: -65.4858265
  };
  const currentMountainData = {
    id: "4",
    type: "mountain",
    attributes: {
      altitude: 14345,
      difficulty: "Black",
      name: "Blanca Peak",
      range: "Sangre de Cristo",
      summit: "37.577473,-105.485443",
      registries: {
        data: []
      }
    }
  };
  beforeEach(() => {
    wrapper = shallow(
      <Info
        currentMountainData={currentMountainData}
        handleViewLogButton={jest.fn()}
        currentLocation={currentLocation}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Info
        currentMountainData={currentMountainData}
        handleViewLogButton={jest.fn()}
        currentLocation={currentLocation}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
