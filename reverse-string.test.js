import reverseString from "./reverse-string";

test("String should be reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
