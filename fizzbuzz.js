'use strict';

function fizzBuzz(input) {
  var output = [];
  var _output;

  for(var i in input) {
    _output = input[i];

    if (input[i] < 0) {
      // only take care of positive integer
      continue;
    } else if (input[i] == 0) {
      _output = 0;
    } else if ((input[i] % 3 == 0) && (input[i] % 5 == 0)) {
      _output = 'FizzBuzz';
    } else if (input[i] % 3 == 0) {
      _output = 'Fizz';
    } else if (input[i] % 5 == 0) {
      _output = 'Buzz';
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

assertEqual(fizzBuzz([-5, -4, -3, -2, -1, 0, 1, 2, 3]), '0 1 2 Fizz');
assertEqual(fizzBuzz([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), '0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11');
assertEqual(fizzBuzz([12, 13, 14, 15, 16]), 'Fizz 13 14 FizzBuzz 16');
assertEqual(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz');
assertEqual(fizzBuzz([45, 46, 47, 48, 49, 50]), 'FizzBuzz 46 47 Fizz 49 Buzz');