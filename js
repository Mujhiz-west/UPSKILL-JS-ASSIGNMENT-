Create a function that will be able to convert figures from Fahrenheit to Celsius.
function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * (5/9);
  return celsius;
}

e.g 
function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

var fahrenheit = 200;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log(celsius);


2Create a function that will calculate the average of numbers in an array

function calculateAverage(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var average = sum / numbers.length;
  return average;
}

var numbers = [5, 10, 15, 20];
var average = calculateAverage(numbers);
console.log(average);

3.
Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

ans
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

e.g
var n = 10;
var x = 6;
var y = 4;

if (isDivisible(n, x, y)) {
  console.log(n + " is divisible by " + x + " and " + y);
} else {
  console.log(n + " is not divisible by " + x + " and " + y);
}

4.
Create a function that will output the first 100 prime numbers.

function generatePrimes(count) {
  var primes = [];
  var number = 2;

  while (primes.length < count) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }

  return primes;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

var primes = generatePrimes(100);
console.log(primes);


5.
Create a function that will return a boolean specifying if a number is a prime number.

var number = 21;
var isNumberPrime = isPrime(number);

if (isNumberPrime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}

e.g


6.
Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(numbers) {
  var positiveNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 0) {
      positiveNumbers.push(number);
    }
  }

  return positiveNumbers;
}

e.g

var numbers = [-3, 5, -4, 0, 7, -1, 9];
var positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers);

7.

Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

ans:
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

8.
The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 

It must start with a hash symbol, #.

Ignore all spaces in the input.

All words must have their first letter capitalized.

If the final result is going to be longer than 140 characters, it should return false.

If the input or result is an empty string, it should return false.


solution:
function generateHashtag(str) {
  if (str === "") {
    return false;
  }

  var words = str.split(" ");
  var capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  var hashtag = "#" + capitalizedWords.join("");

  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}

var input = "hello world";
var hashtag = generateHashtag(input);
console.log(hashtag);


