import React from "react";
import ReactDOM from "react-dom";
import App from "..";
import { shallow } from "enzyme";

jest.mock("../../utilities/helper/apiCalls");

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

  describe("handleViewLogButton", () => {
    it("should add all log entries to currentMountainLog", async () => {
      await wrapper.instance().handleViewLogButton();

      const { currentMountainLog } = wrapper.state();
      const names = currentMountainLog.map(log => log.attributes.name);
      const hometowns = currentMountainLog.map(log => log.attributes.hometown);

      expect(currentMountainLog).toHaveLength(2);
      expect(names.includes("Chris")).toBe(true);
      expect(names.includes("Justin")).toBe(true);
      expect(hometowns.includes("Detroit")).toBe(true);
      expect(hometowns.includes("Denver")).toBe(true);
    });

    it("should add 'log' to currentDisplay array", async () => {
      await wrapper.instance().handleViewLogButton();

      const { currentDisplay } = wrapper.state();
      expect(currentDisplay[0]).toEqual("log");
    });
  });

  describe("handleSelectButton", () => {
    it("should update state with selected mountain data", async () => {
      await wrapper.instance().handleSelectButton("Blanca Peak");

      const {
        altitude,
        difficulty,
        summit,
        range,
        name,
        registries
      } = wrapper.state().currentMountainData.attributes;
      
      expect(name).toEqual("Blanca Peak");
      expect(altitude).toEqual(14345);
      expect(difficulty).toEqual("Black");
      expect(summit).toEqual("37.577473,-105.485443");
      expect(range).toEqual("Sangre de Cristo");
      expect(registries.data).toHaveLength(2);
    });

    it("should add 'info' to currentDisplay array", async () => {
      await wrapper.instance().handleSelectButton("Blanca Peak");

      const { currentDisplay, currentMountain } = wrapper.state();
      expect(currentDisplay[0]).toEqual("info");
    });
  });
});
