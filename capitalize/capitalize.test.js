import capitalize from "./capitalize";

test("First letter should be uppercase", () => {
  expect(capitalize("abcd")[0]).toMatch(/[A-Z]/);
});
