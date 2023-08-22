//to add an html code by JS
document.write("<h1>Elzero</h1>");
// to add css styles
//(document.querySelector) this to select the html tag
document.querySelector("h1").style.color = "red";

/*to add text in consol and edit it like css
(console.log() its to add any thing in consol)
--directive %c this to select the element in  the log*/
console.log(
  "%celzero %cweb %cschool",
  "font-size: 40px; color:red;",
  "font-size: 40px; color:green;",
  "font-size: 40px; background-color: blue;"
);

//(console.group("Group 1");)to  do group in consol
console.group("Group 1");
//(console.groupEnd("")) to end the group
console.groupEnd("");

//(console.table(["ad","as","af","ag","ax"]))to add tabel in consol
console.table(["ad", "as", "af", "ag", "ax"]);

// ---------------------------------------(data type)---------------------------------------

// --String
//   Number
//   Array = > Object
// - Object
//   Boolean

console.log(" Osama Mohamed "); // --String
console.log(typeof " Osama Mohamed "); // --String
console.log(typeof 5000); //   Number
console.log(typeof 5000.99); //   Number
console.log(typeof [10, 15, 17]); // - Object
console.log(typeof [" Os ", " Ah ", " Sa "]); // - Object
console.log(typeof { name: " Osama ", age: 17, country: " Eg " }); // - Object
console.log(typeof true); //   Boolean
console.log(typeof false); //   Boolean
console.log(typeof undefined);
console.log(typeof null); // - Object
//_____________________________________________________________________________________________

//this to add variables to usein many different places

var user = " Sayed ";
let user1 = "agme";
const user2 = "asd";
console.log(user);
/*Var
--Redeclare ( Yes )
--Access Before Declare ( Undefined )
--Variable Scope Drama [ Added To Window ] ( )
--Block or Function Scope

Let
--Redeclare ( No = > Error )
--Access Before Declare ( Error )
--Variable Scope Drama ( )
--Block or Function Scope

Const
--Redeclare ( No = > Error )
--Access Before Declare ( Error )
--Variable Scope Drama ( )
--Block or Function Scope
*/
//_____________________________________________________________________________________________
/*
String Syntax + Character Escape Sequences
\ Escape  =to make u type (") or (') or (\) by add (\) befor them + Line Continue
\n=to make the text in new line
*/
console.log(' Elzero Web " School " ');
console.log(" Elzero Web ' School ' ");
console.log(' Elzero Web " School " ');
console.log(" Elzero \\ Web ' School ' ");
console.log(
  " Elzero\
Web \
School "
);
console.log(" Elzero \nWeb \nSchool ");
//_____________________________________________________________________________________________

// Concatenation
let a0 = " We Love ";
let b0 = " JavaScript ";
document.write(a0 + " " + b0);
console.log(a0, b0);

//  Template Literals ( Template Strings )
let a1 = " We Love ";
let b1 = " JavaScript ";
let c = " And ";
let d = " Programming ";

console.log(a + '" " ' + b + " \n " + C + "  " + d);

console.log(`${a1} "" '' \\ ${b2}
${c} ${d}`);

// ---------------------------------------(Arithmetic Operators)---------------------------------------
// + Addition
// - Subtraction
// * Multiplication
// / Division
// ** Exponentiation ( ES7 )
// % Modulus ( Division Remainder )
// ++ Increment [ Post / Pre ]
// -- Decrement [ Post / Pre-]

console.log(10 + 20);
console.log(10 + " Osama ");

console.log(10 - 20);
console.log(10 - " Osama "); // - NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4); // 2 power 4
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1

console.log(35 % 2); // Remove 1

console.log(false - true); //== -1

/*
+ Unary Plus . [ Return Number If Its Not Number ]
- Unary Negation [ Return Number If Its Not Number + Negates . It ]
Tests
- Normal Number
- String Number
- String Negative Number
- String Text
- Float
- Hexadecimal Numeral System = > 0xFF
- null
- false
- true
*/
console.log(+100);
console.log(+" 100 ");
console.log(+" - 100 ");
console.log(+" Osama ");
console.log(+" 15.5 ");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

//(Number ( " 100 " ))DO Same  as unary plus
console.log(Number(" 100 "));

/*
---------------->(priority)
Type - Coercion ( Type Casting ) 
1string  have the priority then 2numpers then 3boolean
*/

/*
Number
-Double Precision
Syntactic Sugar.
#1
e
With Decimal
Number + BigInt
Number Min Value
Number Max Value
*/
console.log(1000000);
console.log(1_000_000); //==1000000
console.log(1e6); //==1000000
console.log(10 ** 6); //==1000000
console.log(10 * 10 * 10 * 10 * 10 * 10); //==1000000
console.log(1000000.0); //==1000000
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);

