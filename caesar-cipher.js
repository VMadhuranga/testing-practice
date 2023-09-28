/* eslint-disable no-plusplus */
function cipher(shift) {
  const cipherObj = {};
  const plainAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const shiftedAlphabet = [
    ...plainAlphabet.slice(shift),
    ...plainAlphabet.slice(0, shift),
  ];

  for (let i = 0; i < plainAlphabet.length; i++) {
    cipherObj[plainAlphabet[i]] = shiftedAlphabet[i];
  }

  return cipherObj;
}

export default function caesarCipher(string, shift) {
  let cipheredString = "";

  string.split("").forEach((letter) => {
    if (letter in cipher(shift)) {
      cipheredString += cipher(shift)[letter];
    } else {
      cipheredString += letter;
    }
  });

  return cipheredString;
}
