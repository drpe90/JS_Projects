//Phone number validator:

function telephoneCheck(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;//Go to regex101.com, paste the valid phone number examples from the challenge into the test field and start playing with expressions until all of the tests pass. Then copy the regex and paste it into a variable 'regex'. 
  return regex.test(str);//Return the result + test for validity at the same time.
}

telephoneCheck("555-555-5555");