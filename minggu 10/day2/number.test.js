import { cleanNumbers } from "./number";
import { it, expect } from "vitest";
import { validateStringNotEmpty } from "./validation";

it("should clean numbers", () => {
  // Arrange
  const numbers = ["1", "2", "3"];
  const expected = [1, 2, 3];

  // Act
  const result = cleanNumbers(numbers);

  // Assert
  expect(result).toEqual(expected);
});

it("should throw an error if the input is not a valid number", () => {
  // Arrange
  const numbers = ["1", "2", "a"];

  // Act
  const result = () => cleanNumbers(numbers);

  // Assert
  expect(result).toThrowError("Invalid number input");
});

it("validate string", () => {
  const numbers = ["1", "2", ""];
  const result = () => cleanNumbers(numbers);
  expect(result).toThrowError("Invalid input - must not be empty.");
});
