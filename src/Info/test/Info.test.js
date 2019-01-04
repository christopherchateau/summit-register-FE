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
  const currentMountainWeather = {
    summary: "Mostly cloudy throughout the day.",
    icon: "partly-cloudy-night",
    data: [
      {
        time: 1546041600,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-night",
        precipProbability: 0.55,
        temperature: 72.8,
        humidity: 0.95,
        windSpeed: 12.39
      }
    ]
  };
  beforeEach(() => {
    wrapper = shallow(
      <Info
        currentMountainData={currentMountainData}
        handleViewLogButton={jest.fn()}
        currentLocation={currentLocation}
        currentMountainWeather={currentMountainWeather}
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
        currentMountainWeather={currentMountainWeather}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("toggleView", () => {
    it("display should toggle between 'info' and 'weather'", () => {
      wrapper.state().display = "info";
      wrapper.instance().toggleView();
      expect(wrapper.state().display).toEqual("weather");
    });

    it("display should toggle between 'info' and 'weather'", () => {
      wrapper.state().display = "weather";
      wrapper.instance().toggleView();
      expect(wrapper.state().display).toEqual("info");
    });
  });
});
