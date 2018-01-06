/*
Part 1: Cumulative Sum
Calculate the total sum of numbers from 0 to x using a while loop.

1. Instantiate a variable called sum. We haven’t added anything, so you can assign it to 0.
2. Then create a variable x, which should also start at 0.
3. Create a while loop that calculates the sum of all numbers from 0 to x until the sum is equal to or greater than 100.
4. What is x equal to when your code breaks out of its loop?

Part 2: FizzBuzz
Play fizz buzz, a classic coding challenge!

1. Write a for lopps that console.log's the numbers 1 to 100.
2. But for numbers that are multiples of three print "Fizz" instead of that number.
3. For the multiples of five print "Buzz" instead of that number.
4. For numbers which are multiples of both three and five print "FizzBuzz".

Part 3: Reverse an Array
Use either a for or while loop to iterate over an array and create a reversed array.

1. Create a variable called numbers which contains an array of the numbers 1 - 10.
2. Create a second variable called reversedNumbers and assign it to an empty array.
3. Now loop over your original array and add each item to the second array.
4. Log your second array to the console after. Is it successfully reversed?

Part 4: Guess a Number
Create a number guessing game using a while loop.

1. Generate a random number between 1 and 10 and save it into a variable called secretNumber. (Hint: Check out the docs for JavaScript's Math.random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
2. Craft a while loop that will prompt a user to input a guess.
3. Check if their guess is equal to the secret number.
4. Loop until the user guesses correctly, telling them if their guess is too high or too low.
5. Give them a message of congratulations when they successfully guess the number.
*/

// Your name:Nyiema Bayfield
// Your partner's name:

// Part 1: Cumulative Sum
  var sum, x;

  sum = 0;

  for (x = 1; sum <= 100; x++) {
      sum = sum + x;
  }
  console.log(sum);



// Part 2: FizzBuzz

for (var number = 1; number <= 100; number = number + 1) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}



// Part 3: Reverse an Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reversedNumbers = [];

for (var index = numbers.length - 1; index >= 0; index--) {
  reversedNumbers.push(numbers[index]);
}
console.log(reversedNumbers);

// Part 4: Guess a Number


 var secretNumber;

 function generateRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

secretNumber = generateRandomInt(1, 10);

var userInput;

while (userInput !== secretNumber) {
  userInput = prompt("Input your Guess for the secret number.");
    if (userInput > secretNumber) {
      alert("Your guess was too high.");
    } else if (userInput < secretNumber) {
      alert("Your guess was too low.");
    } else {
      alert("Congratulations! You successfully guessed the number.")
    break;
    }
}

console.log(secretNumber)




