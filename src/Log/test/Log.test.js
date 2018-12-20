configure({ adapter: new Adapter() });
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Log from "..";

describe("Log", () => {
  let wrapper;
  const currentMountainLog = [
    {
      id: "1",
      type: "registry",
      attributes: {
        name: "Andrew",
        hometown: "Boulder",
        comments: "Great hike",
        date: "2018-12-19 21:10:17 UTC"
      }
    },
    {
      id: "2",
      type: "registry",
      attributes: {
        name: "Andrew Tobin",
        hometown: "Denver",
        comments: "Best hike ever",
        date: "2018-12-19 21:11:29 UTC"
      }
    }
  ];
  beforeEach(() => {
    wrapper = shallow(<Log currentMountainLog={currentMountainLog} />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Log currentMountainLog={currentMountainLog} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
