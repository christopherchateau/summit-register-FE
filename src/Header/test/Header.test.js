import React from "react";
import ReactDOM from "react-dom";
import Header from "..";
import { shallow } from "enzyme";

describe("Header", () => {
  let wrapper;
  const currentMountainData = {
    attributes: {
      altitude: 14265,
      difficulty: "Blue",
      name: "Castle Peak",
      range: "Elk",
      registries: { data: [] },
      summit: "39.009647,-106.86144"
    },
    id: "12",
    type: "mountain"
  };

  beforeEach(() => {
    wrapper = shallow(
      <Header
        currentDisplay={"start"}
        handleBackButton={jest.fn()}
        currentMountainData={currentMountainData}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Header
        currentDisplay={"start"}
        handleBackButton={jest.fn()}
        currentMountainData={currentMountainData}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("display text", () => {
    it("should display 'summit register' on start screen", () => {
      const displayText = wrapper.find(".main-title");
      expect(displayText.text()).toBe("Summit Register");
    });

    it("should display mountain name if not on start screen", () => {
      wrapper = shallow(
        <Header
          currentDisplay={"info"}
          handleBackButton={jest.fn()}
          currentMountainData={currentMountainData}
        />
      );
      const displayText = wrapper.find(".main-title");
      expect(displayText.text()).toBe("Castle Peak");
    });
  });
});
