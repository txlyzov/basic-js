const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(param = true) {
    this.type = param;
    this.arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    this.setupPass = (string,pass) =>{
      while (string.length > pass.length){
        pass+=pass;
      }
      let arstr = string.split('').filter(element =>{return this.arr_EN.indexOf(element) !==-1});
      pass = pass.substring(0, arstr.length)
      return pass;
    }

    this.alg1 = (string,pass) =>{
      let arr_EN = this.arr_EN.concat(this.arr_EN);
      let output = ''
      pass = pass.split('')

      string.split('').forEach((element,index) => {
        const elIndex = arr_EN.indexOf(element);
        const psIndex = arr_EN.indexOf(pass[index]);

        if (arr_EN.indexOf(element) === -1){
          output +=element
          pass.splice(index, 0, ' ');
        } else {
          output +=  arr_EN[elIndex + psIndex]
        }
      });

      return output;
    }

    this.alg2 = (string,pass) =>{
      let arr_EN = this.arr_EN.concat(this.arr_EN);
      let output = ''
      pass = pass.split('');

      string.split('').forEach((element,index) => {
        const elIndex = arr_EN.lastIndexOf(element);
        const psIndex = arr_EN.indexOf(pass[index]);


        if (elIndex === -1){
          output +=element
          pass.splice(index, 0, ' ');
        } else {
          output +=  arr_EN[elIndex - psIndex]
        }
      });


      return output;
    }
  }
  encrypt(string,pass) {
    if (!string || !pass){
      throw new Error('Incorrect arguments!');
    }
    string = string.toUpperCase();
    pass = pass.toUpperCase();
    pass = this.setupPass(string,pass);
    
    if (this.type){
      return this.alg1(string,pass);
    } else return  this.alg1(string,pass).split('').reverse().join('');;
  }
  decrypt(string,pass) {
    if (!string || !pass){
      throw new Error('Incorrect arguments!');
    }
    string = string.toUpperCase();
    pass = pass.toUpperCase();
    pass = this.setupPass(string,pass);

    if (this.type){
      return  this.alg2(string,pass);
    } else return this.alg2(string,pass).split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