/*
Number Methods
-Two Dots To Call A Methods
--.toString()
-toFixed()
-parseInt()
parseFloat()
isInteger() [ES6]
isNaN() [ES6]
*/
console.log((100).toString()); //make number string
console.log((100.1).toString()); //make number string

console.log((100.555555).toFixed(2)); //make number string and make fixed 2numper after (.) ==(100.56)

console.log(Number("100 Osama")); //==NaN number
console.log(+"100 Osama"); //==NaN number
console.log(parseInt("100 Osama")); //==100 number
console.log(parseInt("Osama 100 Osama")); //==NaN number
console.log(parseInt("100.500 Osama")); //==100 number
console.log(parseFloat("100.500 Osama")); //==100.5 number

console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100.5)); //true
console.log(Number.isInteger(100)); //true

console.log(Number.isNaN("Osama")); //false
console.log(Number.isNaN("Osama" / 5)); //true

/*
Math Object
--- round()
---- ceil()
..-.floor()
..-.min()
--max()
- pow()
--- random()
-trunc().[Es6]
*/

console.log(Math.round(99.2)); //get the fixed number dependet on are him high of 5 og = or lower
console.log(Math.round(99.5));

console.log(Math.ceil(99.2)); // get the highest case of number after (.)
console.log(Math.floor(99.9)); // get the lowest case of number after (.)

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, 100, 90));

console.log(Math.pow(2, 4)); // get the power like 2**4

console.log(Math.random()); //get random number

console.log(Math.trunc(99.5)); //remove whatever before (.)

console.log("MAX_SAFE_INTEGER".length); //(.length)16 this to get how many capital in the word
console.log(Math.random() * 5); //this is how to get random number from0 to 4

//------------------------------------(String Methods)
/*
String Methods
-Access With Index
Access with charAt()
length
... trim()
toUpperCase()
toLowerCase()
-Chain Methods
*/

let theName1 = "Ahmed";

console.log(theName1);
console.log(theName1[1]); //
console.log(theName1[5]); //undefined

console.log(theName1.charAt(1)); //
console.log(theName1.charAt(5)); //nothing will come out

let theName = "  Ahmed  ";
console.log(theName.length); //get how many capital in the word
console.log(theName.trim()); // remove all spacing

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2)); //M

/*
String Methods
indexOf(Value [Mand], Start [Opt].0)
... lastIndexOf(Value [Mand], Start [Opt].Length)
-slice(Start [Mand], End [Opt] Not Include End)
repeat(Times).[ES6]
-split(Separator [Opt], Limit [Opt])
*/

let a4 = "Elzero Web School";

console.log(a4.indexOf("Web"));
console.log(a4.indexOf("Web", 8));
console.log(a4.indexOf("o")); // -5
console.log(a4.lastIndexOf("o")); // 15

console.log(a4.slice(2, 6)); //slises it from2 to6
console.log(a4.slice(-5, -3)); //slises it from3 to5 from back

console.log(a4.repeat(5));

console.log(a4.split("", 6)); // turn it to array and take firest 6 char only
console.log(a4.split(" ")); //slies it from the spacing

/*
String Methods
-substring(Start [Mand], End [Opt] Not Including End).
--- Start > End Will Swap
--- Start < 0 It Start From 0
--- Use Length To Get Last Character
-substr(Start [Mand], Characters To Extract)
- Start >= Length =.""
---- Negative Start From-End
-includes(Value [Mand], Start [Opt] Default 0) [ES6]
-startsWith(Value [Mand], Start [Opt] Default 0).[ES6]
-endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let asd = "Elzero Web School";

console.log(asd.length);

console.log(asd.substring(2, 6)); //from to
console.log(asd.substring(6, 2)); //same as up
console.log(asd.substring(-10, 6)); // 0 - 6
console.log(asd.substring(asd.length - 5, asd.length - 3)); // start from end

console.log(asd.substr(0, 6)); // WE ADD A START AND HOW MANY CHAR
console.log(asd.substr(17)); // NOTHING GET OUT
console.log(asd.substr(-3)); // START FROM BACK -3
console.log(asd.substr(-5, 2)); // START FROM BACK -5 AND GET 2 CHAR

console.log(asd.includes("Web")); // TRUE
console.log(asd.includes("Web", 8)); // FALSE

console.log(asd.startsWith("E")); // TRUE .length
console.log(asd.startsWith("E", 2)); // FALSE .length
console.log(asd.startsWith("zero", 2)); // TRUE .length

console.log(asd.endsWith("ro", 6)); // TRUE .length

/*
-Comparison Operators
-==-Equal
!=-Not Equal
-Identical
!== Not Identical
-> Larger Than
->= Larger Than Or Equal
-<-Smaller Than
<-- Smaller Than Or Equal
*/
console.log(10 == "10"); // Compare Value Only
console.log(-100 == -"100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log("Osama" === "Ahmed");

console.log(typeof "Osama" === typeof "Ahmed");

/*
Logical Operators
- ! Not
-&& And
... || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

/*
Control Flow
- if
else if.
-else

if (Condition) {
// Block Of Code
}
*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price discount Amount
} else if (country === "Egypt") {
  price == 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}
console.log(price);

/*
Conditional (Ternary) Operator
*/

let theName2 = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName2}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/*
Logical Or ||
Null + Undefined + Any Falsy Value
Nullish Coalescing Operator ??
Null + Undefined
*/
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price2 = 0;

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);

