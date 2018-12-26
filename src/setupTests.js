import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

class LocalStorage {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, string) {
    this.store[key] = string;
  }

  clear() {
    this.store = {};
  }
}

global.localStorage = new LocalStorage();

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

configure({ adapter: new Adapter() });
