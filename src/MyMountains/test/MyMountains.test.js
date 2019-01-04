import React from "react";
import ReactDOM from "react-dom";
import MyMountains from "..";
import { shallow } from "enzyme";

describe("MyMountains", () => {
  let wrapper = shallow(<MyMountains validateSignIn={jest.fn()} />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MyMountains />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("cleanUserMountainData", () => {
    const registries = [
      {
        attributes: {
          id: "9",
          name: "Chris",
          hometown: "Denver",
          comments: "Hi",
          image_url:
            "https://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg",
          sign_time: "1/1/2019 @ 17:47:41",
          mountain: "mt jimbob"
        }
      },
      {
        attributes: {
          id: "9",
          name: "Chris",
          hometown: "Denver",
          comments: "Hi again",
          image_url:
            "https://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg",
          sign_time: "1/2/2019 @ 17:47:41",
          mountain: "mt jimbob"
        }
      },
      {
        attributes: {
          id: "9",
          name: "Chris",
          hometown: "Denver",
          comments: "Hi",
          image_url:
            "https://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg",
          sign_time: "1/2/2019 @ 17:47:41",
          mountain: "mt timbucktoo"
        }
      }
    ];
    it("should return a single object with mountainNames as Keys and registries as values", () => {
      wrapper.instance().cleanUserMountainData(registries);
      const { cleanMountainData } = wrapper.state();
      expect(cleanMountainData.hasOwnProperty("mt timbucktoo")).toBe(true);
      expect(cleanMountainData.hasOwnProperty("mt jimbob")).toBe(true);
      expect(cleanMountainData["mt jimbob"]).toHaveLength(2);
      expect(cleanMountainData["mt timbucktoo"]).toHaveLength(1);
    });
    it("should call cleanUserMountainData on ComponentDidMount", () => {
      expect(wrapper.instance().cleanUserMountainData).toBeCalled();
    });
  });
});
