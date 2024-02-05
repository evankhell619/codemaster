import { it, expect } from "vitest";
import {
  transformToNumber,
  validateStringNotEmpty,
  validateNumber,
} from "./math1";

it("if string convenrt to number ", () => {
  const value = "1";
  const result = transformToNumber(value);
  expect(result).toBe(1);
});

it("validate if string empty", () => {
  const value = "aaa";
  const result = validateStringNotEmpty(value);
  expect(result).toBe("aaa");
});

it("validate if number", () => {
  const number = 2;
  const result = validateNumber(number);
  expect(result).toBeNaN();
});
