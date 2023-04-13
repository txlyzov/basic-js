const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr/* arr */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)){
    throw Error(`'arr' parameter must be an instance of the Array!`)
  }
  let arr2 = [];
  let index = 0;
  while (index<arr.length) {
    switch (arr[index]) {
      case '--discard-next':
        index+=2;
        break 
      case '--discard-prev':
        arr2.pop();
        index+=1;
        break
      case '--double-next':
        if(arr[index+1]){
          arr2.push(arr[index+1]);
        }
        index+=1;
        break 
      case '--double-prev':
        if(arr[index-1]){
          arr2.push(arr[index-1]);
        }
        index+=1;
      break;
    
      default:
        arr2.push(arr[index]);
        index+=1;
        break;
    }
  }
  return arr2;
}

module.exports = {
  transform
};
