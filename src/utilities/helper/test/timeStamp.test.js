import { generateTimeStamp } from "../timeStamp";

describe("generateTimeStamp", () => {
  it("should return a time stamp in the proper format", () => {
    const result = generateTimeStamp();
    const regExp = /^\d+\/\d+\/\d+ @ \d+:\d+:\d+$/;
    expect(regExp.test(result)).toBe(true);
  });
});
