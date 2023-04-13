const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2/* s1, s2 */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const set1 = s1.split('');
  const set2 = s2.split('');
  const res = [];

  set1.forEach(element => {
    if (set2.includes(element)){
      res.push(element)
      const index = set2.indexOf(element);
      set2.splice(index, 1);
    }
  });

  return res.length
}

module.exports = {
  getCommonCharacterCount
};
