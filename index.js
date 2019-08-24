/*1-Write a console.log statement saying "Hello World!" for each language that you know.*/
console.log('Halo, dunia!'); //Indoniasia
console.log('Ciao, mondo!'); //Italian
console.log('Hola, mundo!'); //Spanish

//2-onsider the following code://
console.log("I'm awesome");
//Declare a variable age and initialize it with an integer, using these exact steps://
var age;
console.log('The Value of Age will be: undefined');
console.log(age);
age= 28;
console.log('The Value of Age will be: 28');
console.log(age);
//4-Declare a variable name and assign a string to it.//
var name = 'Hamam Alsamel';
console.log('The Name will be: Hamam Alsamel');
console.log(name);
var x= name;
console.log('The Value of X will be: Hamam Alsamel');
console.log(x);
//5-How do you round the number 7.25, to the nearest integer (i.e., whole number)?
var number= 7.25;
console.log(number);
var z= 7;
console.log(z);
if (number>=z){
  console.log(number);
  var newvalue = number;
  console.log(newvalue);
}
//6- Arrays//

const list = ['','',''];
console.log('The array has no value becauswe its empty');
console.log(list);

const favouritanimal = ['Cat','Dog','Birds','elephant'];
console.log(favouritanimal);
favouritanimal.push('Kitten')
console.log(favouritanimal);

//7-More strings: Let's consider the following string: let myString = "this is a test".
let mystring= "This is a test";
console.log(mystring);
console.log(mystring.length);
console.log('the length of my string');

//8.If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

var x=7;
x = x%7;
console.log(x);
console.log( x % 7);
if (x%7===0){
  console.log("True");
}
else {
  console.log('False');
}

//9.Write a program to answer the following questions:
const arrays=['tomate', 5, 'botato'];
console.log(arrays);

var x=6;
var y=10;
if (x/0===y/0) {
  console.log('Infinities');
}

//10.I’ve declared a multidimensional array (an array inside an array) -- see below. How can I access the third item’s second element? i.e. [2, 1] is the third element, and I want to access 1. Add a console.log statement accessing this item.

const grid= [[0,1], [1,1], [2,1], [3,1]];
const item=  grid[2,2];
console.log(item[1]);

//11.If I have a variable counter, and I want to increment it by 2, what are three ways I can do this? Add three console.log statements with the three different ways.

let counter =0;
console.log('First Method');
counter=counter+2;
console.log(counter);
console.log('Second Method');
counter+=2;
console.log(counter);
console.log('Third Method');
counter++;
counter++;
console.log(counter);

//12.12. Here’s a profile about a cat for adoption. Create variables to hold information about this cat as shown on the profile. For example:

const namee = 'Prince';
const bestFriend = 'Thomas';
const breed = 'Domestic shorthair';
const color = 'Orange or red taby';
const agee ='One Year Old';
const sex ='Male'
const hair = 'Short';
const petID= '  ';

//13. Create two variables -- one to hold the names of the kittens and one to hold the names of the adult cats. Make sure to choose an appropriate data type to hold this information!

const kitten=['Kyle Meowry', 'Luna', 'Obi', 'Charlie', 'Raspheries'];
const adultcats= ['Mezzo', 'Sabrina', 'Josie'];
console.log(kitten);
console.log(adultcats);
