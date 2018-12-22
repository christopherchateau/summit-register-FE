configure({ adapter: new Adapter() });
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import SignIn from './index'


describe("Info", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<SignIn handleBackButton={this.handleBackButton}
      validateSignIn={this.validateSignIn} />);
  });

  it.skip("should exist", () => {
    expect(wrapper).toBeDefined();
  });


  it.skip("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

