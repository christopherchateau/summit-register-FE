import React from "react";
import ReactDOM from "react-dom";
import SignIn from "../index";
import { shallow } from "enzyme";

describe("Info", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SignIn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
