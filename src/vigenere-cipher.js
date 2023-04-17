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
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i] >= 'A' && message[i] <= 'Z') {
        encryptedMessage += String.fromCharCode(((message.charCodeAt(i) - 65) + (key.charCodeAt(keyIndex % key.length) - 65)) % 26 + 65);
        keyIndex++;
      } else {
        encryptedMessage += message[i];
      }
    }
    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let message = '';
    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] >= 'A' && encryptedMessage[i] <= 'Z') {
        message += String.fromCharCode(((encryptedMessage.charCodeAt(i) - 65) + 26 - (key.charCodeAt(keyIndex % key.length) - 65)) % 26 + 65);
        keyIndex++;
      } else {
        message += encryptedMessage[i];
      }
    }
    return this.direct ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};