/*
>>>>>>>>>>>>>>>>>>>>>>>>>>(Switch Statement)
switch(expression) {
Case 1:
// Code Block
-break;
Case 2:
-// Code Block
-break;
Default:
// Code Block
}
Default Ordering
Multiple Match
===
*/

let day = "A";

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;

  default: // u can add deful any where at firest for ex put end it with break;
    console.log("Unknown Day");
}

//------------------------------------(array)
/*
Arrays
Create Arrays [Two Methods] new Array() + []
Access Arrays Elements
Nested Arrays
Change Arrays Elements
Check For Array Array.isArray(arr);
*/
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`); //get the char from the element in the nested array

console.log(myFriends);
myFriends[1] = "Gamal"; //switch array with  element
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"]; //add array in array
console.log(myFriends);

console.log(Array.isArray(myFriends)); //true

/*
Arrays Methods
-Length
*/
// Index Start From 0 [ 0, 1, 2, 3, 4 ]
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Osama"];

myFriends[myFriends.length] = "Gamal"; //to add new element in the end

console.log(myFriends);

myFriends[myFriends.length - 1] = "Gamal"; //to replace the last element

console.log(myFriends);

myFriends.length = 3; //to control the array

/*
Arrays Methods [Adding And Removing]
unshift("", "") Add Element To The First
push("", "") Add Element To The End
shift() Remove First Element From Array
pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends);

myFriends.unshift("Osama", "Nabil");
console.log(myFriends);

myFriends.push("Samah", "Eman");
console.log(myFriends);

let first = myFriends.shift();
console.log(myFriends);
console.log(`First Name Is ${first}`);

let last = myFriends.pop();
console.log(myFriends);
console.log(`Last Name Is ${pop}`);

/*
Arrays Methods [Search]
indexOf(Search Element, From Index [Opt])
-lastIndexOf(Search Element, From Index [Opt])
includes(valueToFind, from Index [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", -2));

if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}
console.log(myFriends.lastIndexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  --sort(Function.[Opt])
  reverse
  */
let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.reverse());

console.log(myFriends.sort().reverse()); //u can write it like this

/*
Arrays Methods.[Slicing]
-slice(Start [Opt], End [Opt] Not Including End)
---slice() => All Array
---If Start Is Undefined => 0
------ Negative Count From End
---- If End Is Undefined || > Indexes => Slice To The End Array.length
--- Return New Array
... splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
---If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));
console.log(myFriends);

myFriends.splice(1, 2, "Sameer", "Samara"); //(start , how many element delet , elements u want to add)

console.log(myFriends);

/*
Arrays Methods [Joining]
concat(array, array) => Return A New Array
join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
);

console.log(allFriends);

console.log(allFriends.join()); //make it string
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join(" |"));
console.log(allFriends.join(" ").toUpperCase());

//__________________________________________(loops)
/*.
Loop
- Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames);

/*
Loop
Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];
for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");

  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }

  console.log("Models: ");

  for (let k = 0; k < models.length; k++) {
    console.log(`${models[k]}`);
  }
}

/*.
Loop Control
- Break
Continue
-Label
*/

let products0 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors0 = ["Red", "Green", "Black"];
for (let i = 0; i < products0.length; i++) {
  console.log(products0[i]);
  if (products0[i] === "Pen") {
    break; // BREAK
  }
}

let products1 = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];
let colors1 = ["Red", "Green", "Black"];
for (let i = 0; i < products1.length; i++) {
  if (typeof products1[i] === "number") {
    continue; //continue skipping
  }
  console.log(products1[i]);
}

//Label
let products2 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors2 = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products2.length; i++) {
  console.log(products2[i]);
  nestedLoop: for (let j = 0; j < colors2.length; j++) {
    console.log(`${colors[j]}`);
    if (colors2[j] === "Green") {
      break mainLoop;
    }
  }
}

/*
Loop For Advanced Example
*/
let products3 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;
for (;;) {
  console.log(products3[i]);
  i++;
  if (i === products3.length) break;
}

/*
Products Practice
*/
let Products4 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors4 = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products4Products4</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(` <h3> [${i + 1}] ${Products4[i]}</h3>`);
  for (let j = 0; j < colors4.length; j++) {
    document.write(`<p>${colors4[j]}</p>`);
  }
  document.write(`<p>${colors4.join(" ")}</p>`);
  document.write(`</div>`);
}

/*
Loop
-While
*/
let products5 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;
// while (true)
while (index < products5.length) {
  console.log(products5[index]);
  index += 1;
}

/*.
Loop
Do / While
*/

let products6 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let j = 0;
do {
  console.log(j);
  j++;
} while (false);
console.log(j);

//------------------------------------------------------(function)---------------------------------------------
/*
Function basic
*/

function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");

/*
Function Advanced Examples
*/

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}
sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);
//***************
function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(1982, 2021, 2020);

/*
Function.
-Return
- Automatic Semicolon Insertion [No Line Terminator Allowed]
-Interruptting
*/
function calc(num1, num2) {
  return num1 + num2;
}
let result0 = calc(10, 20);

console.log(result0 + 100);

//************************

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interruptting`;
    }
    console.log(i);
  }
}
generate(10, 20);

