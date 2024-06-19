function func1(x) {
  let count = x ?? 0
  function func2(y) {
    return (count += y ?? 1)
  }
  return func2
}

/**
 * TODO Using the function defined above, print the numbers 21, 25, 26, and 32
 * to the console
 */

const closureFunction = func1(10)

console.log(closureFunction(11));
console.log(closureFunction(4));
console.log(closureFunction(1));
console.log(closureFunction(6));
