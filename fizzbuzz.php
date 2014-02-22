<?php

function fizzBuzz(array $input = array()) {
  $output = array();
  $_output;

  if (is_array($input)) {
    foreach($input as $i => $_input) {
      $_output = $input[$i];

      if ($input[$i] < 0) {
        // only take care of positive integer
        continue;
      } else if ($input[$i] == 0) {
        $_output = 0;
      } else if (($input[$i] % 3 == 0) && ($input[$i] % 5 == 0)) {
        $_output = 'FizzBuzz';
      } else if ($input[$i] % 3 == 0) {
        $_output = 'Fizz';
      } else if ($input[$i] % 5 == 0) {
        $_output = 'Buzz';
      }

      $output[] = $_output;
    }
  }

  return implode($output, ' ');
}

function assertEqual($condition, $test) {
  $output = $condition == $test ? 'PASS' : 'FAIL';

  if ($output == 'FAIL') {
    $output .= " >>> expecting \"{$condition}\", \"{$test}\" given";
  }

  echo $output . "\n";
}

assertEqual(fizzBuzz(array(-5, -4, -3, -2, -1, 0, 1, 2, 3)), '0 1 2 Fizz');
assertEqual(fizzBuzz(array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)), '0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11');
assertEqual(fizzBuzz(array(12, 13, 14, 15, 16)), 'Fizz 13 14 FizzBuzz 16');
assertEqual(fizzBuzz(array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)), '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz');
assertEqual(fizzBuzz(array(45, 46, 47, 48, 49, 50)), 'FizzBuzz 46 47 Fizz 49 Buzz');