import React from "react";
import ReactDOM from "react-dom";
import SignIn from "../index";
import { shallow } from "enzyme";

describe("Info", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SignIn
        handleBackButton={this.handleBackButton}
        validateSignIn={this.validateSignIn}
      />
    );
  });

  it.skip("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Start currentLocation={{}} currentMountainData={currentMountainData} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
