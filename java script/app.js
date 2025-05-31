//1. strings
console.log("dadadadda12456612@");
console.log("2345$$4" + "shgduyte");
// space also take as the count as the string
console.log("varshini " + " ramesh");
// acces the specific character in a string
console.log("dadadadda12456612"[16]);
console.log("dadadadda12456612@".length);
// last letter in string
varsh = "mom i am back";
console.log(varsh[varsh.length - 1]);
// 2.numbers
4 + 5;
7 - 8;
12 * 3;
12 / 3;
12 % 3;
// 3.booleans
// null- intentinally and undefinded-
string = null;

// variables
// use the let to create the variables
let userEmail = "var@gmail.com";
let age = 10;
let name = "varshini";
age = 20 + 2;
console.log(age);

// Const key word is used for constant values

const points = 200;
console.log(points);

// task 1 currency converter
let usd = 1200;
let aud = usd * 1.5;
console.log(aud);

// comparasion operator ==,===,!=,<=,>=,<,>
let comparasion = "4" == 4;
console.log(comparasion);

let comparasionthree = "4" === 4;
console.log(comparasionthree);

// if and else statments
let hasMembership = false;
let signedIn = true;
if (hasMembership === true) {
  console.log("show user video");
} else if (signedIn === true) {
  console.log("upgrade to memebership");
} else {
  console.log("tell the user to log in");
}

// task 2 age example
let age1 = 19;

if (age1 > 18) {
  console.log("you are enter to the club!");
} else if (age2 === 18) {
  console.log("come in but dont drink!");
} else {
  console.log("sorry you are not allowed!");
}

// task3
let age2 = 17;

if (age2 > 18) {
  console.log(`you are ${age2} enter to the club!`);
} else if (age2 === 18) {
  console.log("come in but dont drink!");
} else {
  console.log(`sorry you are ${age2} not allowed!`);
}

// logical operators && || !
// and operator
let age3 = 14;
let hasId = true;

if (age3 >= 18 && hasId === true) {
  console.log("welcome");
} else {
  console.log("not allowed");
}
// or operator
let age4 = 14;
let hasIds = true;

if (age4 >= 18 || hasIds) {
  console.log("welcome");
} else {
  console.log("not allowed");
}
// truthy values
if ("null") {
  console.log("true");
}
// ternary operator (without using if else and else if)
let isRaining = true;

isRaining ? console.log("it is raining") : console.log("it is not raining");
let agechild = 18;
let str = agechild >= 18 ? "you are enter" : "your are not enter";
console.log(str);

// task 4
let loggedIn = true;
let hasmembership = true;

let loggIn = loggedIn && hasmembership ? "show video" : "dont show video";
console.log(loggIn);

// loops
let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}
console.log("while loop is finished");
// for loop
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
//task 5
let i = 1;
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} Frontend`);
  } else if (i / 5 === 0) {
    console.log(`${i} ASAP Frontend`);
  } else {
    console.log(`${i} ASAP`);
  }
  console.log(i);
}
// task 6
let example = "ASAP Frontend";
for (let i = 0; i < example.length; i++) {
  console.log(example[i]);
}
// functions

console.log("hello,varshini");
console.log("hello deeps");
console.log("hello niru");
//  to avoid this dry
// function declaration
function greetuser() {
  console.log("hello varshini");
}
// function call
greetuser();

function user(name, time) {
  console.log(`good ${time},${name}`);
}
user("varshini", "morning");
user("deeps", "nignt");
//  return

// regular function
function sum(num1, num2) {
  return num1 + num2;
  return num1 * num2;
}
console.log(sum(10, 35));

function square(number) {
  return number * number;
}
console.log(square(10));

// task 7
function convertUsdtoAud(usd) {
  return usd * 1.5;
}
console.log(convertUsdtoAud(1000));
console.log(convertUsdtoAud(500));
console.log(convertUsdtoAud(200));

// arrow function
const convertUsdtoAud1 = (usd) => {
  return usd * 1.5;
};
console.log(convertUsdtoAud1(1000));

// arrays
let item1 = "apples";
let item2 = "bannanas";
let item3 = "eggs";
let item4 = "milk";

let array = ["apples", "bannanas", "eggs", "milk"];
console.log(array[0]);
console.log(array[array.length - 1]);

// add the another element in array we use .push()
// mutating methods
array.push("chease");
console.log(array);
array.push("bread");
console.log(array);

// .filter() remove the element based on the condition satisfy
// non mutating method
let filteredarray = array.filter((element) => {
  console.log(element);
  return true;
});
console.log(filteredarray);

// use the if in filter
let arraynumber = [5, 13, 78, 35, 654];
let filtered = arraynumber.filter((element) => element >= 20);
console.log(filtered);

// task 8
let arraypeople = [18, 20, 16, 15, 21];
let people = arraypeople.filter((element) => element < 18);
let people2 = arraypeople.filter((element) => element >= 18);
console.log(people, people2);

// use the for loop in the array
// task 9
let adult = [];
for (let i = 0; i < arraypeople.length; i++) {
  if (arraypeople[i] >= 18) {
    adult.push(arraypeople[i]);
  }
}
console.log(adult);

// .map() non mutating method like filter
let arr = [1, 2, 3, "var", "shi", "ni"];
let mapped = arr.map((element) => "hello world");
console.log(mapped);

// task 10
let currency = [10, 20, 30, 40];
let audollers = [];
for (let i = 0; i < currency.length; i++) {
  audollers.push(currency[i] * 1.5);
  console.log(audollers);
}
let aucurrency = currency.map((element) => element * 1.5);
console.log(aucurrency);

// objects
// all the arrays numbers boolean strings can be stored in obnect they are so powerfull
let client = [
  {
    // properties we are going to create like email,password,name
    email: "exm@gmail.com",
    password: "test1234",
    name: "gthj",
    discord: "exampledoscord",
    subscription: "VIP++",
    lesson: [1, 3, 4, 6, 7],
  },
  {
    email: "ehyg@gmail.com",
    password: "tjugst1234",
    name: "gthjnshiusgs",
    discord: "examplekkkkkkkdoscord",
    subscription: "VIP",
  },
];
console.log(client[0].lesson.map((element) => element * 1.5));

// task 11 its not a better practice
function signup(
  email1,
  password1,
  names1,
  discard1,
  subscription1,
  lessoncompleted1
) {
  let varsh = {
    email1: email1,
    password1: password1,
    names1: names1,
    discord1: discard1,
    lessoncompleted1: lessoncompleted1,
  };
  client.push(varsh);
  console.log(client);
}
// another way to do this
signup({
  email1:"nirug@gmail.com",
  password1:"gthg123",
  names1:"varshu",
  discard1: "hyahy",
  subscription1: "v+++",
  lessoncompleted1: [2, 3, 4, 4]
})

// DOM Documented object model
//1st method target the element in webpage
document.querySelector("h1")
// change content in html
// document.querySelector('h1').innerHTML +="hello"
// 2nd method
// console.log(document.getElementById('heading'))
// change css
document.querySelector('h1').style.backgroundColor="red"
document.querySelector('h1').style.color="white"
document.querySelector('h1').style.fontSize="38px"

function changebuttontogreen() {
document.querySelector('button').style.backgroundColor='green'
  // console.log("change button to green")
  }

// change class name
function toggleSidebar(){
  document.querySelector('body').classList.toggle("open")
}