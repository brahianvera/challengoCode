function myReplace(str, before, after) {
  let newAfter = /^[A-Z]/.test(before) ? after[0].toUpperCase() + after.substring(1) : after[0].toLowerCase()+after.substring(1);

  return str.replace(before,newAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");