'use strict';

function fizzBuzz(input) {
  var output = [];
  var _output;

  for(var i in input) {
    if ((input[i] % 3 == 0) && (input[i] % 5 == 0)) {
      _output = 'FizzBuzz';
    } else if (input[i] % 3 == 0) {
      _output = 'Fizz';
    } else if (input[i] % 5 == 0) {
      _output = 'Buzz';
    } else {
      _output = input[i];
    }

    output.push(_output);
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