/*
Function
Default Function Parameters
-Function Parameters Default [Undefined]
- Old Strategies [Condition + Logical Or] age = age || "Unknown";
-ES6 Method
*/
function sayHello(username = "Unknown", age = "Unknown") {
  // if (age- === undefined) {
  // age = "Unknown";
  //-}
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}
console.log(sayHello());

/*
Function
-Rest Parameters (array)
Only One Allowed (array)
--Must Be Last Element (array)
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

/*
Function Advanced Practice
- Parameters
- Default
- Rest
- Loop
- Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (sk.length == 0 && show !== "Yes") {
      document.write(`<p>no skills to hidden</p>`);
    } else document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "css");

/*
Function
-Anonymous Function
-Calling Named Function vs Anonymous Function
-Argument To Other Function
-Task Without Name
- SetTimeout
*/

let calculator = function (num1, num2) {
  //Anonymous Function
  return num1 + num2;
};
console.log(calculator(10, 20));

function sayHello() {
  //Function normal
  console.log("Hello Osama");
}
document.getElementById("show").onclick = sayHello;

/*
Function
-Function Inside Function
-- Return Function
*/

// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}
console.log(sayMessage("Osama", "Mohamed"));

// Example 2

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

// Example 3
function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }

    return `${message} ${getFullName()}`;
  }

  return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

/*
Function
Arrow Function
Regular vs Arrow [Param + No Param]
Multiple Lines
*/
// let print = function () {
// return 10;
// };

// let print = () => 10;

// let print = function (num) {
// return num;
// };

// let print = num => num;

// let print = function (num1,-num2) {
// return num1 + num2;
// };

let print = (hum1, num2) => num1 + num2;

console.log(print(100, 50));

