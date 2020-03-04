// Question No. 1
// Write a program that takes input a name from user & greet the
// user like this:

// function helloWorld(){
//     var name = prompt("Please enter your name");
//     alert("Hi, " + name);
// }
// helloWorld()


// // Question No. 2
// // Write a program to take input a number from user & display
// // it’s multiplication table on your browser. If user does not enter
// // a new number, multiplication table of 5 should be displayed by
// // default.
// function helloWorld() {
//     var num = prompt("Type a number");
//     if (num === "") {
//         for (i = 1; i < 11; i++) {
//             console.log(5 + " x " + i + " = " + 5 * i);
//         }
//     }
//     else {
//         for (i = 1; i < 11; i++) {
//             console.log(num + " x " + i + " = " + num * i);
//         }
//     }
// }
// helloWorld()


// Question No. 3
// Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”
// function helloWorld() {
//     var city = prompt("Please enter city name");
//     if(city === "Karachi" || city === "karachi"){
//         alert("Welcome to the city of lights");
//     }
//     else {
//         alert("Welcome " + city);
//     }
// }
// helloWorld()


// Question No. 4
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.
// function helloWorld() {
//     var gender = prompt("Please enter gender");
//     if(gender === "male" || gender === "Male"){
//         alert("Good Morning Sir.");
//     }
//     else if (gender === "female" || gender === "Female"){
//         alert("Good Morning Ma'am.");
//     }
//     else{
//         alert("Good morning");
//     }
// }
// helloWorld()


// Question No. 5
// Write a program to take input color of road traffic signal from
// the user & show the message according to this table:
// function helloWorld() {
//     var traffic = prompt("Please enter traffic signal color");
//     if(traffic === "red" || traffic === "Red"){
//         alert("Red : vehicles must stop");
//     }
//     else if(traffic === "yellow" || traffic === "Yellow"){
//         alert("Yellow : vehicles should get ready to move");
//     }
//     else if(traffic === "green" || traffic === "Green"){
//         alert("Green : vehicles can move now");
//     }
//     else{
//         alert("NO color Choosen");
//     }
// }
// helloWorld()


// Question No. 6
// Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show
// the message “You are welcome”
// function helloWorld() {
//     var maxAge = prompt("Enter Max age");
//     var currentAge = prompt("Enter Current age");
//     if(currentAge <= maxAge){
//         alert("You are welcome");
//     }
//     else{
//         alert("Get out");
//     }
// }
// helloWorld()


// Question No. 7
// Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”
// function helloWorld() {
//     var fuel = prompt("Tell your remaining fuel quantity");
//     if(fuel < 0.25){
//         alert("Please refill the fuel in your car");
//     }
//     else{
//         alert("You are good to go");
//     }
// }
// helloWorld()


// Question No. 8
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// function helloWorld() {
// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
//      console.log(a);
// }

// answer = (alert showing because its changing value of a postincrement)

// b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// console.log(b);

// answer = (alert not showing because its doing preincrement after ifStatement its giving 83 )

// c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// answer = (alert showing of condition 2 because in condition 1 its doing 
//           preincrement of c it will 13 than after that AND 
//           alert showing of condition 4 becz in contion 3 you did postincrement of c it will 14)

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// answer = (alert is showing becz you assign plus value of materail cost and labour cost
//           in total , so total is 22000 and than condition says is totalcost equal to materal 
//           and labour cost so its yes)

// e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// answer = (alert showing true becz condition says if true than alert true);

// f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// answer = ( alert is showing becz condtion is if car is less than  cat so its true 
// becz there is no user input and no else condtion);
// }
// helloWorld()


// Question No. 9
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table: 
// marks obtain divide by total marks and multiply by 100
// function helloWorld() {
//     var mathematics = document.getElementById("math").value;
//     var mathConvert = Number(mathematics);

//     var science = document.getElementById("science").value;
//     var scienceConvert = Number(science);

//     var english = document.getElementById("english").value;
//     var englishConvert = Number(english);

//     var totalMarks = 300;
//     var MarksObtain = mathConvert + scienceConvert + englishConvert;
//     var percentageOfMarks = MarksObtain / totalMarks * 100;

//     console.log("Marks Sheet");
//     console.log("Total Marks : ",totalMarks);
//     console.log("Marks Obtain : ",MarksObtain);
//     console.log("Percentage : ",percentageOfMarks);

