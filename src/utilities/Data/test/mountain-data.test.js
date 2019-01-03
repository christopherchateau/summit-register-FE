import { sortMountainNames } from "../mountain-data";

describe("mountain data", () => {
  it("should return mountainData obj as alphabetized array of names", () => {
    const result = sortMountainNames();
    expect(result[0]).toEqual("Blanca Peak")
    expect(result[20]).toEqual("Maroon Peak");
    expect(result[62]).toBe(undefined);
  });
});
