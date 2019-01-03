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
      wrapper = shallow(<Footer currentDisplay={["log"]} />);
      expect(wrapper.find("SignRegister")).toHaveLength(1);
    });

    describe("my mountains button", () => {
      it("should display my-mountains-btn when logged in", () => {
        wrapper = shallow(
          <Footer currentDisplay={["log"]} isSignedIn={true} />
        );
        expect(wrapper.find(".my-mountains-btn")).toHaveLength(1);
      });

      it("should hide my-mountains-btn when on MyMountains screen", () => {
        wrapper = shallow(
          <Footer currentDisplay={["myMountains"]} isSignedIn={true} />
        );
        expect(wrapper.find(".my-mountains-btn")).toHaveLength(0);
      });

      it("should hide my-mountains-btn when logged out", () => {
        wrapper = shallow(
          <Footer currentDisplay={["log"]} isSignedIn={false} />
        );
        expect(wrapper.find(".my-mountains-btn")).toHaveLength(0);
      });
    });
  });

  describe("sign in/sign out buttons", () => {
    it("should display buttons based on isSignedIn prop", () => {
      wrapper = shallow(<Footer currentDisplay={["log"]} isSignedIn={true} />);
      expect(wrapper.find(".sign-in-btn")).toHaveLength(0);
      expect(wrapper.find(".sign-out-btn")).toHaveLength(1);
    });

    it("should toggle when isSignedIn prop changes", () => {
      wrapper = shallow(<Footer currentDisplay={["log"]} isSignedIn={false} />);
      expect(wrapper.find(".sign-in-btn")).toHaveLength(1);
      expect(wrapper.find(".sign-out-btn")).toHaveLength(0);
    });
  });
});
