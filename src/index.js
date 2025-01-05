

function capitalize(string){
  let capitalized = string.charAt(0).toUpperCase();
  let stringTransformed = capitalized + string.substring(1, string.length);
  return stringTransformed;
}

function reverseString(string){
  let newString = string.charAt(string.length - 1);
  for(let i = string.length - 2; i > -1; i--){
    newString = newString + string.charAt(i);
  }
  return newString;
}

let calculator = {
  add: (a,b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a/b;
  },
  multiply: (a, b) => {
    return a * b;
  }

 
}


function caesarCipher(string, shift){
  let newString = "";
  for(let i = 0; i < string.length; i++){
    if(string.charAt(i) >= 'a' && string.charAt(i) <= 'z'){
      let code = string.charCodeAt(i);
      code = code + shift;
      
      while(code > 122){
        code -= 26;
      }
      newString += String.fromCharCode(code);
    }
    else if (string.charAt(i) >= 'A' && string.charAt(i) <= 'Z'){
      let code = string.charCodeAt(i);
      code = code + shift;
      while(code > 90){
        code-= 26;
      }
      newString += String.fromCharCode(code);
    }
    else{
      newString += string.charAt(i);
    }
  }
  return newString;
}

function analyzeArray(array){
  let average = 0;
  let length = array.length;
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  array.forEach((number) => {
    if(number < min){
      min = number;
    }
    if(number > max){
      max = number;
    }
    average += number;
  });
  average = average/length;
  let object = {
    average: average,
    min: min,
    max: max,
    length: length
  }
  return object;
}

export {capitalize, calculator, reverseString, caesarCipher, analyzeArray};