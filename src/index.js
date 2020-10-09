module.exports = function reverse (n) {
  let numStr = n.toString();
  let reversedStr = numStr.split("").reverse().join("");
  return parseInt(reversedStr);
}
