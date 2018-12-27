configure({ adapter: new Adapter() });
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Start from "..";

describe("Start", () => {
  let wrapper;
  const currentMountainData = {
    name: "Mt Massive",
    altitude: 999999,
    difficulty: "super hard",
    range: "Front Range"
  };
  beforeEach(() => {
    wrapper = shallow(
      <Start currentLocation={{}} currentMountainData={currentMountainData} />
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Start currentLocation={{}} currentMountainData={currentMountainData} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Locating PopUp window when location not found", () => {
    expect(wrapper.find("LocatingPopUp")).toHaveLength(1);
  });

  it("should not render Locating PopUp window when location found", () => {
    wrapper = shallow(
      <Start
        currentLocation={{
          latitude: 39.6294052,
          longitude: -105.11518559999999,
          sum: -65.48578039999998
        }}
        currentMountainData={currentMountainData}
      />
    );
    expect(wrapper.find("LocatingPopUp")).toHaveLength(0);
  });
});
