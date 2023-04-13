const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainMem: [],
  getLength() {
    return this.chainMem.length();
  },
  addLink(value /* value */) {
    value!==undefined? this.chainMem.push(value) : this.chainMem.push(' ');
    return this;
  },
  removeLink(position/* position */) {
    if (this.chainMem[position-1] === undefined){
      this.chainMem=[];
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chainMem.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chainMem = this.chainMem.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    this.chainMem.forEach(element =>{
      result+=`( ${element} )~~`
    });
    this.chainMem=[];
    return result.substring(0, result.length - 2);
  }
};

module.exports = {
  chainMaker
};
