import * as apiCalls from "../apiCalls";

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

  describe("postToLog", () => {
    beforeEach(() => {
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

      it("should return a json'd response", async () => {
        const result = await apiCalls.postToLog(id, logEntry, timeStamp);
        expect(result).toEqual(expected);
      });
    });
  });
});
