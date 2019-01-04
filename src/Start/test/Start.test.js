import React from "react";
import ReactDOM from "react-dom";
import Start from "..";
import { shallow } from "enzyme";

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

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Start currentLocation={{}} currentMountainData={currentMountainData} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Locating PopUp", () => {
    it("should render Locating PopUp window when location not found", () => {
      expect(wrapper.find("LocatingPopUp")).toHaveLength(1);
    });

    it("should not render Locating PopUp window when location found", () => {
      wrapper = shallow(
        <Start
          currentLocation={{
            latitude: 39.6294052,
            longitude: -105.11518559999999,
            sum: -65.48578039999998
          }}
          currentMountainData={currentMountainData}
        />
      );
      expect(wrapper.find("LocatingPopUp")).toHaveLength(0);
    });
  });

  describe("start", () => {
    it.skip("should called handleSelectButton", () => {
      const someFunc = jest.fn();
      // wrapper.instance().menu = currentMountainData
      wrapper = shallow(
        <Start
          handleSelectButton={someFunc}
          currentLocation={{
            latitude: 39.6294052,
            longitude: -105.11518559999999,
            sum: -65.48578039999998
          }}
          currentMountainData={currentMountainData}
        />
      );
      // const spy = spyOn(wrapper.instance(), "handleSelectButton");
      // wrapper.instance().handleSelectButton = jest.fn()

      wrapper.find(".select-btn").simulate("click");
      // wrapper.prop('onClickOfCreateAccountButton')()
      expect(someFunc).toHaveBeenCalled();
    });
  });
});
