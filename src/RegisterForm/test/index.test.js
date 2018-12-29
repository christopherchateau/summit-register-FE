import React from "react";
import ReactDOM from "react-dom";
import RegisterForm from "..";
import { shallow } from "enzyme";

describe("RegisterForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RegisterForm handleLogUpdate={jest.fn()} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RegisterForm handleLogUpdate={jest.fn()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("handleChange", () => {
    it("should update state on name change", () => {
      const event = { target: { name: "name", value: "Chris" } };
      wrapper.instance().handleChange(event);
      expect(wrapper.state().name).toEqual("Chris");
    });

    it("should update state on hometown change", () => {
      const event = { target: { name: "hometown", value: "Denver" } };
      wrapper.instance().handleChange(event);
      expect(wrapper.state().hometown).toEqual("Denver");
    });

    it("should update state on comments change", () => {
      const event = { target: { name: "comments", value: "Hiking rules" } };
      wrapper.instance().handleChange(event);
      expect(wrapper.state().comments).toEqual("Hiking rules");
    });
  });

  describe("handleSubmit", () => {
    it("should call handleSubmit on submit button click", () => {
      const spy = spyOn(wrapper.instance(), "handleSubmit");
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().forceUpdate();

      wrapper.find(".submit-btn").simulate("click", mockEvent);
      expect(spy).toHaveBeenCalled();
    });

    // it("should call handleSubmit on submit button click", () => {
    //   wrapper.instance().handleLogUpdate = jest.fn()
    //   const mockState = {
    //     name: "Chris",
    //     hometown: "Denver",
    //     comments: "Hiking rules"
    //   };
    //   wrapper.state().name = "Chris";
    //   wrapper.state().hometown = "Denver";
    //   wrapper.state().comments = "Hiking rules";
    //   console.log(wrapper.state());

    //   const spy = spyOn(wrapper.instance(), "handleLogUpdate");
    //   const mockEvent = { preventDefault: jest.fn() };
    //   wrapper.instance().forceUpdate();

    //   wrapper.find(".submit-btn").simulate("click", mockEvent);
    //   expect(spy).toHaveBeenCalled();
    // });
  });
});
