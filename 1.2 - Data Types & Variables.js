/*Part 1: Variables
A. Before you try each of these in the console on the left, discuss with your partner which of the following are valid variable names, which are valid but not best convention, and which are not valid. Then test them out! How many did you get right?

myVariable
variable
this var
0_variable_0
_myVariable
TheBestVariable
#1variable
this_snake_case_variable
aCamelCaseVariable
var
variable1
1variable

B. Test out declaring variables.

First try evaluating the following line-by-line:
my_variable
var my_variable
my_variable

Pause and discuss with your partner, why the 1st and 3rd line result in different outcomes. They state the exactly same thing, but what has changed?

Now try these:
typeof my_variable
my_variable = "I'm a string value!"
typeof my_variable

What is different from how the 4th and 6th line are evaluated? Why?

Try reassigning my_variable again one more time to a number of your choice. What does typeof give you now? What is it about JavaScript that allows us to do this?

C. Practice reassigning variables after they've been declared. Try the following lines in your console. Make sure to click run after typing each line, that way you know exactly what outcome is due to which line. Talk with your partner about what you expect to print to the console before clicking run each time. Did any of the outcomes surprise you?

var x;
x;
x = 1;
x + 4;
x;
x = 5;
3 = x;
var y = 2;
x + y + 7;
y = x + 7;

Part 2: More Numbers Practice
 A. Let's say you are out to lunch with a couple friends and want to write a program to help you figure out how to split the check. Complete the following steps below in your console. Remember good variable naming conventions when you decide on your variable names!

Declare a variable that represents the cost of food (before tip and tax). Assign it to $32.50.
Now bind a variable to the value of the California tax rate—8.5% (hint: in programming we often state percentages in decimal form. i.e. 5% as 0.05)
Then, create a variable for the percentage you'd like to tip.
Lastly, assign a variable for the number of people you were out at lunch with.
Now, compute the total that each person should pay using all of your variables.

Part 3: More Strings Practice
A. Interview your partner and write a mini bio for them! Declare at least 10 variables such as 'name', 'age', 'birthday', 'hometown', 'occupation', 'favoriteFood', 'bestFriend', etc (add a few of your own and make it interesting), then set the value of each of these variables equal to strings containing the appropriate information about them.

Then using string concatenation to connect your variables together (along with whatever other strings you need to include to make sure your story makes sense!), and craft a short paragraph of their bio. Console.log the outcome and read it to your partner.

// Part 1: Variables
//    After you enter each line of code make sure to click
//    run to test it out.

// A. Variable naming convention
var myVariable;  //valid
var variable;    //valid but not a good idea, because very vague and could be confusing
// var this var;    //invalid because has a space in it
//var 0_variable_0; //invalid because starts with a number
var _myVariable;  //valid, but not good because doesn't follow camelCase
var TheBestVariable; //valid, but not good because doesn't follow camel case
// var #1variable; //invalid, because starts with "#"
var this_snake_case_variable; //valid but not good because follows snake_case not camelCase
var aCamelCaseVariable; //valid and good
//var var; //invalid because uses keyword as variable name
var variable1; //valid, but not good
//var 1variable; //invalid because starts with a number

// B. Test out declaring variables
my_variable;  //returns error message
var my_variable;  //declares variable but doesn't assign it a value
my_variable;  //returns undefined as the value of my_variable instead of error message because in

typeof my_variable;  //returns undefined
my_variable = "I'm a string value!";
typeof my_variable;


// C. Practice reassigning variables

var x; // undefined
x; //undefined
x = 1; // 1
x + 4; // 5
x; // 1
x = 5; // 5
// 3 = x; // because left hand side assignment, therefore skip this line
var y = 2; // x still equals 5
x + y + 7; // 14  since (x+y+7)===(5+2+7)
y = x + 7; // 12 since y = 5 + 7


// Part 2: More Numbers Practice
// A. Calculate your check
//1.
var costOfFood = 32.50;

//2.
var tax = costOfFood * 0.085;
var tip = costOfFood * 0.18;

var totalCostOfMeal = costOfFood + tax + tip;
var numberOfPeopleAtLunch = 4;

var totalEachPersonShouldPay = totalCostOfMeal / numberOfPeopleAtLunch



// Part 3: Interview your partner
// A.
var firstName = "George";
var middleName = "Micheal";
var lastName = "Stewart";
var fullName = firstName + " " + middleName + " " + lastName
var age = 34;
var numberOfSiblings = 4;
var favColor = "purple";
var allergies = "none";
var siblingNames = ["Glen", "Stevie", "Tamara", "Tiffany"];
var maritalStatus = "divorced";
var favSportsTeam ="The Lakers";
var dreamJob = "teacher";
var hometown = "Culver City";
var lengthOfTimeLivedInTheBayAreaInMonths = 8;

// B. PARTNER BIO
//"My partner is " + fullName + "."  === `My partner is ${fullName}.`
//"He is " + age + " years-old and is " + maritalStatus + "."
//"His dream job is to be a " + dreamJob + "."
//"His favorite color is " + favColor + " and his favorite sports team is " + favSportsTeam + "."
//"He grew up in " + hometown + " and moved to the Bay Area " + lengthOfTimeLivedInTheBayAreaInMonths + " months ago."
//"My partner has " + numberOfSiblings + " siblings. And their names are: " +  siblingNames + "."


//template literals are a new cool thing.  instead of having to do string interpolation, like below:

//var name = 'Snickers';
//var age = 2;
//var sentence = 'My dog ' + name + ' is ' + age * 7 + ' years old.';

//which can  be problematic if you forget a plus sign or to close one of the quotation marks.
//NOW with template literals, you can drop your variables directly into a sentence.
// ex:
//const name = 'Snickers';
//const age = 2;
//const sentence = `My dog ${name} is ${age * 7} years old.'`;
//console.log(sentence);

//the format for template literals is to use back ticks"`" at the start and end of the sentence. And to put a "${variable_name}"
``




// Part 4: Booleans
// A.
//The different ways of getting a variable to evaluate to
//false vs. true involve using comparison operators, such
// as (>, <, >=, <=, ===, !==)
var x = 2;

// x > 5;  // evaluates to false
//x < 5;   // evaluates to true
//x >= 5;  // evaluates to false
//x <= 5;  //evaluates to true
//x === 2;  // evaluates to true
//x !== 2;  // evaluates to false


// B.
//Booleans are important because they allow us to return a
//simple true or false and can be useful when comparing
//truthy and falsy values.





B. Swap and whomever was previously interviewed is now the interviewee. This time instead of concatenation, experiment with string interpolation (also called template literals). We didn't cover this advanced string formatting technique in class, but take a look at the following docs and try it out: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Part 4: Booleans
A. Practice how many different ways you can get a variable to evaluate to false vs. true.
B. Discuss with your partner why booleans might be important in the world of programming. It may not be immediately apparent, but we'll be working with them lots more later this week, so its good to start getting familiar with them now!
*/

