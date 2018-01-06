/*
Part 1: Booleans + Comparison Operators
Use the console to write an expression which compares two strings and produces a true value. 
Write an expression comparing two strings which produces a false value. 
Compare two strings with the same characters but different capitalization, are comparison's case sensitive?
Now, try comparing strings when one has extra spaces, and determine if comparison's are space sensitive. 
What about comparing the boolean false to a string of value 'false'? What does that tell you about the type-sensitivity of a comparison? (Perhaps try the same thing with an integer and a string which contains that same integer.)
Write an expression that compares two numbers using a comparison operator and evaluates to true? 
Keep the same operator, but change the values to make your statement evaluate to false.
Now keep the values and change to a new comparison operator to get it to evaluate to true again.

Part 2: Logical operators
Type each of the following line-by-line into the console. Make sure to click run after typing each line, but before you do, discuss with your partner if you think the line will evaluate to true or false. Some of these might surprise you!

!true 
!false 
!!false 
!!true 
!!"type coercion" 
!!"all strings are 'truthy' except for..." 
!!"" 
true && true 
true && false 
false && true 
false && false 
true || true 
true || false 
false || true 
false || false 
true && "what does this evaluate"
false && "and this?" 
true || "sigh, i'm not needed" 
false || "default value" 

Part 3: If/Else Conditionals
In this part of the exercise, we're going to practice our if/else conditions and see how different blocks of code are executed depending on what our variables hold. Given a certain numerical test grade, our program will  assign a letter grade and write an alert to let our user know how they did on their test.

First, create a variable testGrade that corresponds to a number score. Let's start with 91.
Also declare a variable called letterGrade, but for now you can leave this variable empty. Eventually we're going to want to assign this letterGrade to one of the following: A, B, C, D, or F, but we don't know which one yet.
Let's start simple, with a single if statement. Check if our testGrade falls into the range of 90 and 100 (inclusive). If it is, assign the letterGrade variable to an 'A'.
Then try expanding your statement and put in an 'else if' clause for each of the remaining letter grades, with a B corresponding to 80 - 90, C to 70 - 80, etc...
Log your letterGrade to the console to check that your program is working. It should print a 'A' right now if your number score is still 91. Good work!
Now, let's add an alert message to each block to tell the user their score and a congratulations (or perhaps a word of encouragement if they didn't do so well!{{)
Although you've added lots of alerts, when you click run, only one should pop up.
Before we continue go up to the beginning of your Part 3 code and play around with changing the score to maybe a 73 or a 45. What happens to letterGrade and your alert?

Bonus: If you want to start getting some practice with logical operators, assign a variable at the top called completed and assign it to false. Try splitting the statement that assigns the letter grade of F into two different clauses: one for if their letter grade is below 60 and they completed the assignment, and a different one for below 60 and did not complete it.

Part 4: Choose Your Own Adventure
Create a "choose your own adventure" game. Create your if/ else conditional statements to branch your story line into a few different directions, and ask your partner to play! (Bonus: Perhaps you even ask your partner to give some input while they're in the middle of your story, using a prompt() or two.)
*/

// Your name: Nyiema Bayfield
// Your partners name: Luis Robles

// Part 1: Booleans + Comparison Operators

//1.
var string1 = "hi";
var string2 = "hello";
string1.length < string2.length  // returns true

//2.
string1.length > string2.length  // returns false

//3.
"hi" === "Hi"  // returns false

//4.
"Hello, World" === "Hello , World "  // returns false

//5.
5 < 4 === "false"  // returns false because a string can't be equal to a boolean value

//6.
5 === 5  // returns true

//7.
6 === 5  // returns false

//8.
6 >= 5  // returns true



// Part 2: Logical operators
//!true // (basically means not true - i think) returns value of false
//!false // basically means not false & returns calue of true
//!!false  // (not not false === true - i think) returns value of false
//!!true  // returns true
//!!"type coercion"  // returns true
//!!"all strings are 'truthy' except for..."  // returns true
//!!"" // returns false because the double bangs cancel each other
       //out and you are left with an empty string which is a falsy value
//true && true //returns true
//true && false //returns false
//false && true  //returns false
//false && false  //returns false
//true || true //returns true
//true || false //returns true
//false || true //returns true
//false || false //returns false
//true && "what does this evaluate" //returns "what does this evaluate"
//false && "and this?" // returns false
//true || "sigh, i'm not needed"  // returns true
//"sigh, i\'m not needed" || true  //returns "i\m not needed"
//false || "default value"  //returns "default value"

// Part 3: If/Else Conditionals
//1.
var testGrade;

//2.
var letterGrade;

//3. write if statement for condition of our testGrade falling into the range
  // of 90 and 100(inclusive), and if it is then assign the letterGrade variable
  //to an "A"
function scoreToGrade(testGrade) {
  if (testGrade > 100) {
    letterGrade = "A+";
    alert("Congratulations. You got an" + letterGrade);
  } else if (testGrade > 90 && testGrade <= 100) {
    letterGrade = "A";
    alert("Excellent work. You got an " + letterGrade);
  } else if (testGrade > 80 && testGrade <= 90) {
    letterGrade = "B";
    alert("Mediocre performance.  Try harder. You got a " + letterGrade);
  } else if (testGrade > 70 && testGrade <= 80) {
    letterGrade = "C";
    alert("You suck!!! You got a " + letterGrade + ". Don't come back to class.");
  } else if (testGrade > 60 && testGrade <= 70) {
    letterGrade = "D";
    alert("D is for detention. Hire a private tutor, NOW. You got a " + letterGrade);
  } else {
    letterGrade = "F";
    alert("Frankly, my dear you didn't give a damn about studying.  You got a " + letterGrade);
  }
console.log(letterGrade);
}

scoreToGrade(101);


// Part 4: Choose Your Own Adventure

alert("You are lost in the desert.");

var choice1 = prompt("Which direction do you want to go?");


if (choice1 === "East") {
  alert("You die of thirst and vultures eat your body!");
} else if (choice1 === "North") {
  alert("You discover an oasis and harem of 40 girls.");
} else if (choice1 === "South") {
  alert("You walk all the way to Antartica and make a new  home with the penguins.");
} else {
  alert("A genie appears and grants you three wishes.");
}





