module.exports = function reverse (n) {
  var n = parseInt(n.toString().split("").reverse().join(""));
  return n;
}
