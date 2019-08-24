/*
Aziz Omar
Week6 Assignment
*/

//1.
console.log("Question 1. ")
	console.log("Hello Wolrd !");
	console.log("Silav Dunay !");
	console.log("Salam Alikum !");

//2.
console.log("Question 2. ")
console.log('I\'m awesome');

//3.
console.log("Question 3. ")
let age;
console.log("The value of age should be undefined at this point,because it has not been assigned a value,thus, JS assigns the primitve value undefined to it ")
console.log("The value of age is : " + age);
age = 22;
console.log("The value of age should be  2 " );
console.log("The value of age is "  + age);

//4. 
console.log("Question 4. ")

let name = "Tod";
console.log("I think the value of name should be 'Tod'");
console.log("The value of name  is " + name);
name = "Jon";
console.log("I think that the value of variable name is 'Jon ");
console.log(name);

//5.
console.log("Question 5. ")
let number = 7.25;
console.log(number);
let roundedNumber = Math.round(number);
console.log(roundedNumber);
// ternary operator 
/*let greaterValue = number > roundedNumber ? number : roundedNumber; */ 
// selection statment 
if(number > roundedNumber )
		greaterValue = number;
	else 
		greaterValue = roundedNumber;

console.log("Highest Value is : "+ greaterValue);

//6.
console.log("Question 6. ")
let stuff=[];
console.log("an array is collection of data, each item in the collection has a key called index ");
console.log("since an array is an object not a primitve date  type it should not have any default value assigned to it, I am expcetinga null or an error"); 
console.log(stuff);
let favAnimals = ["dog","coala","horse" ];
console.log(favAnimals);
favAnimals.push("kitten");
console.log(favAnimals);

//7.
console.log("Question 7. ")
 let myString = " this is a test ";
 console.log(myString);
 console.log(myString.length);

//8. 
console.log("Question 8. ")
console.log(" if the equation is x=x%3, the the value of x must be either 0,1 or 2" );
console.log("Modulus is an operator that returns the reminder of an operation");
console.log("if the dividend is not divisiable by the divisor, modules will return the reminder otherwise it returns zero");

//9.
console.log("Question 9. ")
let diffTypes = [true,"Able to drive",21,"fee",22.3];
let compare = 6/0==10/0;
console.log("It does compare the infinites " + compare);

//10.
console.log("Question 10. ")
const grid = [[0, 1], [1, 1], [2, 1], [3, 1]];
let item = grid[2][1];
console.log(item)

//11.
console.log("Question 11. ")
let counter = 0;
console.log("first method ");
counter += 2;
console.log(counter);

console.log("second method ");
counter = counter + 2;
console.log(counter);

console.log("Third method ");
counter++;
counter++;
console.log(counter);

//12. 
console.log("Question 12. ")
/* I believe there are different ways to store the object cat, 
one different way I would do is not creating any nest objects 
*/ 
let cat = {
	name:"Prince",
	bestFriendName:"Thomas",
	note: "Please adopt both of use",
	dob:"2018-07-28",
	facts:{
		breed: "Domestic shorthair",
		color:"Orange and Red Tabby",
		age :"1",
		petId:"991281",
		sex:"Male",
		hair:"short"
	},
	info:{
		isNeutered:true,
		isKidWithKids:true,
		areShotsUptoDate:true,
	},
}
console.log(cat);

//13.
console.log("Question 13. ")
let adultCats = [
"Mezzo",
"Sabrina",
"Josie",
 ]

let kittens= [
"Kyle Meowry",
	"Luna",
	"Obi",
	"Raspberris"
 ]