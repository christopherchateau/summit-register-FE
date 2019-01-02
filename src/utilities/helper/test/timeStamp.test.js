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
    it.skip("should convert unix time stamp to proper format", () => {
      const result = convertUnixTimeStamp(1546041600);
      expect(result).toBe('5pm');
    });

    it.skip("should convert unix time stamp to proper format", () => {
      const result = convertUnixTimeStamp(1546074000);
      expect(result).toBe('2am');
    });

    it.skip("should convert unix time stamp to proper format", () => {
      const result = convertUnixTimeStamp(1546066800);
      expect(result).toBe('12am');
    });

    it.skip("should convert unix time stamp to proper format", () => {
      const result = convertUnixTimeStamp(1546196400);
      expect(result).toBe('12pm');
    });
  });
});