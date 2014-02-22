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
    } else {
      // 1. make sure there are two input prior current one
      // 2. those two inputs should be either a multiple of 3 or 5
      // 
      // Though it's possible for these combination of consecutive
      // output to produce 'Bazz', it'll never happen:
      // - Fizz Fizz
      // - Buzz Buzz
      // - Fizz/Buzz FizzBuzz
      // - FizzBuzz Fizz/Buzz
      if (input[i-1] && input[i-2] 
          && (input[i-1] % 5 == 0 || input[i-1] % 3 == 0) 
          && (input[i-2] % 5 == 0 || input[i-2] % 3 == 0)) {
        _output = 'Bazz';
      }
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
assertEqual(fizzBuzz([4, 5, 6, 7, 8, 9, 10, 11]), '4 Buzz Fizz Bazz 8 Fizz Buzz Bazz');
assertEqual(fizzBuzz([18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 'Fizz 19 Buzz Fizz Bazz 23 Fizz Buzz Bazz Fizz 28 29 FizzBuzz');
assertEqual(fizzBuzz([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), '0 1 2 Fizz 4 Buzz Fizz Bazz 8 Fizz Buzz Bazz');
assertEqual(fizzBuzz([98, 99, 100, 101, 102, 103]), '98 Fizz Buzz Bazz Fizz 103');