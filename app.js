/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 01 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1: 
alert("hello");  // ANS: 1...

// Q2:
alert("Error! Please Enter a Valid Password"); //ANS: 2...

// Q3:

alert("Wellocome to JS land...\nHappy Coding!"); // ANS: 3...

// Q4: 
alert("Wellocome to JS land.");
alert("Happy Coding!\n ▢ Prevent this page from creating a aditional dialogs."); // ANS: 4...

// Q5:
console.log("Hello... i can run JS Through my web browser's console."); // ANS: 5...

/* Q6: Practice placement of <script></script> element in
following sections of your project in exercise 6.

    a. Head
    b. Body (before your page’s HTML)
    c. Body (inside your page’s HTML)
    d. Body (after your page’s HTML) */

// (C) is the Right Answer ✅...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 02 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
document.write("<br> <h1>CHAPTER 02</h1>")

// Q1:
var username; // ANS 1...

// Q2: 
var myName = "abdul-rafey"; // ANS 2...

/* Q3:*/

var message = "Hello world";
alert(message); // ANS 3...


// Q4:

var studentName = "John Doe";
var studentAge = 15;
var studentData = "Certified Mobile Aplication Development.";

alert(studentName);
alert(studentAge);
alert(studentData); // ANS: 4...


// Q5: 
alert("Pizza\n Pizz\n Piz\n Pi\n P")



// Q6:

var email = "rafey123890@gmail.com";
alert("My Email Address is: " + email); // ANS 6...


// Q7: 
var lerner = "A smarter way to learn JavaScript";
alert("I Am Trying To Learn from the Book " + lerner); // ANS 7...


// Q8: Write a script to display this in browser through JS...
document.write("Yah! I can write HTML content through JavaScript."); //ANS 8...


// Q9: Store following string in a variable and show in alert and browser through JS...

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"); // ANS 9...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 03 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1:
document.write("<br> <h1>CHAPTER 03</h1>")

var age = 15;

alert("I am " + age + " years old."); // ANS 1...


// Q2:

if(localStorage.getItem('visitCount')) {
    // Increment the existing counter
    var count = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', count);
} else {
    // Initialize the counter if it doesn't exist
    localStorage.setItem('visitCount', 1);
}

// Display the visit count wherever you need to
var visitCount = localStorage.getItem('visitCount');
alert("You Have Visited This Site: " + visitCount + " Times"); // ANS 2...


//Q3: 

var birthdate = 2008;

document.write("<br>My birth year is " + birthdate + "<br> Data type of my deeclared variable is number.<br>"); // ANS 3...


/* Q4: */

var visitorName = prompt("Tell me the Your Name Please...");
var productTitle = prompt("Can You Please Put The Product-name.");
var ordered = prompt("How many Products You Want.");

document.write("<strong>" + visitorName + "</strong> ordered <strong>" + ordered + " " + productTitle + "</strong> On XYZ Closing Store.." ); // ANS: 4...






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 04 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
// Q1:
document.write("<br> <h1>CHAPTER 04</h1>")
var x, y, z;
var x = 5, y = 10, z = 15; // ANS: 1..


// Legal Variable Names
var firstName; // Starts with a letter and uses camelCase.
var _age; // Starts with an underscore.
var $salary; // Starts with a dollar sign.
var user3; // Contains a number but doesn't start with it.
var my_variable; // Uses underscores for separation.

// Illegal Variable Names
/* var 123name;  Starts with a number, which is not allowed.
   var: Reserved keyword in JavaScript, which is not allowed
   var my-variable; Contains a hyphen, which is not allowed in variable names.
   var first name; Contains a space, which is not allowed in variable names.
   var @username; Starts with a symbol other than _ or $. */ 
// ANSWER OF THIS QOUESTIONS>>>



/* Q2:*/

document.write("<br> <h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain. NUMBER $ and For example $my_1stVariable");
document.write("Variables must begin with a $ _ and leters...")
document.write("Variable names are case. sensitive like rafey and RAFEY both are different variables in js...");
document.write("Variable names should not be JS. like this for catch case and var let const");






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 05 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
document.write("<br> <h1>CHAPTER 05</h1>")

