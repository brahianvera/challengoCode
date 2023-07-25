// USING GIT FLOW FROM A FEATURE BRANCH
function pairElement(str) {
  let DNAPair = {
    "T":"A",
    "A":"T",
    "C":"G",
    "G":"C"
  }
  return str.split("").map(letter => [letter,DNAPair[letter]]);
}

console.log(pairElement("GCG"));
