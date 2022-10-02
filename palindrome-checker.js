//A palindrome checker solution:

function palindrome(str) {
  let goodStr = str.replace(/\W+|_/g, "").toLowerCase(); //Create a variable and ensure it catches and replaces all the weird characters and spacing, also turning everything in lower case.
  let backwardStr = goodStr.split("").reverse().join(""); //Create another variable for reverse part of the palindrome, split and join it.
  return (goodStr !== backwardStr) ? false : true; //Use a ternary operator to compare both variables (parts of the palindrome) and return true, if they match or false, if they do not match.
};

palindrome("eye");