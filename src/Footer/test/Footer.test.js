import React from "react";
import ReactDOM from "react-dom";
import Footer from "..";
import { shallow } from "enzyme";

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Footer
        currentDisplay={["registerForm"]}
        handleSignIn={jest.fn()}
        handleLogUpdate={jest.fn()}
        handleSignLog={jest.fn()}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const footer = document.createElement("footer");
    ReactDOM.render(
      <Footer
        currentDisplay={["registerForm"]}
        handleSignIn={jest.fn()}
        handleLogUpdate={jest.fn()}
        handleSignLog={jest.fn()}
      />,
      footer
    );
    ReactDOM.unmountComponentAtNode(footer);
  });

  describe("sign register button", () => {
    it("should not display sign register button on sign register screen", () => {
      expect(wrapper.find("SignRegister")).toHaveLength(0);
    });

    it("should display sign register button if not on sign register screen", () => {
      wrapper = shallow(
        <Footer
          currentDisplay={["log"]}
          handleSignIn={jest.fn()}
          handleLogUpdate={jest.fn()}
          handleSignLog={jest.fn()}
        />
      );
      expect(wrapper.find("SignRegister")).toHaveLength(1);
    });
  });
});
