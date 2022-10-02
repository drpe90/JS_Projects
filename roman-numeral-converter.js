//Roman Numeral Converter:

function convertToRoman(num) { //First, create an object with all the values for Roman numerals stored inside.
  let romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let converted = ""; //An empty string where the converted answer wil go to.
  for (let prop in romanNum) {//Use for...in loop to iterate over numbers in objects.
    while (num >= romanNum[prop]) {//Create a while loop and access properties (Arabic numbers) via bracket notation, [prop].  
      converted += prop;//This puts letters instead of numbers in the answer.
      num -= romanNum[prop];
    }
  }
return converted;
}

convertToRoman(36);