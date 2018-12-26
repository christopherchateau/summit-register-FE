import React from "react";
import ReactDOM from "react-dom";
import App from "..";
import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("handleBackButton", () => {
    let currentDisplay;
    beforeEach(() => {
      currentDisplay = [
        "log",
        "loadingScreen",
        "registerForm",
        "log",
        "info",
        "start"
      ];
      wrapper.state().currentDisplay = currentDisplay;
    });

    it("should remove loadingScreen from browsing history", () => {
      wrapper.instance().handleBackButton();
      const { currentDisplay } = wrapper.state();
      expect(currentDisplay.includes("loadingScreen")).toBe(false);
    });

    it("should remove registerForm from browsing history", () => {
      wrapper.instance().handleBackButton();
      const { currentDisplay } = wrapper.state();
      expect(currentDisplay.includes("registerForm")).toBe(false);
    });

    it("should remove never go back to current screen", () => {
      wrapper.instance().handleBackButton();
      const { currentDisplay } = wrapper.state();
      expect(currentDisplay[0]).not.toEqual("log");
    });

    it("should update state accordingly", () => {
      wrapper.instance().handleBackButton();
      const { currentDisplay } = wrapper.state();
      const expected = ["info", "start"];
      expect(currentDisplay).toEqual(expected);
    });
  });
});