// Q1: 
var num1 = +prompt("Enter the first number.")
var num2 = +prompt("Enter the second number.")
var result = num1 + num2;

document.write("sum of " + num1 + "and " + num2 + "is " + result ); //ANS 1;


/* Q2:*/

document.write("<br> <h1>QUESTION NUM 02</h1>")

var num;
document.write("value after variable declaretion is " + num);
var num = 5;
document.write("initial value: " + num);
var numIn = num++
document.write("value after increament is: " + num);
var numAdd = num + numIn
document.write("value after addition is: " + numAdd);
var numDec = numAdd--;
document.write("value after decerement is: " + numDec);
var numResult = numDec/3;
document.write("the reminder is: " + numResult);




document.write("<br> <h1>QUESTION NUM 03</h1>");
/* Q3:*/

var ticket = +prompt("First please buy the ticket.");
var ticketNum = +prompt("How Many ticket are you buy?.");

var finalResult = ticket * ticketNum;

document.write("Total cost to buy " + ticketNum + "tickets to a movies is " + finalResult);




//Q4; Write a script to display multiplication table of any number in your browser.
var number = 4;

// Print the multiplication table for the number from 1 to 10
console.log(number + " x 1 = " + (number * 1));
console.log(number + " x 2 = " + (number * 2));
console.log(number + " x 3 = " + (number * 3));
console.log(number + " x 4 = " + (number * 4));
console.log(number + " x 5 = " + (number * 5));
console.log(number + " x 6 = " + (number * 6));
console.log(number + " x 7 = " + (number * 7));
console.log(number + " x 8 = " + (number * 8));
console.log(number + " x 9 = " + (number * 9));
console.log(number + " x 10 = " + (number * 10)); // ANS 4...




/*Q4:*/


var celsius = 30;

var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheitTemp = 86;

var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C"); // ANS 4...




/* Q5: */

// a. Price of item 1
var priceItem1 = 50;

// b. Price of item 2
var priceItem2 = 30;

// c. Ordered quantity of item 1
var quantityItem1 = 3;

// d. Ordered quantity of item 2
var quantityItem2 = 2;

// e. Shipping charges
var shippingCharges = 10;

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;


console.log("Receipt:");
console.log("Price of item 1: $" + priceItem1);
console.log("Quantity of item 1: " + quantityItem1);
console.log("Price of item 2: $" + priceItem2);
console.log("Quantity of item 2: " + quantityItem2);
console.log("Shipping charges: $" + shippingCharges);
console.log("Total cost: $" + totalCost); // ANS 5...



// Q6: 

// Store total marks in a variable
var totalMarks = 500;

// Store marks obtained by the student in a variable
var marksObtained = 420;

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser console
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage + "%"); // ANS 6...


//Q7:

var usDollars = 10;
var saudiRiyals = 25;

var usdToPkr = 104.80;
var riyalToPkr = 28;


var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);

console.log("Total in Pakistani Rupees: " + totalPkr); // ANS 7...




/*Q8: */

var initialNumber = 20;

var result = ((initialNumber + 5) * 10) / 2;

console.log("Initial number: " + initialNumber);
console.log("Result after arithmetic operations: " + result); // ANS 8...



/*Q9: */


var currentYear = 2024;


var birthYear = 1990;


var ageThisYear = currentYear - birthYear;
var ageLastYear = ageThisYear - 1;


console.log("They are either " + ageLastYear + " or " + ageThisYear + " years old."); // ANS 9...


/*Q11:*/


var radius = 7; // You can change this value to any other radius


var pi = 3.142; 
var circumference = 2 * pi * radius;


console.log("The circumference is " + circumference);

// Calculate the area based on the radius
var area = pi * radius * radius;


console.log("The area is " + area); // ANS 11...




/*Q13:*/


var favoriteSnack = "chips";


var currentAge = 25; // You can change this value to your current age


var maximumAge = 80; // You can change this value to your expected maximum age


var dailyAmount = 2; // You can change this value to the estimated amount of snack consumed per day


var yearsLeft = maximumAge - currentAge;
var totalAmount = yearsLeft * 365 * dailyAmount; // Assuming 365 days in a year


console.log("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "."); // ANS 13...