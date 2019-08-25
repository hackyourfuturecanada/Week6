//ELif Sude Yasar

// 1. Write a console.log statement saying "Hello World!" for each language that you know.
console.log('Merhaba Dunya'); //Turkish
console.log('Hello World'); //English
console.log('Hallo Welt'); //German

// 2. // Consider the following code:
// console.log('I'm awesome');
// Copy the code in your .js file and run it. You will see that you will get a SyntaxError. Find a solution for this error. Hint: read the error message carefully, it also gives an indication of where the problem is.

console.log('I\'m awesome');

// 3.Declare a variable age and initialize it with an integer, using these exact steps:
let age;
console.log("'the value of age will be: undefined'");
console.log(age);
age = 19;
console.log("'the value of age will be: 19'");
console.log(age);


//4.Declare a variable name and assign a string to it.

let name;
console.log("The value of name will be undefined because I didn't initialize it.")
console.log(name);
name = "Elif Sude Yasar";
console.log("The value of name will be Elif Sude Yasar")
console.log(name);


//5.How do you round the number 7.25, to the nearest integer (i.e., whole number)?

var number;
number = "7.25";
console.log(number);

var roundedNumber=Math.round(number);
console.log(roundedNumber);

let highest = Math.max(number, roundedNumber);
console.log(highest);


//6.Arrays

let animals;
console.log("The value of animals will be undefined");
console.log(animals);

let favAnimals = ["panda", "cat", "rabbit"];
console.log(favAnimals);
favAnimals.push("kitten");
console.log(favAnimals);


//7.More strings: Let's consider the following string: let myString = "this is a test".

let myString = "this is a test"
console.log(myString);
console.log(myString.length);

//8.If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?


var x = 7;
x = x % 3;
console.log(x);



var x = 7;
console.log(x % 3);


var x = 7;
var y = 3;
x = x % y;
console.log(x);

var x = 7;
var y = 3;
var result = x % y;
console.log(result);


//9.Write a program to answer the following questions:

let multiValue =["panda", 45 , "giraffe"];
console.log(multiValue);


let comparison = 6/0===10/0;
console.log("The result is infinite");
console.log(comparison);

let colors = ["blue", "red", "purple", 3, 4, 5];
console.log(colors);
console.log(colors.length);


//10. How can I access the third item’s second element? i.e.

const grid = [[0, 1], [1, 1], [2, 1], [3, 1]];
console.log(grid[2][1]);



//11.If I have a variable counter, and I want to increment it by 2, what are three ways I can do this? Add three console.log statements with the three different ways.

let counter = 0;
console.log('first method');
counter +=2;
console.log(counter);

console.log('second method');
counter = counter + 2;
console.log(counter);

console.log('third method');
counter++;
counter++;
console.log(counter);




// Question 12
const cat = {
  name: 'Prince',
  bestFriend: 'Thomas',
  breed: 'domestic shorthair',
  age: '1 year old',
  sex: 'male'
}
 console.log(cat);


//Question 13

let kittens = ["Kyle Meowry","Luna","Obi","Charlie","Raspberrries"];
 let adultCats = ["Mezzo","Sabrina","Josie"];

console.log(kittens, adultCats);
