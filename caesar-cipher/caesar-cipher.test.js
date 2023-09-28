import caesarCipher from "./caesar-cipher";

test("'defend the east wall of the castle' should be 'hijirh xli iewx aepp sj xli gewxpi' if shift factor is 4", () => {
  expect(caesarCipher("defend the east wall of the castle", 4)).toBe(
    "hijirh xli iewx aepp sj xli gewxpi",
  );
});

test("Wrapping from z to a -> 'z' should be 'c' if shift factor is 3", () => {
  expect(caesarCipher("z", 3)).toBe("c");
});

test("Keep the same case -> 'HELLO' should be 'QNUUX' if shift factor is 9", () => {
  expect(caesarCipher("HELLO", 9)).toBe("QNUUX");
});
test("Don't change the punctuation -> 'hello, world!' should be 'nkrru, cuxrj!' if shift factor is 6", () => {
  expect(caesarCipher("hello, world!", 6)).toBe("nkrru, cuxrj!");
});
