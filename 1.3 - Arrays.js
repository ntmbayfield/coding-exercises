/*
Part 1: Adding to an Array Using Bracket Notation
Arrays are great for storing items that need to start in order—like recipes! You don't want to put your cookie dough in the over before you've added eggs and butter, or its not going to work so well. Arrays keep data in the same order it was assigned when you created or added to it. It only changes when you explicitly update the array.

Instantiate a new empty array and assign it to a variable called recipe.

Add the steps to make your favorite meal to this array. Use bracket notation to add each step to the proper index in your array.

Access the first step of your recipe using bracket notation and log it to the console.

Create a new variable called lastStep and assign to it a number which represents the index of the last item of your array.

Now, access the last step of your recipe using this lastStep variable.


Part 2: Adding + Removing From an Array Using Methods
Methods can do lots of the work for us, and are helpful when your array starts getting long, especially if you're not sure just how many items are going to be in your array at any given time.

Instantiate a new array and save it to the variable myToDos.

Add five todo items to your new list. This time don’t use bracket notation, but rather find a method that might do the job.

How can we find the length of the array at this point?

Remove one goal from the end of your array (again, using a method!) and bind it to a variable called tomorrowsActivity.

What if this list was reallyyyy long and you only wanted to display the top three. What method could you use to console.log only the first three items in your todo list? You don’t need to permanently remove them from your array, just view them.

Say you complete items 2 + 3 in your list, how might you take those out of your list entirely? Save them to a variable called completedToDos.

Now what’s the length of your myToDos array?

Try logging both completedToDos and myToDos to your console. Did they contain what you thought they were going to contain?

Part 3: Find + Replace by Splitting/Joining Arrays
We have a sentence created for you assigned to the variable badExcuse. But you're too responsible for that excuse to be true. Must have been someone else! Let's find and replace a few words from this string to make it more accurate.

1. Before we replace some of these words, wouldn’t it be nice if we could split this sentence into an array of words, that way we can replace any one word with another quickly and painlessly. What method could we use to do that? (Hint: You may need to tell this method what to split the string on—also called a delimiter.)

2. Log your new array to the console, along with its length. We’ll know if we split it correctly if our length is equal to 12.

3. Now let’s replace a few words. First off, replace ‘I’ with someone else’s name. Remember our bracket notation to replace the correct index.

4. What else could we replace? Maybe the “my” with a "his/her/its" so that our sentence can still be grammatically correct. And maybe even “dog” cause not everyone has a dog as a pet. Perhaps your turtle or ferret got hungry instead.

5. Once you’re satisfied with your new sentence, let’s mash it all back together into a string again. Find and use the method for this. Again, don’t forget your delimiter. If you join it without one, you’ll just have one extra long smushed up word with no spaces in between.

6. Discuss with your partner why you may need to split and recombine strings to/from arrays in the real world? Why might this be useful?
*/


  // Your name: Nyiema Bayfield
// Your partners name: Luis Robles

// Part 1: Adding to an Array Using Bracket Notation
var recipe = [];
recipe = ["pour two eggs to empty bowl", "add 1 cup of flour", "add one cup of milk", "add 1tsp of vanilla extract", "add 10 grams of blueberries", "add 1 tsp of olive oil", "stir all ingredients together for 1 minute", "cook on griddle"];
console.log(recipe[0]);
console.log(recipe.length);
var lastStep = recipe[7];
console.log(lastStep);




// Part 2: Adding + Removing From an Array Using Methods

//1.
var myToDos = [];

//2.
myToDos = ["laundry", "walk my dogs", "load the dishwasher", "make my bed"]
myToDos.push("shower");
console.log(myToDos); // myToDos = ["laundry", "walk my dogs", "load the dishwasher", "make my bed", "shower"]

//3.
console.log(myToDos.length);

//4.
var tomorrowsActivity = myToDos.pop();
console.log(myToDos);
console.log(tomorrowsActivity);

//5.
var topThree = myToDos.slice(0, 3);
console.log(topThree);  //topThree = ['laundry', 'walk my dogs', 'load the dishwasher']

//6.
var completedToDos = myToDos.splice(1, 2);
console.log(completedToDos); //completedToDos = ['walk my dogs', 'load the dishwasher']

//7.
console.log(myToDos.length); //myToDos.length = 2

//8.
console.log(completedToDos);
console.log(myToDos);



// Part 3: Find + Replace by Splitting/Joining Arrays

var badExcuse = "I’m sorry I couldn’t complete my assignment, the dog ate my homework!";

//1.
//Use the .split() method to break the sentence into an array composed of the individual words contained in it

//2.
var partsOfBadExcuse = [];
partsOfBadExcuse = badExcuse.split(" ");
console.log(partsOfBadExcuse);
console.log(partsOfBadExcuse.length);

//3.
partsOfBadExcuse[2] = "Antoinette";

//4.
partsOfBadExcuse[5] = "her";
partsOfBadExcuse[10] = "her";
partsOfBadExcuse[8] = "potbelly pig";

//5.
var newBadExcuse = partsOfBadExcuse.join(" ");
console.log(newBadExcuse);

//6.
//Breaking a list up into individual items.  grouping like items together.
//to be able to count the items or parts in a phrase, or list.