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
});