/*
--------------------------------------(Scope)
Global And Local Scope
*/
var a = 1;
let b = -2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function From Local ${a}`);
  console.log(`Function From Local ${b} `);
}
console.log(`From Global ${a}`);
console.log(`From Global ${b}`);
showText();

//---------------------------------------(MAP)

/*
Higher Order Functions
---> is a function that accepts functions as parameters and/or returns a function.

--Map
---method creates a new array.
---populated with the results of calling a provided function on every element
---in the calling array.

--Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
---Element => The current element being processed in the array.
---Index => The index of the current element being processed in the array.
---Array => The Current Array

--Notes
---Map Return A New Array

--Examples
---Anonymous Function
---Named Function
*/

let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With MAP

let addself = myNums.map(function (element, index, arr) {
  //-console.log( Current Element => ${element}');
  // console.log(Current Index => ${index}');
  // console.log(Array => ${arr}');
  // console.log( This => ${this}');
  return element + element;
}, 10);

// Same Idea With MAP (ARROW FUCTION)
let addself2 = myNums.map((element) => element + element);
console.log(addself2);

// Same Idea With MAP (FUCTION ARE KNOWING DO SAME MATH)
function addition(ele) {
  return ele + ele;
}
let add = myNums.map(addition);
console.log(add);

/*
Map.
--Swap Cases
- Inverted Numbers
- Ignore Boolean Value
*/

let swappingCases = "e1ZERO";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er40";

let sw = swappingCases
  .split("")
  .map(function (ele) {
    // Condition ? True False
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");

console.log(sw);

//  same as up put with Arrow Function Version
let sw2 = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(sw2);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});
console.log(inv);

console.log(inv);
let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(ign);

//---------------------------------------(Filter)
/*
--Filter
---method creates a new array.
---with all elements that pass the test implemented by the provided function.

Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
Element => The current element being processed in the array.
Index => The index of the current element being processed in the array.
Array => The Current Array
*/

// Get Friends With Name Starts with A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A");
});
console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});
console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
//   });
//   console.log(addMap);

//   let addFilter = numbers.filter(function (el) {
//   return el + el;
//   });
//   console.log(addFilter);

/*
Filter
Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers2 = "Elz123er40";
let ign2 = ignoreNumbers2
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");
console.log(ign2);
// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })

  .map(function (ele) {
    return ele * ele;
  })
  .join("");
console.log(mixedContent);

//---------------------------------------(Reduce)
/*
- Reduce
----- method executes a reducer function on each element of the array,
----- resulting in a single output value.

Syntax.
reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
- Accumulator => the accumulated value previously returned in the last invocation
- Current Val => The current element being processed in the array
-Index => The index of the current element being processed in the array ..
-----Starts from index 0 if an initialValue is provided (important)
-----Otherwise, it starts from index 1.
Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let add2 = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5); //initialValue
console.log(add2);

/*
Reduce
--Longest Word
--Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];
let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return !ele.startsWith("@");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

//---------------------------------------(forEach)

/*
-forEach
--method executes a-provided function once- for each array element.
Syntax forEach (callBackFunction (Element, Index, Array) { ), thisArg)
-Element =. The current element being processed - in the array.
-Index =>. The index of the current element being processed in the array.
-Array => The -Current Array

Note
-Doesnt Return Anything [Undefined]
- Break will Not Break The Loop
*/

let allLis = document.queryselectorAll("ul 1i");
let allDivs = document.queryselectorAl1(". content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    //-Remove Active Class- From- All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    //Add Active Class To This Element
    this.classList.add("active ");
    //Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

//---------------------------------------(Object)

/*
Object
- Intro and What Is Object
Testing Window Object
-Accessing Object
*/

let usera = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};
console.log(usera.theName);
console.log(usera.theAge);
console.log(usera.sayHello());

/*.
Object
-Dig Deeper
-Dot Notation vs Bracket Notation
-Dynamic Property Name
*/

let usera1 = {
  theName: "Osama",
  "country of": "Egypt",
};

console.log(user.theName); //Osama
console.log(user["theName"]); //Osama
console.log(user["country of"]); //Egypt

let myVar = "country";
let usera2 = {
  theName: "Osama",
  country: "Egypt",
};
console.log(usera2.theName); //Osama
console.log(usera2.country); // usera2.country//Egypt
console.log(usera2.myVar); // usera2.country //undentify
console.log(usera2[myVar]); // usera2.country//Egypt

/*
-Object
-Nested Object And Advanced Trainings
*/

let userNested = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (userNested.available === true) {
      return `Free For Work`;
    } else {
      `return Not Free`;
    }
  },
};

console.log(userNested.name); //osama
console.log(userNested.age); //38
console.log(userNested.skills); //["HTML", "CSS", "JS"]
console.log(userNested.skills.join(" | ")); //HTML | CSS | JS
console.log(userNested.skills[2]); // Access With Index //JS
console.log(userNested.addresses.ksa); //Riyadh
console.log(userNested.addresses.egypt.one); //Cairo
console.log(userNested["addresses"].egypt.one); //Cairo
console.log(userNested["addresses"]["egypt"]); //Cairo Giza
console.log(userNested["addresses"]["egypt"]["one"]); //Cairo
console.log(userNested.checkAv()); //return Not Free

/*.

Object
new way to creat object
Create With New Keyword new Object();
*/
let userNew = new Object({
  age: 20,
});

/*old way do same 
let userNew = {
  age: 20,
}*/

console.log(userNew); // age 20
userNew.age = 38;
userNew["country"] = "Egypt";
userNew.sayHello = function () {
  return `Hello`;
};

console.log(userNew); // age:38 country:egypt sayhello:f
console.log(userNew.age); //38
console.log(userNew.country); //Egypt
console.log(userNew.sayHello()); //hello

//>>>>>>>>>>>>>>>>>>>>>>>>>>(this)
/*
Function this Keyword
- this Introduction
this Inside Object.Method
---- When a function is called as a method of an object,
---- its this is set to the object the method is called on.
-Global Object.
..- Test Variables With Window And.This
Global Context
--- Function Context

Search
Strict Mode
*/

console.log(this); //this set to page (window)
console.log(this === window); //becouse this still set to window //true
myVar = 100;
console.log(window.myvar); //100
console.log(this.myVar); //100
function sayHello() {
  console.log(this); //window // becouse this still set to window
}
sayHello();
console.log(sayHello() === window); //true

document.getElementById("c1").onclick = function () {
  console.log(this); //this here set to (c1) // element who have c1 in html
  /*
---- When a function is called as a method of an object,
---- its this is set to the object the method is called on
*/
};

let userThis = {
  age: 38,
  ageInDays: function () {
    return this.age * 365; //this set to userThis
  },
  /*
---- When a function is called as a method of an object,
---- its this is set to the object the method is called on
*/
};
console.log(userThis.age);
console.log(userThis.ageInDays());

/*
The this keyword in functions behaves differently in strict mode.

The this keyword refers to the object that called the function.

If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
*/

("use strict");
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

/*
Object
-Create Object With create Method
*/

let userPrototype = {
  age: 20,
  doubleAge: function () {
    return this.age * 0.2; //(this) here this make any Change in any object take userPrototype as exambel he can Change var in function
  },
};
console.log(userPrototype);
console.log(userPrototype.age);
console.log(userPrototype.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(userPrototype); //here he take the userPrototype as a exambel take all variabels and function and do it in  copyObj object

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/*
Object
Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 1,
  prop3: 3,
};

let finalobject = Object.assign(targetObject, obj1, obj2); //new way to add create Object he copy every Object in the assign to ur new  object

finalobject.prop1 = 200;
finalobject.prop4 = 4;

console.log(finalobject);
let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>(Destructuring)
/*
Destructuring
" is a JavaScript expression that allows us to extract data from arrays,
objects, and maps and set them into new, distinct variables .."
- Destructuring Array
*/

let a7 = 1;
let b7 = 2;
let c7 = 3;
let d7 = 4;

let myFriends4 = ["Ahmed", "Sayed", "Ali", "Maysa"];
[a7 = "A", b7, c7, d7, e7 = "Osama"] = myFriends4;

console.log(a7);
console.log(b7);
console.log(c7);
console.log(d7);
console.log(e7);

// console.log(my Friends[4]);

let [, y, , z] = myFriends4;

console.log(y);
console.log(z);

/*
Destructuring
Destructuring Array Advanced Examples
*/

let myFriends5 = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];
// console.log(my Friends[3][2][1]);
// let [,, ·[a, ·,·[‚ · b]]] = myFriends;
let [, , , [a2, , [, b2]]] = myFriends5;

console.log(a); // Shady
console.log(b); // Gamal

/*
Destructuring
Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

//-//-Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);
/*
Destructuring
--Destructuring Object
*/
const user21 = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.the Title;
// let theCountry.= user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
// ({ theName, theAge, the Title, the Country } = user);

const { theName, theAge, theCountry } = user21;
console.log(theName);
console.log(theAge);
console.log(theCountry);
/*
Destructuring
Destructuring Object
--- Naming The Variables
--- Add New Property
--- Nested Object
Destructuring The Nested Object Only
*/
const user22 = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "Red",
  skills: { html: h, css },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html, css } = user.skills;
/*
Destructuring
-Destructuring Function Parameters
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};
showDetails(user);
// function showDetails(obj) {
// console.log( Your Name Is ${obj.theName}`);
// console.log( Your Age Is ${obj.theAge}` );
// console.log( Your CSS Skill Progress Is ${obj.skills.css}');
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>(Set Data Type)

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]); //undefind that u cant bring element in set using number of him

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet); //Set(4) {1, 2, 3, 'A'}

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));
//---------------------------------------------------------

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has("Name"));

