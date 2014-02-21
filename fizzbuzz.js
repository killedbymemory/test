'use strict';

function fizzBuzz(input) {
  var output = [];

  for(var i in input) {
    if ((input[i] % 3 == 0) && (input[i] % 5 == 0)) {
      output.push('FizzBuzz')
    } else if (input[i] % 3 == 0) {
      output.push('Fizz');
    } else if (input[i] % 5 == 0) {
      output.push('Buzz');
    } else {
      output.push(input[i]);
    }
  }

  return output.join(' ');
}

function fizzBuzzBazz(input) {
  var output = [];

  for(var i in input) {
    if ((input[i] % 3 == 0) && (input[i] % 5 == 0)) {
      output.push('FizzBuzz')
    } else if (input[i] % 3 == 0) {
      output.push('Fizz');
    } else if (input[i] % 5 == 0) {
      output.push('Buzz');
    } else if (input[i-1] && input[i-2] && ((input[i-1] % 5 == 0 || input[i-1] % 3 == 0) && (input[i-2] % 5 == 0 || input[i-2] % 3 == 0))) {
      output.push('Bazz');
    } else {
      output.push(input[i]);
    }
  }

  return output.join(' ');
}

function assert(condition, test) {
  var type = condition ? "PASS" : "FAIL";
  console.log(type + " >>> " + test);
}

function assertEqual(condition, test) {
  var output = condition == test ? "PASS" : "FAIL";

  if (output == "FAIL") {
    output += " >>> expecting \"" + condition + "\", \"" + test + "\" given";
  }

  console.log(output);
}

assertEqual(fizzBuzz([12, 13, 14, 15, 16]), 'Fizz 13 14 FizzBuzz 16');
assertEqual(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz');
assertEqual(fizzBuzz([45, 46, 47, 48, 49, 50]), 'FizzBuzz 46 47 Fizz 49 Buzz');

assertEqual(fizzBuzzBazz([4, 5, 6, 7, 8, 9, 10, 11]), '4 Buzz Fizz Bazz 8 Fizz Buzz Bazz');
assertEqual(fizzBuzzBazz([18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 'Fizz 19 Buzz Fizz Bazz 23 Fizz Buzz Bazz Fizz 28 29 FizzBuzz');
//assertEqual(fizzBuzzBazz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz');
//assertEqual(fizzBuzzBazz([45, 46, 47, 48, 49, 50]), 'FizzBuzz 46 47 Fizz 49 Buzz');


//console.log(fizzBuzzBazz([4, 5, 6, 7, 8]));