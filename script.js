const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  return key in sampleObject;
}
function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shift = 13;

  return str
    .split("")
    .map((char) => {
      if (/[A-Z]/.test(char)) {
        const charIndex = alphabet.indexOf(char);
        return alphabet[(charIndex + shift) % 26];
      }
      return char;
    })
    .join("");
}
