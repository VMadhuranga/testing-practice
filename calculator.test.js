import Calculator from "./calculator";

const { add, subtract, divide, multiply } = Calculator();

test("2 + 1 should be 3", () => {
  expect(add(2, 1)).toBe(3);
});

test("6 - 2 should be 4", () => {
  expect(subtract(6, 2)).toBe(4);
});

test("12 / 4 should be 3", () => {
  expect(divide(12, 4)).toBe(3);
});

test("2 * 2 should be 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
