/*
Part 1: Say Hello

1. Write a function called sayHello that takes one parameter called name and console.log a greeting (a string that says hello to that person).
2. Discuss with your partner, the difference between returning a value from a function vs. having a side effect. Which outcome is occurring in #1.
3. Now update that function to return that same greeting. Make sure you assign that returned value to a variable so you can access it again.
4. Try console logging your variable outside of the function.
5. Try console logging your name parameter outside of your function. What happens? Discuss with your partner why this might not work?


Part 2: Calculator

1. Write a function called tripler that one parameter (a number) and returns triple the value.
2. Create a function multiply that takes two numbers as inputs and returns their product.
3. Create a function divide that takes two numbers as inputs and returns the result of dividing the first by the second.
4. Create a function remainder that takes two numbers as inputs and returns the result of modulo the first by the second.
5. Using only the functions you wrote above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing by 2 and then finding the remainder of dividing that by 3.

Part 3: Cumulative Sum (as a function!)
You might remember this exercise from our Loops lesson, but now we're going to re-write it to accept some input.

1. Create a function called findCumulativeSum. It should take one parameter, an upperLimit.
2. The body of this function should look pretty similar to the code in our Loops exercise—a while loop that calculates the sum of all numbers from 0 to x. But this time instead of going up to 100 each time, you'll pass it your own upperLimit.
3. Try running your function with an upperLimit of 50.
4. Now try it with an upperLimit of 500.

*/

// Your name: Nyiema Bayfield
// Your partner's name: Jason Reed

// Part 1: Say Hello
/*
//1.
//function sayHello(name) {
//  console.log("Hi, " + name + "!");
//}

//3.
//function sayHello(name) {
//  var greeting = ("Hi, " + name + "!");
//  return greeting;
//}

//4.

//var name =("George");
//function sayHello(name) {
//  var greeting = ("Hi, " + name + "!");
//  return greeting;
//}
//console.log(greeting);  //get error message that greeting is
                        //not defined because greeting is not a global
                        //variable.  Thus its scope is limited and can only
                        //be accessed inside the sayHello function
//sayHello("George");

//5.
/*
function sayHello(name) {
  var greeting =("Hi, " + name + "!");
  return  greeting;
}
console.log(name);
*/




// Part 2: Calculator
//1.
function tripler(integer) {
  var intTripled = (integer * 3);
  return intTripled;
}

//2.
function multiply(number1, number2) {
  var num1MultipliedByNum2 = number1 * number2;
  return num1MultipliedByNum2;
}

//3.
function divide(number1, number2) {
  var resultOfDivision = number1 / number2;
  return resultOfDivision;
}

//4.
function remainder(number1, number2) {
  var remainderOfNum1ByNum2 = number1 % number2;
  return remainderOfNum1ByNum2;
}

//5.
tripler(5); //15
multiply(15, 12); //180
divide(180, 2); //90
remainder(90, 3) // 0


// Part 3: Cumulative Sum
function findCumulativeSum(upperLimit) {
  var sum, i;

  sum = 0;
  for (i = 1; sum <= upperLimit; i++) {
    sum = sum + i;

  }
  console.log(i);
}

findCumulativeSum(50);
findCumulativeSum(500);
findCumulativeSum(120);

