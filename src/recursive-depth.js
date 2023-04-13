const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr,deep = 0,maxDeep = 0/* arr */) {
    // throw new NotImplementedError('Not implemented');
    if (Array.isArray(arr)) {
      deep+=1;
      if(maxDeep<deep){
        maxDeep=deep;
      };
      arr.forEach(elementE => {
        maxDeep = this.calculateDepth(elementE,deep,maxDeep);
      });
    } 
    return maxDeep;
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
