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
        name: "Andrew Mockett",
        hometown: "Boulder",
        comments: "Great hike",
        sign_time: "2018-12-19 21:10:17 UTC"
      }
    },
    {
      id: "2",
      type: "registry",
      attributes: {
        name: "Andrew Tobin",
        hometown: "Denver",
        comments: "Best hike ever",
        sign_time: "2018-12-19 21:11:29 UTC"
      }
    }
  ];
  beforeEach(() => {
    wrapper = shallow(<Log currentMountainLog={currentMountainLog} />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Log currentMountainLog={currentMountainLog} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("empty log message", () => {
    it("should not display empty log msg when entries present", () => {
      expect(wrapper.find(".empty-log-msg")).toHaveLength(0);
    });

    it("should display empty log msg when zero entries", () => {
      wrapper = shallow(<Log currentMountainLog={[]} />);
      expect(wrapper.find(".empty-log-msg")).toHaveLength(1);
    });
  });
});
