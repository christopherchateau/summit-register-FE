import React from "react";
import ReactDOM from "react-dom";
import SignRegister from "..";
import { shallow } from "enzyme";

describe("SignRegister", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SignRegister withinRange={false} handleSignLog={jest.fn()} />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SignRegister />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("outside accepted range", () => {
    it("should not have 'active' class", () => {
      expect(wrapper.find('.SignRegister').hasClass('active')).toBe(false)
    });
  });

  describe("within accepted range", () => {
    beforeEach(() => {
      wrapper = shallow(
        <SignRegister withinRange={true} handleSignLog={jest.fn()} />
      );
    });
    it("should have 'active' class", () => {
      expect(wrapper.find('.SignRegister').hasClass('active')).toBe(true)
    });
  });
});
