const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(revers = true) {
    this.revers = revers
  }

  encrypt(string, key) {
    let stringConteinKeyWord = '';
    const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let namberCharOfKey = 0;

    for(let i = 0; i < string.length; i++) {
      if(Alphabet.indexOf(string[i].toLowerCase()) == '-1') {
        stringConteinKeyWord += string[i];
        namberCharOfKey--;
      } else {
        if((Alphabet.indexOf(string[i].toLowerCase()) +  Alphabet.indexOf(key[namberCharOfKey].toLowerCase())) < Alphabet.length) {
          stringConteinKeyWord += Alphabet[Alphabet.indexOf(string[i].toLowerCase()) + Alphabet.indexOf(key[namberCharOfKey].toLowerCase())];
        } else {
          stringConteinKeyWord += Alphabet[Alphabet.indexOf(string[i].toLowerCase()) + Alphabet.indexOf(key[namberCharOfKey].toLowerCase()) - Alphabet.length]
        }

      }
      
      

      if(namberCharOfKey < key.length - 1) {
        namberCharOfKey++;
      } else {
        namberCharOfKey = 0;
        }
      }
      if(this.revers) {
        return stringConteinKeyWord.toUpperCase();
      }
      return stringConteinKeyWord.toUpperCase().split('').reverse().join(''); 
    }
    
    // remove line with error and write your code here
    
  decrypt(string, key) {
    
    let stringConteinKeyWord = '';
    const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let namberCharOfKey = 0;

    for(let i = 0; i < string.length; i++) {
      if(Alphabet.indexOf(string[i].toLowerCase()) == '-1') {
        stringConteinKeyWord += string[i];
        namberCharOfKey--;
      } else {
        if((Alphabet.indexOf(string[i].toLowerCase()) -  Alphabet.indexOf(key[namberCharOfKey].toLowerCase())) >= 0) {
          stringConteinKeyWord += Alphabet[Alphabet.indexOf(string[i].toLowerCase()) - Alphabet.indexOf(key[namberCharOfKey].toLowerCase())];
        } else {
          stringConteinKeyWord += Alphabet[Alphabet.indexOf(string[i].toLowerCase()) - Alphabet.indexOf(key[namberCharOfKey].toLowerCase()) + Alphabet.length]
        }

      }
      if(namberCharOfKey < key.length - 1) {
        namberCharOfKey++;
      } else {
        namberCharOfKey = 0;
        }
      }
      if(this.revers) {
        return stringConteinKeyWord.toUpperCase();
      }
      return stringConteinKeyWord.toUpperCase().split('').reverse().join(''); 
    }
    
  }

module.exports = VigenereCipheringMachine;
