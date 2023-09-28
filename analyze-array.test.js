import analyzeArray from "./analyze-array";

test("Array => [1, 8, 3, 4, 2, 6] after analyzing should return Object => {average: 4, min: 1, max: 8, length: 6};", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Same value: Array => [5, 5, 5, 5] after analyzing should return Object => {average: 5, min: 5, max: 5, length: 4};", () => {
  expect(analyzeArray([5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 4,
  });
});

test("Single value: Array => [1] after analyzing should return Object => {average: 1, min: 1, max: 1, length: 1};", () => {
  expect(analyzeArray([5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 4,
  });
});

test("Empty Array: Array => [] after analyzing should return Error ", () => {
  expect(() => analyzeArray([])).toThrow(Error);
});

test("Empty Argument: Should return Error ", () => {
  expect(() => analyzeArray([])).toThrow(Error);
});
