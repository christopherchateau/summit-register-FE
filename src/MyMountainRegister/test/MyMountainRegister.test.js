import React from "react";
import ReactDOM from "react-dom";
import MyMountainRegister from "..";
import { shallow } from "enzyme";


describe('MyMountainRegister', () => {
  const log = {
    name: 'jimbob',
    hometown: 'Tim-buck-too',
    comments: 'This was rad',
    sign_time: '10:30pm',
    image_url: null,

  }
  let wrapper = shallow(<MyMountainRegister log={log} />)

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MyMountainRegister log={log} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})