//     if(percentageOfMarks >= 80){
//         console.log("Grade : A-one");
//         console.log("Remarks : Excellent");
//     }
//     else if(percentageOfMarks >= 70){
//         console.log("Grade : A");
//         console.log("Remarks : Good");
//     }
//     else if(percentageOfMarks >= 60){
//         console.log("Grade : B");
//         console.log("Remarks : You need to improve");
//     }
//     else if(percentageOfMarks < 60){
//         console.log("Grade : Fail");
//         console.log("Remarks : Sorry");
//     }
//     else{
//         console.log("Tumsay na ho payga");
//     }
// }


// Question No. 10
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.
// function helloWorld() {
//     var nameItem1 = document.getElementById("item1").value;

//     var priceItem1 = document.getElementById("price1").value;
//     var priceItem1Convert = Number(priceItem1);

//     var quantityOfitem1 = document.getElementById("quantityOf1").value;
//     var quantityOfitem1Convert = Number(quantityOfitem1);

//     var nameItem2 = document.getElementById("item2").value;

//     var priceItem2 = document.getElementById("price2").value;
//     var priceItem2Convert = Number(priceItem2);

//     var quantityOfitem2 = document.getElementById("quantityOf2").value;
//     var quantityOfitem2Convert = Number(quantityOfitem2);

//     var shipping = 200;

//     var totalCost1 = priceItem1Convert * quantityOfitem1Convert;
//     var totalCost2 = priceItem2Convert * quantityOfitem2Convert;
//     var TotalCostofAll = totalCost1 + totalCost2 + shipping;

//     var discountPrice;

//     console.log("Price of " + nameItem1 + " is " + priceItem1Convert);
//     console.log("Quantity of " + nameItem1 + " is " + quantityOfitem1Convert  );
//     console.log("Price of " + nameItem2 + " is " + priceItem2Convert);
//     console.log("Quantity of " + nameItem1 + " is " + quantityOfitem2Convert  );
//     console.log("Shipping Charges " + shipping);
//     console.log("Total Cost of your orders is " + TotalCostofAll + "PKR");

//     if(TotalCostofAll > 2000){
//         discountPrice = TotalCostofAll * 20 / 100;
//         TotalCostofAll = TotalCostofAll - discountPrice
//         console.log("Discounted Price is " + TotalCostofAll + "PKR");
//     }
//     else{
//         console.log("Discounted is available on above 2000PKR");
//     }

// }


// Question No. 11
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correctanswer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// function helloWorld() {
//     var quizz = prompt("Tell A Secret no. from 1 till 10");
//         quizzNum = Number(quizz);
//     var num = +3;
//     if(quizzNum === 3){
//         alert("Bingo! Correct answer");
//     }
//     else if(quizzNum === num){
//         alert("Close enough to the correct answer");
//     }
//     else{
//         alert("Try Again Warna nikal");
//     }
//     console.log('sdasdasda');
// }
// helloWorld()


// Question No. 12
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.
// function helloWorld() {
//     var checkDivide = prompt("Type a number and i will tell that its dividable from 3 or not",'');
//     var checkDivideNumber = Number(checkDivide);
//     if(checkDivideNumber % 3 === 0){
//         alert("yes " + checkDivideNumber + " is dividable by 3");
//     }
//     else{
//         alert("No! " + checkDivideNumber + " is Not dividable by 3");
//     }
// }
// helloWorld()


// Question No. 13
// Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)
// function helloWorld() {
//     var karachiKing = Number(prompt("Please enter Karachi King Score"));
//     var lahoreQalandar = Number(prompt("Please enter Lohore Qalandar King Score"));
//     // console.log(karachiKing + lahoreQalandar);
//     if(karachiKing > lahoreQalandar){
//         alert('Karachi King is Winner');
//     }
//     else if(karachiKing < lahoreQalandar){
//         alert('Lahore Qalandar is Winner');
//     }
//     else if(karachiKing === lahoreQalandar){
//         alert('Match Tie');
//     }
// }
// helloWorld()


// Question No. 14
// Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :
// function helloWorlddd() {
//     var promVal = prompt("Checks the type of variables");
//     var num = Number();
//     if (promVal === typeof string) {
//         alert('string');
//     }
//     in this number not working 
//     else if (promVal === typeof number) {
//         alert('number');
//     }

//     else if (promVal === 'true' || 'false') {
//         alert('boolean');
//     }
// }
// helloWorlddd()

// Question No. 15
// Write a program that checks whether the given input is an
// even number or an odd number.
// function helloWorld() {
//     var num = Number(prompt("type a number i will tell you its odd or even"));
//     if( num % 2 == 0) {
//         alert(num + ' is Even Number');
//     }
//     else{
//         alert(num + ' is Odd Number');
//     }
// }
// helloWorld()


