import React from "react";
import ReactDOM from "react-dom";
import RegisterForm from "..";
import { shallow } from "enzyme";

jest.mock("../../utilities/helper/apiCalls");

describe("RegisterForm", () => {
  let wrapper;
  let mockHandleLogUpdate;
  const mockPostImage = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <RegisterForm handleLogUpdate={jest.fn()} mockPostImage={{}} />
    );
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
  });

  describe("handleImage", () => {
    it("should set state of image url", () => {
      let expected = "something";
      let mockEventFile = {
        target: {
          files: ["something"]
        }
      };

      wrapper.instance().handleImage(mockEventFile);
      expect(wrapper.state().image).toEqual("something");
    });
  });
});
