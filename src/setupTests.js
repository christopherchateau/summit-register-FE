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
  watchPosition: jest.fn().mockImplementationOnce(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })
    )
  )
};
global.navigator.geolocation = mockGeolocation;

configure({ adapter: new Adapter() });