console.log("####");

console.log(myMap.size);

console.log(myMap.delete("Name"));

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);

//----------------------------------------(Array Methods(Array.from))

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray); //remove all equlaytion values

console.log(Array.from(mySet)); //make set a array

// console.log([...new Set(myArray)]); // Future

function af() {
  //return array from arguments
  //arguments(like("Osama", "Ahmed", "sayed", 1, 2, 3))
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

//----------------------------------------(Array Methods(Array.copyWithin))
/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]  ---- Not Including End

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"] ---- Not Including End

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"] ---- Not Including End

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"] ---- Not Including End

console.log(myArray);

//----------------------------------------(Array Methods(Array.some))
/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check = nums.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

//----------------------------------------(Array Methods(Array.every))

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let check = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check);

//----------------------------------------(Array Methods(Spread Operator))

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

//----------------------------------------(Regular Expression)

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global(get all regular )
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/gi;

console.log(myString.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi; //here it serach about info or org or io
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g; //here it searach about nums from 0 to 2
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g; //here it searach about nums Not from 0 to 2
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g; ///[^a-z0-9]/gi (another solve)
console.log(myString.match(atozSmall));
console.log(myString.match(NotAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(NotAtozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(NotaAndcAnde));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specials));

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));

console.log(re.test(names)); //true
console.log(/(\bspam|spam\b)/gi.test("Osama")); //false
console.log(/(\bspam|spam\b)/gi.test("1Spam")); //true
console.log(/(\bspam|spam\b)/gi.test("Spam1")); //true

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/lz$/gi.test(names));
console.log(/^\d/gi.test(names));

