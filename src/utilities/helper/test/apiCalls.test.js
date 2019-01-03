import * as apiCalls from "../apiCalls";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCOPftNFUOFLFm0alfd8hswAh9kF-wojsc",
  authDomain: "summit-register-dad45.firebaseapp.com"
});

describe("apiCalls", () => {
  describe("getMountain", () => {
    it("should call fetch mountain data with correct params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({
            id: "4",
            type: "mountain",
            data: {
              attributes: {
                name: "Blanca Peak",
                altitude: 14345,
                difficulty: "Black",
                range: "Sangre de Cristo",
                summit: "37.577473,-105.485443"
              }
            }
          })
        })
      );
      const id = 4;
      const expected =
        "https://summit-register-api.herokuapp.com/api/v1/mountains/4";
      apiCalls.getMountain(id);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("should return a json'd response", async () => {
      const expected = {
        attributes: {
          name: "Blanca Peak",
          altitude: 14345,
          difficulty: "Black",
          range: "Sangre de Cristo",
          summit: "37.577473,-105.485443"
        }
      };
      const id = 4;
      const result = await apiCalls.getMountain(id);
      expect(result.data).toEqual(expected);
    });
  });

  describe("getWeather", () => {
    it("should call fetch weather data with correct params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({
            summary: "Mostly cloudy throughout the day.",
            icon: "partly-cloudy-night",
            data: [
              {
                time: 1546041600,
                summary: "Mostly Cloudy",
                icon: "partly-cloudy-night",
                temperature: 72.8,
                humidity: 0.95,
                windSpeed: 12.39
              }
            ]
          })
        })
      );
      const location = ["12.345", "-123.456"];
      const expected =
        "https://summit-register-weather-api.herokuapp.com/?lat=12.345&lon=-123.456";
      apiCalls.getWeather(location);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("should return a json'd response", async () => {
      const expected = {
        summary: "Mostly cloudy throughout the day.",
        icon: "partly-cloudy-night",
        data: [
          {
            time: 1546041600,
            summary: "Mostly Cloudy",
            icon: "partly-cloudy-night",
            temperature: 72.8,
            humidity: 0.95,
            windSpeed: 12.39
          }
        ]
      };
      const location = ["12.345", "-123.456"];
      const result = await apiCalls.getMountain(location);
      expect(result).toEqual(expected);
    });
  });

  describe("postToLog", () => {
    const id = 4;
    const url = `https://summit-register-api.herokuapp.com/api/v1/mountains/${id}/registries`;
    const logEntry = {
      name: "Chris",
      hometown: "Denver",
      comments: "Hiking Rules"
    };
    const timeStamp = "12/25/2018 @ 19:42:41";
    const expected = {
      body:
        '{"name":"Chris","hometown":"Denver","comments":"Hiking Rules","sign_time":"12/25/2018 @ 19:42:41"}',
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      method: "POST"
    };

    it("should call postToLog with correct params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ data: expected })
        })
      );
      apiCalls.postToLog(id, logEntry, timeStamp);
      expect(window.fetch).toHaveBeenCalledWith(url, expected);
    });

    it("logEntry should contain correct properties", () => {
      expect(logEntry.hasOwnProperty("name")).toBe(true);
      expect(logEntry.hasOwnProperty("hometown")).toBe(true);
      expect(logEntry.hasOwnProperty("comments")).toBe(true);
      expect(logEntry.hasOwnProperty("id")).toBe(false);
    });

    it("should return a json'd response", async () => {
      const result = await apiCalls.postToLog(id, logEntry, timeStamp);
      expect(result).toEqual(expected);
    });
  });

  describe("getCurrentUser", () => {
    it.skip("should return a json'd response", async () => {
      const expected = {
        data: {
          email: "justinstewart3313@gmail.com",
          emailVerified: true,
          displayName: "Justin S",
          photoUrl:
            "https://lh6.googleusercontent.com/-pSIwWNMafUA/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaWlCy7imswUFxVJ8nakIaabrRwlA/mo/photo.jpg",
          uid: "fYLGD6WzgDdIs4K9LVsW9ODES6x2"
        }
      };
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => expected
        })
      );
      const result = await apiCalls.getCurrentUser();
      expect(result).toEqual(expected);
    });
  });

  describe("postUserCredentials", () => {
    const id = 4;
    const userData = {
      name: "jimbob",
      uid: "34509823745098"
    };
    const url = `https://summit-register-api.herokuapp.com/api/v1/users`;
    const expected = {
      body: '{"name":"jimbob","uid":"34509823745098"}',
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      method: "POST"
    };

    it("should call fetch with the proper params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => expected
        })
      );

      apiCalls.postUserCredentials(userData);
      expect(window.fetch).toHaveBeenCalledWith(url, expected);
    });

    it("should return a json'd response", async () => {
      const results = await apiCalls.postUserCredentials(userData);
      expect(results).toEqual(expected);
    });

    it("userData should contain correct properties", () => {
      expect(userData.hasOwnProperty("name")).toBe(true);
      expect(userData.hasOwnProperty("uid")).toBe(true);
    });
  });

  describe("getMyMountains", () => {
    const id = "4";
    const url = `https://summit-register-api.herokuapp.com/api/v1/users/${id}`;
    const expected = {
      attributes: {
        comments: "weeeee",
        date: "2019-01-03 19:39:02 UTC",
        hometown: "detroit",
        image_url:
          "http://res.cloudinary.com/summit-register/image/upload/v1546544342/rdfloxcu2mvpeivu2cqj.jpg",
        mountain: "Dry Peak",
        name: "chris",
        sign_time: "1/3/2019 @ 12:39:1",
        user: "Chris Chateau"
      },
      id: "18",
      type: "registry"
    };
    it("should call fetch with the proper params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({
            data: {
              attributes: {
                registries: {
                  data: expected
                }
              }
            }
          })
        })
      );
      apiCalls.getMyMountains(id);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("should return a json'd response", async () => {
      const results = await apiCalls.getMyMountains(id);

      expect(results).toEqual(expected);
    });
  });
});
