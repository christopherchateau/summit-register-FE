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

  describe("compareNames", () => {
    const mountainData = [
      {
        id: "60",
        attributes: {
          name: "Highlands Ranch High Point"
        }
      },
      {
        id: "61",
        attributes: {
          name: "Dry Peak"
        }
      },
      {
        id: "62",
        attributes: {
          name: "Mt. Harvard"
        }
      }
    ];
    it("should sort objects alphabetically by mountain name", () => {
      const result = mountainData.sort(wrapper.instance().compareNames);
      expect(result[0].attributes.name).toEqual("Dry Peak");
      expect(result[1].attributes.name).toEqual("Highlands Ranch High Point");
      expect(result[2].attributes.name).toEqual("Mt. Harvard");
    });
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
});
