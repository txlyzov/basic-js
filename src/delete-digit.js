const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n/* n */) {
  let maxVal = null;
  const array = n.toString().split('')
  array.forEach((element,index) => {
    let arrayClone = array.slice();
    arrayClone.splice(index, 1)
    const newNumber = parseInt(arrayClone.join(''));

    if(newNumber>maxVal){
      maxVal = newNumber;
    }
  });

  return maxVal
}

module.exports = {
  deleteDigit
};
