/*
Part 1: Making an Object
Practice creating a new object and giving it attributes.

Instantiate a new object assigned to the variable `favoriteBook`.
Add the attribute `title` to your book object using bracket notation and give it the title of your favorite book.
Now, using dot notation, give your object an `author` attribute and assign it to the author of that book.
Try putting a few more attributes into your book object, such as description, alreadyRead, rating, or bookReviews. See if you can make you object’s values include lots of different data types—not just strings, but numbers, booleans, and arrays too!
Practice how to access items in your object by logging the author’s name to the console.
Now practice your string concatenation (or string interpolation if you want to get fancy!) and console.log the statement: “My favorite book is <insert your fav book name here>!”

Part 2: Creating an Array of Objects
Great, now we have one object that represents a favorite book. But what if we want an array that contains many books? (Like a library might want if they had a catalog of all of the book your could check out!)

Create an empty array called books.
Now let’s add our favoriteBook object that we made above into the 0th index of the book array. Remember array’s can use bracket notation too! Or you have the option of using a method.
Console.log your books array to make sure your favoriteBook object is in there.
Now add a few more objects of other books. You could do it the same way we did above, where you create an object assigned to a variable and then add that variable into the array. Or if you want to challenge yourself with practicing another way, you could do it without the variable intermediate.
What does the books array look like now? Try logging it to the console. How could we find out how many items are in our array?

Part 3: Iterating Over an Array of Objects
Say we’re a really good speed reader, and now we want to iterate over each book in our books array and both print out the title/author as well as mark our alreadyRead attribute as true (if it wasn’t already).

We’re going to use a special type of `for` loop in order to do this — called `for… in`. Start by taking a look at the docs on this loop at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Now create a for…in loop to iterate over each item in books.
Practice accessing the title of an object using dot notation, and console.log the title of whichever book your iterating over.
Then practice how to update an attribute in an object by accessing the alreadyRead attribute and reassigning it to true. If you want a challenge, try putting your reassignment statement from step 4 into an if/else statement. (Only if you’re alreadyRead attribute is false, then assign it to true.)
Still within your loop console.log your alreadyRead attribute, so we can make sure it changed.
Now run your loop, does it print out the titles of your books along with their alreadyRead status?

Part 4: Bonus Challenge (Optional)
Write a function that creates a new object in the books array for you. It should take quite a few parameters (as many parameters as the number of attributes that any one particular object is expected to have—so perhaps your parameters are called title, author, alreadyRead, etc…).
*/

 // Your name:Nyiema Bayfield
// Your partners name:

// Part 1: Making an Object
var favoriteBook = {};

favoriteBook["title"] = "The Fifth Profession";
favoriteBook.author = "David Morrell";
favoriteBook.alreadyRead = false;
favoriteBook["rating"] = 9.5;
favoriteBook.booksBySameAuthor = ["Rambo", "Rambo Strikes Back", "The Sixth Profession"];

console.log(favoriteBook);

console.log(favoriteBook["author"]);
console.log(favoriteBook.author);

console.log("My favorite book is " + favoriteBook.title + " by " + favoriteBook["author"] + " who also wrote " + favoriteBook["booksBySameAuthor"] + ".");




// Part 2: Creating an Array of Objects
var books = [];
books.push(favoriteBook);
console.log(books);

var secondFavoriteBook = {};
secondFavoriteBook.author = "Sidney Sheldon";
secondFavoriteBook.title = "I Dream of Jeanie";
secondFavoriteBook.bySameAuthor = "Hart to Hart";

var thirdFavoriteBook = {
  author: "Dr. Suess",
  title: "The Cat In The Hat",
  bySameAuthor: "Green Eggs & Ham",
}

books.push(secondFavoriteBook);
books.push(thirdFavoriteBook);

console.log(books);

books.length;
console.log(books.length);

// Part 3: Iterating Over an Array of Objects
//2.
for (var i in books) {
  console.log(books[i]);
}

//3.
for (var i in books) {
  console.log(books[i].title);
}

console.log[books];
//4.

for (var i in books) {
  if (books[i].alreadyRead === false) {
    books[i].alreadyRead = true;
  }
console.log(books[i].alreadyRead);
}

//5.
for (var i in books) {
  console.log(books[i].title);
    if (books[i].alreadyRead === false) {
      books[i].alreadyRead = true;
  } else if (books[i].alreadyRead === undefined) {
      books[i].alreadyRead = "not read yet";
  }
  console.log(books[i].alreadyRead);
}





// Part 4: Bonus Challenge (Optional)
function addNewBookToBooksArray(title, author, alreadyRead, rating, booksBySameAuthor) {
  var newBook = {};
    newBook.title = title;
    newBook.author = author;
    newBook.alreadyRead = alreadyRead;
    newBook.rating = rating;
    newBook.booksBySameAuthor = booksBySameAuthor;

  books.push(newBook);
}

addNewBookToBooksArray("The Little Prince", "St. Exupery", true, 6, "none");

console.log(books);