import React from "react";
import ReactDOM from "react-dom";
import LocationPopUp from "..";
import { shallow } from "enzyme";

describe("LocatingPopUp", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<LocationPopUp />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LocationPopUp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
