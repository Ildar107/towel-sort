
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0) return [];
  let stack = [];
  matrix.map((x, i) => {
    stack = stack.concat(x.sort((x,y) => i % 2 === 0 ? x - y : y - x));
    return x;
  })
  return stack;
}