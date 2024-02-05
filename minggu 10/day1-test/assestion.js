import { subtract, sum } from "./math.js";

it("sum adds two numbers", () => {
  const result = sum(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});
it("subtract subtracts two numbers", () => {
  const result = subtract(1, 2);
  const expected = -1;
  expect(result).toBe(expected);
});

function it(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(result) {
  return {
    toBe: (expected) => {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
    toEqual: () => {},
    toBeDefined: () => {},
    toBeNaN: () => {},
  };
}