// Question No. 16
// Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// function helloWorld() {
//     var tempCheck = Number(prompt("Whats temp is in Karachi"));

//     if(tempCheck >= 40){
//         alert("It is too hot outside.")
//     }
//     else if(tempCheck >= 30){
//         alert("The Weather today is Normal.")
//     }
//     else if(tempCheck >= 20){
//         alert("Today’s Weather is cool.")
//     }
//     else if(tempCheck >= 10){
//         alert("OMG! Today’s weather is so Cool.")
//     }

// }
// helloWorld()


// Question No. 17
// Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// function helloWorld(sum) {
//     var firstVal = Number(document.getElementById('first').value);
//     var secondVal = Number(document.getElementById('second').value);
//     var calculateVal;
//     if(sum === '*'){
//         calculateVal = firstVal * secondVal;
//         alert(firstVal + ' * ' + secondVal + ' is ' + calculateVal);
//         firstVal = document.getElementById('first').value = '';
//         secondVal = document.getElementById('second').value = '';
//     }
//     else if(sum === '+'){
//         calculateVal = firstVal + secondVal;
//         alert(firstVal + ' + ' + secondVal + ' is ' + calculateVal);
//         firstVal = document.getElementById('first').value = '';
//         secondVal = document.getElementById('second').value = '';
//     }
//     else if(sum === '/'){
//         calculateVal = firstVal / secondVal;
//         alert(firstVal + ' / ' + secondVal + ' is ' + calculateVal);
//         firstVal = document.getElementById('first').value = '';
//         secondVal = document.getElementById('second').value = '';
//     }
//     else if(sum === '-'){
//         calculateVal = firstVal - secondVal;
//         alert(firstVal + ' - ' + secondVal + ' is ' + calculateVal);
//         firstVal = document.getElementById('first').value = '';
//         secondVal = document.getElementById('second').value = '';
//     }
//     else if(sum === '%'){
//         calculateVal = firstVal % secondVal;
//         alert(firstVal + ' % ' + secondVal + ' is ' + calculateVal);
//         firstVal = document.getElementById('first').value = '';
//         secondVal = document.getElementById('second').value = '';
//     }
// }


// Question No. 18
// Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.
// function helloWorld() {
//     var dayInput = prompt("Enter a Day name");

//     if (dayInput == 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday') {
//         console.log("day", dayInput);
//         alert("It’s a week day");
//     }
//     else if (dayInput == 'Saturday') {
//         alert("It’s weekend");
//     }
//     else if (dayInput == 'Sunday') {
//         alert("Yay! It’s a holiday");
//     }
// }
// helloWorld()


// Question No. 19
// Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”
// function helloWorld() {
//     var score = prompt("Please Enter Score");

//     if(score > 50){
//         alert("You are passed");
//     }
//     else{
//         alert("Try again!");
//     }
// }
// helloWorld()


// Question No. 20
// Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").
// function helloWorld() {
//     var num1 = Number(prompt("Please Enter First Number to Compare with second"));
//     var num2 = Number(prompt("Please Enter Second Number to Compare with first"));

//     if(num1 > num2){
//         alert("The greater number of " + num1 + " and " + num2 + " is " + num1);
//     }
//     if(num2 > num1){
//         alert("The greater number of " + num1 + " and " + num2 + " is " + num2);
//     }
//     else if(num1 === num2){
//         alert(num1 + " and " + num2 + " is Equal number");
//     }
// }
// helloWorld()


// Question No. 21
// Write a program that:3zw2q
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)
// function helloWorld() {
//     var lang = prompt("Enter Your Language Code for Example ( 'aze' , 'rum' , 'spa' )")

//     if(lang === 'aze'){
//         alert("Salam dünya is in Azerbaijani");
//     }
//     else if(lang === 'rum'){
//         alert("Salut Lume is in Romania");
//     }
//     else if(lang === 'spa'){
//         alert("Hola Mundo is in Spanish");
//     }
//     else{
//         alert("Hello, World");
//     }
// }
// helloWorld()


// Question No. 22
// Write a program to take input a number & tell whether it’s a
// positive or negative number.
// function helloWorld() {
//     var num = Number(prompt("Enter a number i will tell you its positive or negative"));

//     if (num < 0) {
//         alert("Its a Negative Number");
//     }
//     else {
//         alert("Its a positive Number");
//     }
// }
// helloWorld()


// Question No. 23
// Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Run the program for a few different inputs and show the result
// to make sure it works.
// function helloWorld() {
//     var num = Number(prompt("Please enter a Number"));
//     var noun = prompt("Please enter a Noun");
//     alert(num + ' ' + noun);
// }
// helloWorld()