module.exports = function reverse (n) {
  let n = parseInt(n.toString().split("").reverse().join(""));
  return n;
}
