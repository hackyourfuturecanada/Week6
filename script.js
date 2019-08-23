
//1.Write a console.log statement saying "Hello World!" for each language that you know.
console.log('Hello World!'); // English
console.log('Merhaba Dunya!'); //Turkish
console.log('Marhaba Dunia!') //Zazaki


//2.Consider the following code:
console.log('I\'m awesome');

//3.Declare a variable age and initialize it with an integer, using these exact steps:
let x;
console.log('the value of age will be: 30');
console.log(x);
x=30;
console.log('the value of age will be: 30');
console.log(x);

//4.Declare a variable name and assign a string to it.

let y ='butterfly';
console.log('the value of my string will be:bird');
console.log(y);
y='bird';
console.log('the value of my string will be:bird');
console.log(y);


//5.How do you round the number 7.25, to the nearest integer (i.e., whole number)?

let number=7.25;
console.log(number);// prints 7.25

let roundedNumber=Math.round(number);
console.log(number); // prints 7

if(roundedNumber < number){
  result=roundedNumber;
}
else{
  result=number;
}
console.log(result);


//6.Arrays

let colors=[];
console.log('the value of my array is: blue, yellow, green, black');
console.log(colors);

let myFavoriteAnimals=['rabbit', 'cat', 'bird', 'dog'];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push('kitten');
console.log(myFavoriteAnimals);


//7.More strings: Let's consider the following string: let myString = "this is a test".

let myString = "this is a test";
console.log(myString);
console.log(myString.length);


//8.If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

x = 7;
x = x % 3;
console.log(x);

y=15;
y=y % 5;
console.log('remainer is 0 from 15 /5');

z=20;
z=z % 6;
console.log('remainer is 2 from 20 /6');



//9.Write a program to answer the following questions:

let numberString=[1,2,3,'hamza', 'yunus',true,];
console.log(numberString);
console.log('we can store multiple types in an array with their special signs ex: string must be between \'\' or \"\".')

console.log(6/0===10/0);
console.log('3 equals compare two values if they are same values and types.')



//10.I’ve declared a multidimensional array (an array inside an array) -- see below. How can I access the third item’s second element? i.e. [2, 1] is the third element, and I want to access 1. Add a console.log statement accessing this item.

const grid = [[0, 1], [1, 1], [2, 1], [3, 1]];
console.log(grid[2][1]);



//11.If I have a variable counter, and I want to increment it by 2, what are three ways I can do this? Add three console.log statements with the three different ways.

let counter = 0;
console.log('first method');
console.log(counter + 2);


counter=+2;
console.log('Second method');
console.log(counter);


counter+=2;
console.log('third method');


//12. Here’s a profile about a cat for adoption. Create variables to hold information about this cat as shown on the profile. For example:

const name = 'Prince';
const bestFriend = 'Thomas';
const breed ='Domestik Shorthair';
const color ='Orange or Red Tabby';
const age = '1 year old';
const sex = 'Male';
const hair ='Short';
const info=['Neutered', 'Good with Kids', 'Shots Up to Date', 'Good with Cats'];
const aboutStory=['facebook', 'twitter', 'pinterest', 'email'];
const date='july 28,2018';
console.log(name+' is '+info+'his best friend is '+bestFriend+' He is '+age+' and has '+ hair+ 'hair');


//13.Create two variables -- one to hold the names of the kittens and one to hold the names of the adult cats. Make sure to choose an appropriate data type to hold this information!

let kittens=['Kyle Meowry', 'Luna', 'Obi','Charlie', 'Raspberries'];
let adults=['Mezzo', 'Sabrina', 'josie'];