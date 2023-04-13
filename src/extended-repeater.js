const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options/* str, options */) {
  const amem = options.addition!== undefined? [new String(options.addition)] : undefined;
  let asep;

  if(amem!== undefined){
    if(options.additionRepeatTimes>1){
      for (let i = 1;i<options.additionRepeatTimes;i++){
        amem.push(new String(options.addition))
      }
    }

    asep = amem.join(options.additionSeparator!== undefined? new String(options.additionSeparator) : '|')
  }

  const gmem = [asep? new String(str)+asep : new String(str)];

  if(options.repeatTimes>1){
    for (let i = 1;i<options.repeatTimes;i++){
      gmem.push(gmem[0])
    }
  }

  return gmem.join(options.separator!== undefined? new String(options.separator) : '+')
}

module.exports = {
  repeater
};
