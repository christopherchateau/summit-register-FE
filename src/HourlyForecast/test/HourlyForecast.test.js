import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import HourlyForecast from "..";

describe("HourlyForecast", () => {
  let wrapper;
  const currentMountainWeather = {
    time: 1546041600,
    summary: "Mostly Cloudy",
    icon: "clear-night",
    precipProbability: 0.55,
    temperature: 72.8,
    humidity: 0.95,
    windSpeed: 12.39
  };
  beforeEach(() => {
    wrapper = shallow(<HourlyForecast {...currentMountainWeather} />);
  });

  it.skip("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HourlyForecast {...currentMountainWeather} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
