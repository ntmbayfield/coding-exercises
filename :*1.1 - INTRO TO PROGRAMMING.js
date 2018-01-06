/*1.1 - INTRO TO PROGRAMMING

Instructions from your teacher:
If you need a quick review of any of the concepts that you come across in this exercise or just want to read more on how something works, it's a great habit to start reading documentation! Good Javascript docs can be found at: https://developer.mozilla.org/en-US/docs/Web

Part 1: Working with numbers + operators
A. Try out some of the following in your REPL console. If you don't remember how something works, look it up. (Hint: For that percentage sign, you'll get better search results if you look up 'modulo'!)
- 2 + 3
- 3 * 5 + 4
- 3 * (5 + 4)
- -300 / 2.57
- 25 % 6
- 4 ** 3

B. Calculate how many seconds old you are.

C. How can you tell whether a number is even or odd? (Hint: One good way would be to use one of the operators we just practiced above!)

*** In case you and your partner haven't switch driver and navigator roles yet, this might be a great time to do so! ***

Part 2: Working With Strings
A.  Play around with how strings are formatted, and see how they respond to the following:
"hello world"
'hello world'
"hello world" + 5
5 + "hello world"
"hello " + "world"
"hello" * 5

Part 3: Typeof
A. Practice checking the data type for the following:
5
5.0
'5'
'hello world'
'hello world' + 1
('hello world' + 1)

B. Discuss with your partner: Did any of those answers surprise you? Discuss why those data types evaluate the way they do. Not sure why? Look it up! (Here's a good resource for understanding that last one: https://codeburst.io/javascript-quickie-what-is-type-coercion-74f19df6d16f)

Part 4: Alerts, Prompts, + Console Logs
A. Take a chance to send alerts to prompts back and forth to your partner. What happens when you put your message in a console.log rather than an alert?

B. If you're feeling brave, try using prompt to capture your partner's name in a variable. Then log it to the console!
*/

// Write you and your partners name here so we can keep
// track of who is pairing together.
// You: Nyiema Bayfield
// Your partner: Jason Reed


// Part 1: Working with numbers + operators
//    Use the instructions on the right side for the complete
//    prompts. After you enter each line of code make sure to
//    click the run button to test it out.

// A. Practice using arithmetic operators.

//2 + 3 = 5
//3 * 5 + 4 = 19
//3 * (5 + 4) = 27
//-300 / 2.57 = -116.731
//25 % 6 = 1
//4 ** 3 = 64 // 4 * 4 * 4 or 4 to the 3rd power



// B. Calculate how many seconds old you are.
//age = 36-years 5-months 17-days 17-hours 31 minutes
//var myYears = 36 * 365 * 24 * 60 * 60;
              //36years * 365days * 24hours * 60minutes * 60secs

//var myMonths = 5 * 31 * 24 * 60 * 60;
              //5months * 31 days * 24 hours * 60minutes * 60secs

//var myDays = 17 * 24 * 60 * 60;
             //17days * 24hours * 60 minutes * 60secs

//var myHours = 17 * 60 * 60;
              //17hours * 60 minutes * 60secs

//var myMinutes = 31 * 60;
              //31 minutes * 60secs

//var myAge = myYears + myMonths + myDays + myHours + myMinutes;
//console.log(myAge);
//myAge = 1,150,219,860 seconds old



// C. Determine if a number is even or odd.
var number;

function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log(number + "  is even.");
  } else {
    console.log(number +  " is odd.");
  }
}

oddOrEven(7);
oddOrEven(4);


// Part 2: Working With Strings
// A. Practice how strings respond to those same operators
"hello world" // = "hello world"
'hello world' // = 'hello world'
"hello world" + 5 // = "hello world5"
5 + "hello world" // = "5hello world"
"hello" + "world"  // = "helloworld"
"hello" * 5 // = Nan (Not A Number)



// Part 3: Typeof
// A. Practice checking data types
typeof(5) // = 'number
typeof(5.0); // = 'number'
typeof('5'); // = 'string'
typeof('hello world'); // = 'string'
typeof('hello world' + 1); // = 'string'
typeof(('hello world' + 1)); // = 'string'



// B. Share what surprised you and your partner most.
// (You can answer discussion questions by entering '//'
// before your lines and making it a comment.)

//Type coercion was most surprising to us.  For example, how typeof('hello world' + 1) is a
//string.  This is because we can't add 1, the number, to "hello world", the string.
//So it changes the number 1, into a string "1" and then adds it to "hello world."
//So get "hello world" + "1" which is equal to "hello world1"



// Part 4: Alerts, prompts, + console logs
// A. Send alerts + console logs
alert("hi partner"); // generates a pop-up box containing the message "hi partner"
prompt("how are you feeling today?"); //generates a pop-up box displaying the message
                                      //"how are you feeling today?" and has an empty text box for
                                      //the user to input their response to that question
console.log("partnersName"); // logs the value assigned to a variable to the console
console.log("Nyiema"); // logs the string "Nyiema" to the console
console.log



// B. Prompt your partner's name and print to the console.

var partnersName;  // create variable "partnersName" and set its value to undefined

alert("Hi partner!");  //generates a pop-up box containing the message "Hi partner!"
partnersName = prompt("What's your name?");  //sets value of partnersName to equal the
                                             //response input for prompt("What's your name?")

                                             //generates a pop-up box displaying the message
                                             //"What's your name?" and has empty text box for
                                             //user to input a response
console.log(partnersName);                   //logs the value assigned to partnersName to
                                             //the console


