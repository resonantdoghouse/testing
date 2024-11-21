import { describe, expect, it } from "vitest";
import { add, multiply } from "utils.js";

describe("Math utils", () => {
  it("adds numbers", () => {
    expect(add(2, 3)).toEqual(5);
  });

  it("Multiplies numbers", () => {
    expect(multiply(2, 3)).toEqual(6);
  });
});
