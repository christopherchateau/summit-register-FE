import React from "react";
import ReactDOM from "react-dom";
import MyMountains from "..";
import { shallow } from "enzyme";


describe('MyMountains', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<MyMountains validateSignIn={jest.fn()}  />)

    expect(wrapper).toMatchSnapshot()
  })
})