console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!Z)/gi));

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re = /@/gi;
console.log(txt.replaceAll(re, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));

/*
  Regular Expression
  - Input Form Validation Practice (html form related)
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>(OOP)
/*
  Constructor Function
*/

function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

// -------------

/*
  Constructor Function
  - New Syntax (ctrl + .)to make it in EC6
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userOne instanceof User);
console.log(userOne.constructor === User);

/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg); // Native Code
console.log(userTwo.writeMsg); // Native Code

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/*
  Class
  - Static Properties And Methods
*/

class User {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

console.log(userOne.u);
console.log(userTwo.u);
console.log(userOne.count);
console.log(User.count);
console.log(User.sayHello());
console.log(User.countMembers());

/*
  Class
  - Inheritance
*/

// Parent Class
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne.u);
console.log(userOne.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");

console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);

//******************************************(Prototype)
/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);

console.log(User.prototype);

let strOne = "Elzero";

console.log(String.prototype);

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false, //false make the property can't be edite the value of him next out of object// true make it can be
  enumerable: true, //false make it can't be loding in loop // true make it can be
  configurable: false, //false make it cant be editing in another object and make the property can't be delet // true make it can be
  value: 3,
});

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

myObject.c = 100;

console.log(delete myObject.c);

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log(myObject);

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
//..............................................................(  Date And Time )
/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow = new Date();
console.log(dateNow);

console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(35);
// console.log(dateNow);

// dateNow.setFullYear(2020, 13);
// console.log(dateNow);

dateNow.setMonth(15);
console.log(dateNow);

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 100000; i++) {
  // document.write(`<div>${i}</div>`);
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>(Generators)
/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  //here he re use the value by useing generateNumbers(object name)
  console.log(value);
}

for (let value of generator) {
  //here it was already value yield so nothing will come out
  console.log(value);
}

/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Z"));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumbers() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>(Modules)

/*
  Modules
  - Import And Export
*/
//-----------------------------------------//export

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething }; //export

//-----------------------------------------

//-----------------------------------------//Import

import { a, arr, saySomething as s } from "the place of file";

console.log(a);
console.log(arr);
console.log(s());

//_______________________________________________________________

/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

//-----------------------------------------//export
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a as myNumber, arr, saySomething };

export default function () {
  return `Hello`;
}

//-----------------------------------------// import

// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(elzero());

import * as all from "./main.js";

console.log(all);

console.log(all.myNumber);
console.log(all.arr);
/*

//______________________________________________________________(JSON)
/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null

  (json editor online)>>>>>>>>>search 
*/

// {
//   "string": "Elzero",
//   "number": 100,
//   "object": { "EG": "Giza", "KSA": "Riyadh" },
//   "array": ["HTML", "CSS", "JS"],
//   "boolean": true,
//   "null": null
// }

///////////////////////////////////////////////

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
  console.log("Web API");
}, 0); // here u set time of methode take before start

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three();

/*
=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;

/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
//______________________________________________________(Callback Hell)
/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
  console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//______________________________________________________(Promise)

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));

/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));
//--------------------------------------(Fetch API)
/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));

//______________________________________________________(Promise)

/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

async function getData() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  // myPromise.then((resolvedValue) => console.log(resolvedValue));
  // console.log(await myPromise);
  console.log(await myPromise.catch((err) => err));
  console.log("After Promise");
}

readData();

/*
  Async & Await With Try, Catch, Finally
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch(
      "https://api.github.com/users/elzerowebschool/repos"
    );
    console.log(await myData.json());
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();

//______________________________________________________(DOM)
/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML >>return text and html 
  - textContent >>return pure text with any extra spacing if it was existed
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText >> get pure text with no extra spacing
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);

/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};
//  ex of dom

let input = document.getElementsByTagName("input")[0];
let div = document.getElementsByClassName("result")[0];

console.log(input);
input.oninput = () => {
  input.value;
  let output = input.value;
  div.textContent = `{${output * 1}} USD Dollar = {${(output * 15.2).toFixed(
    2
  )}} Egyptian Pound`;
};

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};

/*
DOM [CSS] 
--style
....cssText
- removeProperty (propertyName) [Inline, Stylesheet]
-setProperty(propertyName, value, priority)
*/
let element = document.getElementById("my-div");
element.style.color = "red";
element.style.fontweight = "bold";
element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";
element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");
document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.stylesheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);

