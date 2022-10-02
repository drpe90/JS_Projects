//Caesar's Cipher:

function rot13(str) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//Create a string with all of alphabet.
  let decipher = ""//Create an empty string, where the decoded answer will go.
  for (let i = 0; i < str.length; i++) {//Create a for loop to go through the alphabet.
    if (alpha.indexOf(str[i]) >= 13) {//Use indexOf to figure out the letter position. If the letter position is equal to 13 or more, we want to subtract 13 to get the correct position in the regular alphabet.
      decipher += alpha[alpha.indexOf(str[i]) - 13]
    } else if (alpha.indexOf(str[i]) < 13 && alpha.indexOf(str[i]) > -1) {//If the letter position is less than 13 or it's a special character (-1), we add 13 to get the correct position. 
      decipher += alpha[alpha.indexOf(str[i]) + 13]
    } else {
      decipher += str[i];//This is placing spaces between letters and words to keep the same formatting of the coded message. 
    };
  }
  return decipher;
}

rot13("SERR PBQR PNZC");