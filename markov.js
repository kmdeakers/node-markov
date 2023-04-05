"use strict"
/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   * 
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   * 
   * */

  getChains() {
    // TODO: implement this!
    // create empty object
    //  iterate over words array. If value is not a key in object, create
    // key value pair. Key is the word, value is an array with words that follow
    // that word.
    
    const wordChain = {};
    const wordsArr = this.words;

    for (let i = 0; i < this.words.length; i++) {
      // console.log("test: ", !wordsArr[1])
      if (!(wordsArr[i] in wordChain)) {
        wordChain[wordsArr[i]] = [wordsArr[i + 1]];
        // console.log("wordChain: ", wordChain)
      } else {
        // console.log("wordChain[wordsArr[i]: ", wordChain[wordsArr[i]])
        wordChain[wordsArr[i]].push(wordsArr[i + 1]);
      }
    } 
    return wordChain;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}

module.exports = { MarkovMachine }