/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

// element.remove();

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
};

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});

//______________________________________________________(BOM)

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.document.title = "Hello JS";

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params) call function once after set time
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayMsg, 3000, "Osama", 38);

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params) call the function again and again untill you >>clearInterval<<
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace() >>>replacing the page in history
  --- assign()  >>>keeping the page in history
*/

console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function () {
  window.open("", "_self", "", false);
}, 2000);

setTimeout(function () {
  window.open(
    "https://google.com",
    "_blank",
    "width=400,height=400,left=200,top=10"
  );
}, 2000);

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
};

/*
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>(Notes By Winter)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
"strict mode"
The this keyword in functions behaves differently in strict mode.

The this keyword refers to the object that called the function.

If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
----------------------------------------------------------------
*/
/*(this)in a regular function, the "this" keyword represents different objects depending on how the function was called by object or else*/
let member1 = {
  name: `Elzero`,
  age: 38,
  country: `Egypt`,
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(member1.fullDetails());

/*(this)in Arrow Functions, the "this" keyword represents the object that owns the function, no matter who calls the function >>window<<.*/
let member2 = {
  name: `Elzero`,
  age: 38,
  country: `Egypt`,
  fullDetails: () =>
    `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`,
};
console.log(member2.fullDetails());
//------------------------------------------------------------------------
let string = asd;
let stringAT = string.at(-1); //>>(at(-1))<< to get last element in string or array
//------------------------------------------------------------------------

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
console.log(Object.keys(myFavGames)[0]);

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>important to get Object Length

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`); //to call object element >>Object.keys(myFavGames)[i]<<
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
//******************************************************************************* */

//( Object.keys ) ITS TO GET THE Element in the object
//( Object.values )ITS TO GET THE Element Value in the object
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const { title: t, developer: d } = game;
const [o, a] = Object.keys(game.releases);
const [[u, j], { US: u_price, JAP: j_price }, or] = Object.values(
  game.releases
);

//******************************************************************************* */
//(OOP) class Getters

class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  CardRegister() {
    let pass = this.#c;
    let matchForm = /\d{4}/g;
    pass = typeof pass == String ? pass : pass.toString();
    let passMatch = pass.match(matchForm);
    passMatch = passMatch.map(function (ele, index) {
      return passMatch.length - 1 > index ? ele + "-" : ele;
    });

    return passMatch.join("");
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.CardRegister()}`;
  }
}

// Do Not Edit Anything Below
let userOne = new User("Osama", "1234-5678-1234-5678");

console.log(userOne.showData); //to get value of method in class as a Property add get before it
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

//---------------------------------------------------------------------
//creat a web html element dinamic useing (document.create) content from json

let req = new XMLHttpRequest();
req.open("GET", "./main.json");
req.send();
req.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    //
    let mainData = JSON.parse(this.responseText);
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    //
    let outerDiv = document.createElement("div"); //<div>
    outerDiv.setAttribute("id", "data"); //<div id:data>

    for (let i = 0; i < mainData.length; i++) {
      let inerdiv = document.createElement("div"); //<div>

      let h2 = document.createElement("h2"); //<h2>
      let h2text = document.createTextNode(mainData[i]["Artical Address"]); //content
      h2.append(h2text); //</h2>

      let p1 = document.createElement("p"); //<p>
      let p1text = document.createTextNode(mainData[i].Content); //content
      p1.append(p1text); //</p>

      let p2 = document.createElement("p"); //<p>
      let p2text = document.createTextNode(
        `Author:${mainData[i]["Author Name"]}`
      ); //content
      p2.append(p2text); //</p>

      let p3 = document.createElement("p"); //<p>
      let p3text = document.createTextNode(mainData[i].Section); //content
      p3.append(p3text); //</p>

      inerdiv.append(h2, p1, p2, p3); //</div>
      outerDiv.append(inerdiv); //</div>
    }
    document.body.prepend(outerDiv);
  }
};
