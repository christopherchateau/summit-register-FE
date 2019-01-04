import { generateTimeStamp, convertUnixTimeStamp } from "../timeStamp";

describe("timeStamp", () => {
  describe("generateTimeStamp", () => {
    it("should return a time stamp in the proper format", () => {
      const result = generateTimeStamp();
      const regExp = /^\d+\/\d+\/\d+ @ \d+:\d+:\d+$/;
      expect(regExp.test(result)).toBe(true);
    });
  });

  describe("convertUnixTimeStamp", () => {
    it("should be a valid unix time stamp", () => {
      expect("" + 1546041600).toMatch(/^\d{10}$/);
    });

    it("should return valid time", () => {
      const result = convertUnixTimeStamp(1546041600);
      expect(result).toMatch(/^\d{1,2}a|pm$/);
    });
  });
});
