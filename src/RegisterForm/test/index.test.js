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

    it.skip("should update state when called", async () => {
      console.log(wrapper.state());
      wrapper.instance().handleSubmit();
      await wrapper.instance().postImage()

      const expected = [
        "http://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg"
      ];
      await expect(wrapper.state().imageUrl).toEqual(expected);
      console.log(wrapper.state());
    });

    it.skip("should have called handleLogUpdate", async () => {
      const mockHandleLogUpdate = jest.fn();

      wrapper = shallow(<RegisterForm handLogUpdate={mockHandleLogUpdate} />);
      // const spy = spyOn(wrapper.instance(), "handleLogUpdate");
      // const mockEvent = { preventDefault: jest.fn() };
      // wrapper.instance().handleSubmit()

      wrapper.find(".submit-btn").simulate("click");
      await expect(mockHandleLogUpdate).toBeCalled();
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
