"use strict"
/** Command-line tool to generate Markov text. */

const markov = require("./markov.js")
const { MarkovMachine } = require("./markov.js")

const catInHatMachine = new MarkovMachine("The cat is in the hat. The cat is the cat. The hat is a cat.")

console.log("catInHatMachine.words:", catInHatMachine.words )

// console.log("catInHatMachine.getChains: ", catInHatMachine.getChains())