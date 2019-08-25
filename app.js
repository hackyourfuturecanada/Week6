// Q1 - Write a console.log statement saying "Hello World!" for each language that you know.
console.log("Merhaba Dunya");  // Turkish
console.log("Salam Dunya"); // Azerbaijani
console.log("Witaj świecie"); //Polish

// Q2 - Consider the following code: console.log('I'm awesome');
console.log("I'm awesome");

// Q3 - Declare a variable age and initialize it with an integer, using these exact steps:
let myAge;  // i
console.log("the value of age will be: 32"); // ii
console.log(myAge); // iii
myAge = 32; // iv
console.log("the value of age is " + myAge); // v
console.log(myAge); // vi

// Q4 - Declare a variable name and assign a string to it.
let newVar = "lemon"; 
console.log("the value of my string will be: lime"); // i
console.log(newVar); // ii
newVar = "lime"; // iii
console.log("the value of my string is " + newVar); // iv
console.log(newVar); // v

// Q5 - How do you round the number 7.25, to the nearest integer (i.e., whole number)?
let number = 7.25; // i
console.log(number); // ii
let roundedNumber=Math.round(number);// iii
console.log(roundedNumber);// iV
if(number > roundedNumber){ // v
    highestValue = number;
} else if(number == roundedNumber){
    console.log("number and rounded number is equal");
} else {
    highestValue = roundedNumber;
}
console.log(highestValue); // vi

// Q6 - Arrays
let cities = []; // i
console.log("My favorite cities: 'Denizli', 'Toronto', 'Dubai'."); // ii
console.log(cities); // iii
let myFavoriteAnimals = ["Dog", "Cat", "Shark"]; // iv
console.log(myFavoriteAnimals); // v
myFavoriteAnimals.push("Kitten"); // vi
console.log(myFavoriteAnimals); // vii

// Q7 - More strings: Let's consider the following string: let myString = "this is a test".
let myString = "this is a test";
console.log(myString); // i
let lengthMyString = myString.length; // ii
console.log(lengthMyString); // iii

// Q8 - If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
let x = 7; 
x = x % 3;
console.log(x); // i

let y = 35;
y = y % 6;
console.log(y); // ii

let z = 83;
z = z % 9;
console.log(z); // iii

// Q9 - Write a program to answer the following questions:

let datas = ["umit", 32 , "dog", 5]; // i
console.log(datas);
let compare = (6/0) === (10/0);
console.log(compare); // ii
console.log("6/0 equal infinite and 10/0 equal infinite. infinite equal infinite."); // iii

// Q10 - I’ve declared a multidimensional array (an array inside an array) -- see below. How can I access the third item’s second element? i.e. [2, 1] is the third element, and I want to access 1. Add a console.log statement accessing this item.
const grid = [[0, 1], [1, 1], [2, 1], [3, 1]];
console.log(grid[2][1]);

// Q11 - If I have a variable counter, and I want to increment it by 2, what are three ways I can do this? Add three console.log statements with the three different ways.
let counter = 0;
console.log("first method");
console.log(counter + 2);

console.log("second method");
counter += 2;
console.log(counter);

console.log("third method");
counter = counter + 2;
console.log(counter);

// Q12 - Here’s a profile about a cat for adoption. Create variables to hold information about this cat as shown on the profile. For example:
const name = 'Prince';
const bestFriend = 'Thomas';
const breed ='Domestik Shorthair';
const color ='Orange or Red Tabby';
const age = '1 year old';
const sex = 'Male';
const hair ='Short';
const info=['Neutered', 'Good with Kids', 'Shots Up to Date', 'Good with Cats'];
const myStory=['facebook', 'twitter', 'pinterest', 'email'];
const date='july 28,2018';

// Q13 - 13. Create two variables -- one to hold the names of the kittens and one to hold the names of the adult cats. Make sure to choose an appropriate data type to hold this information!
let kittens=['Kyle Meowry', 'Luna', 'Obi','Charlie', 'Raspberries'];
let adults=['Mezzo', 'Sabrina', 'josie'];