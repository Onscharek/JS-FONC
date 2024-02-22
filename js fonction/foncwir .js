                               //    string
                               //    Reverse a String
var reversed = reverseString("hello world");
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reversed); 
                                  // Count Characters

var count = count("hello world");
function count(str) {
    return str.length;
}
console.log(count); 
                                // Capitalize Words

  var capitalized = cap("hello world");
function cap(sentence) {
return sentence.replace(/\b\w/g, function(char) {
 return char.toUpperCase();
    });}
console.log(capitalized);

                            //  array
                            //   Find Maximum and Minimum:
                            // max
    var numbers = [1, 2, 3, 4, 5];
   function findMax(nbr) {
  return Math.max(...nbr);
 }
 console.log("Maximum:", findMax(numbers)); 
                                // min  
   var numbers = [1, 2, 3, 4, 5];
    function findMin(nbr) {
  return Math.min(...nbr);
 }
 console.log("Minimum:", findMin(numbers));
                                    //   Sum of Array
 var numbers = [1, 2, 3, 4, 5];
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(numbers)); 

                                // Filter Array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterArray(arr, condition) {
  return arr.filter(condition);
}
var nmbersGreaterThanFive = filterArray(numbers, function(num) {
  return num > 5;
});
console.log("Numbers greater than 5:", nmbersGreaterThanFive);

                                // Mathematical Functions:
                                // Factorial
        
var number = 5;
var result = factorial(number); 

function factorial(n) {
  if (n === 0 || n === 1) 
  {  return 1;}
  else {
    var result = 1;
    for (var i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }
}
console.log("The factorial of " + number + " is:", result); // Output the result
                                              
                                              // Prime Number Check
 var num1 = 5; 
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

var isNum1Prime = isPrime(num1);
console.log(num1 + " is prime:", isNum1Prime);
                                    // Fibonacci sequence


var numTerms = 10; 
// Generate Fibonacci sequence
var fibonacciSequence = generateFibonacci(numTerms);

function generateFibonacci(numTerms) {
  var fibonacciSequence = [];

  // Initial Fibonacci terms
  var a = 0;
  var b = 1;

  // Loop to generate Fibonacci sequence
  for (var i = 0; i < numTerms; i++) {
    fibonacciSequence.push(a); // Add current term to the sequence
    var nextTerm = a + b; // Calculate next term
    a = b; // Update 'a' to the next term
    b = nextTerm; // Update 'b' to the next term
  }

  return fibonacciSequence;
}


console.log("Fibonacci sequence with " + numTerms + " terms:", fibonacciSequence);

