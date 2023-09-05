
// *********************************************************************

             // First Problem   Write a program that allow to user enter number then print it 


// var use = prompt('please enter Number');
// document.getElementById("ahmed").innerHTML = use;


// ******************************************************************

// Second Problem
// Write a program that take number from user then print yes if that number can divide by 3 
// and 4 otherwise print no 

// var num = prompt("Enter Number You Want To Check it Divided by '3' or Not");
// if(num % 3 == 0){
//     document.getElementById('ahmed').innerHTML = num + " is Devide By '3'";
//     document.getElementById('ahmed_').innerHTML ='True';
// }
// else{
//     document.getElementById('ahmed').innerHTML = num + " is Not Devide By '3'";
//     document.getElementById('ahmed_').innerHTML ='False';

// }


// ************************************************************************

// Third Problem
// Write a program that allows the user to insert 2 integers then print the max 

// var num1 = prompt("Enter First Number You Want To Check it Greater or Not");
// var num2 = prompt("Enter Second Number You Want To Check it Greater or Not");
// if(num1 > num2){
//     document.getElementById('ahmed').innerHTML = num1 +" is Max Number";
// }
// else if(num1 == num2){
//     document.getElementById('ahmed').innerHTML = 'Tow Number are Equal';
// }
// else{
//     document.getElementById('ahmed').innerHTML =  num2 +" is Max Number";
// }

// ***************************************************************************

// fourth Problem
// Write a program that allows the user to insert an integer then print negative if it is 
// negative number otherwise print positive. 

// var num1 = prompt("Enter First Number You Want To Check it Positive or Not");
// if(num1 > 0){
//     document.getElementById('ahmed').innerHTML = num1 +" is Positive Number";
// }
// else if(num1 == 0){
//     document.getElementById('ahmed').innerHTML = num1 +' Not Negative or Positive';
// }
// else{
//     document.getElementById('ahmed').innerHTML =  num1 +" is Negative Number";
// }


// *******************************************************************************

// Fifth Problem 
// Write a program that take 3 integers from user then print the max element 
// and the min element. 
// var num1 = prompt("Enter First Number You Want To Check it Greater or Not");
// var num2 = prompt("Enter Second Number You Want To Check it Greater or Not");
// var num3 = prompt("Enter third Number You Want To Check it Greater or Not");
// if(num1 > num2 && num1 >num3 && num2> num3){
//     document.getElementById('ahmed').innerHTML ="Max Number = " + num1;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num3;
// }
// if(num1 > num2 && num1 >num3 && num2 < num3){
//     document.getElementById('ahmed').innerHTML ="Max Number = " + num1;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num2;
// }
// else if(num2 > num1 && num2 >num3 && num1 > num3){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num2;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num3;
// }
// else if(num2 > num1 && num2 >num3 && num1 < num3){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num2;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num1;
// }
// else if(num3 > num1 && num3 >num2 && num1 >num2){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num3;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num2;
// }
// else if(num3 > num1 && num3 >num2 && num1 <num2){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num3;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num1;
// }
// else if(num3 == num1 && num3 > num2){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num3;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num2;
// }
// else if(num3 == num1 && num3 < num2){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num2;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num3;
// }
// else if(num2 == num1 && num2 > num3){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num2;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num3;
// }
// else if(num2 == num1 && num2 < num3){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num3;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num2;
// }
// else if(num2 == num3 && num1 > num3){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num1;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num3;
// }
// else if(num2 == num3 && num1 < num3){
//     document.getElementById('ahmed').innerHTML = "Max Number = " + num3;
//     document.getElementById('ahmed_').innerHTML ="Min Number = " + num1;
// }
// else if(num2 == num1 == num3){
//     document.getElementById('ahmed').innerHTML = "Three Number are Equal" ;
// }
// else{
//     document.getElementById('ahmed').innerHTML =" Try Again";
// }

// ********************************************************************

// Sixth Problem
// Write a program that allows the user to insert integer number then 
//  check If a number is oven or odd 


// var num = prompt("Enter Number You Want To Check it Odd or Even");
// if(num % 2 == 0){
//     document.getElementById('ahmed').innerHTML = num + " is Even";

// }
// else{
//     document.getElementById('ahmed').innerHTML = num + " is Odd ";

// }

// *******************************************************************

// seventh Problem
// Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
// then print vowel otherwise print consonant 

// var use = prompt('please enter character You Want to Check it Vowel Or Not');
// if(use == 'a' || use == 'e' || use == 'i' || use == 'o' || use == 'u'){
//     document.getElementById('ahmed').innerHTML = "Vowel";
// }
// else{
//     document.getElementById('ahmed').innerHTML = "Consonant ";
    
// }

// **************************************************************************

// Eighth Problem

// Write a program that allows user to insert integer then print all numbers between 1 to 
// that’s number 

                    // First Solution

// var num = prompt("Enter size of loop");
// var count = '';
// for (var x = 1; x <= num; x++) {
    
//     count+= x +'<br>';
    
// }
// document.getElementById('ahmed').innerHTML = count;

                   // Second Solution


// var num = prompt("Enter size of loop");


// for (var x = 1; x <= num; x++) {
    
//     console.log(x);
    
// }


// ******************************************************************************
// Ninth Problem

// Write a program that allows user to insert integer then print a multiplication table up to 12. 

// var num = prompt("Enter Number you want to Calculate Multiplication Table for it:");
// for (let index = 1; index <= 12; index++) {
    
//     console.log(num * index);
    
// }

// ****************************************************************************

// Tenth Problem

// Write a program that allows to user to insert number then print all even numbers 
// between 1 to this number 

// var num = prompt("Enter Number you want to Print Elements Even Smaller than it :");
// for (let index = 1; index <= num; index++) {
    
//     if(index % 2 == 0){
//         console.log(index);
//     }
    
// }

// ************************************************************************


// Eleventh Problem

// Write a program that take two integers then print the power 
// var num1 = prompt("Enter First Number:");
// var num2 = prompt("Enter Second Number:");
// var result = 1;
// for (let index = 1; index <= num2; index++) {
    
//     result *= num1;
    
// }
// console.log(result);
// document.getElementById('ahmed').innerHTML = result;

// ********************************************************************

// Twelfth Problem
// Write a program to enter marks of five subjects and calculate total, average and 
// percentage. 

// var num1 = prompt("Enter Number of Subjects :");
// var num2 = 0;
// for (let index = 1; index <= num1; index++) {
    
//     var x = prompt(" Enter degree " + (index) + " Subjects :");
//     num2 += Number(x);
// }
// document.getElementById('ahmed').innerHTML = 'Sum of Subject = ' + num2;
// document.getElementById('ahmed_').innerHTML = 'Average of Subject = ' + (num2 / num1);
// document.getElementById('_ahmed_').innerHTML = 'overall rating = ' + (num2 / ( num1 * 100 )) *100 + '%' ;



// Thirteenth Problem
// Write a program to input month number and print number of days in that 
// month. 
// var num = prompt("Enter Number of Month :");
// if( num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12 ){
//     document.getElementById('ahmed').innerHTML = 'Days in Month: ' + 31;
// }
// else if( num == 2){
//     document.getElementById('ahmed').innerHTML = 'Days in Month: ' + 28 + '  Or  ' + 29 ;
// }
// else if( num == 4 || num == 6 || num == 9 || num == 11){
//     document.getElementById('ahmed').innerHTML = 'Days in Month: ' + 30;
// }
// else{
//     document.getElementById('ahmed').innerHTML = 'Try Again';
// }




// Fourteenth Problem
// Write a program to input marks of five subjects 
// Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade 

// var num1 = prompt("Enter Number of Subjects :");
// var num2 = 0;
// for (var index = 1; index <= num1; index++) {
    
//     var x = prompt(" Enter degree " + (index) + " Subjects :");
//     num2 += Number(x);
// }
// var percent = (num2 / (num1 * 100)) * 100;
// if( 90 <= percent && percent <= 100 ){
//     document.getElementById('_ahmed_').innerHTML = 'overall rating = ' + percent + '%' ;
//     document.getElementById('ahmed').innerHTML = 'Grad: A ';
// }
// else if( 80 <= percent && percent < 90 ){
//     document.getElementById('_ahmed_').innerHTML = 'overall rating = ' + percent + '%' ;
//     document.getElementById('ahmed').innerHTML = 'Grad: B ';
// }
// else if( 70 <= percent && percent < 80 ){
//     document.getElementById('_ahmed_').innerHTML = 'overall rating = ' + percent + '%' ;
//     document.getElementById('ahmed').innerHTML = 'Grad: C ';
// }
// else if( 60 <= percent && percent < 70 ){
//     document.getElementById('_ahmed_').innerHTML = 'overall rating = ' + percent + '%' ;
//     document.getElementById('ahmed').innerHTML = 'Grad: D ';
// }
// else if( 50 <= percent && percent < 60 ){
//     document.getElementById('_ahmed_').innerHTML = 'overall rating = ' + percent + '%' ;
//     document.getElementById('ahmed').innerHTML = 'Grad: E ';
// }
// else if( 40 <= percent && percent < 50 ){
//     document.getElementById('_ahmed_').innerHTML = 'overall rating = ' + percent + '%' ;
//     document.getElementById('ahmed').innerHTML = 'Grad: F ';
// }
// else{
//     document.getElementById('ahmed').innerHTML = 'Please Sure From Your Numbers';
// }

// **********************************************************************************
// Fifteen Problem
// Write a program to print total number of days in month 
// var num = prompt("Enter Number of Month :");
//     num = Number(num);
// document.getElementById('ahmed_').innerHTML =typeof num;
// switch(num){
//     case 1: 
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10: 
//     case 12: 
//     document.getElementById('ahmed').innerHTML = 'Days in Month: ' + 31;
//     break;

//     case 2: 
//     document.getElementById('ahmed').innerHTML = 'Days in Month: ' + 28 + '  Or  ' + 29 ;
//     break;

//     case 4:
//     case 6:
//     case 9:
//     case 11: 
//     document.getElementById('ahmed').innerHTML = 'Days in Month: ' + 30;
//     break;

//     default:
//     document.getElementById('ahmed').innerHTML = 'Try Again';

// }

// ****************************************************************

// Sixteen Problem
// Write a program to check whether an alphabet is vowel or consonant
// var num = prompt("Enter Character to check whether an alphabet is vowel or consonant :");
// switch(num){
//     case 'a':
//     case 'A': 
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U':  
//     document.getElementById('ahmed').innerHTML = 'Vowel';
//     break;

//     default:
//         document.getElementById('ahmed').innerHTML = 'consonant';
// }

// *************************************************************

// Seventeen Problem
// Write a program to find maximum between two numbers 

// var num1 = prompt("Enter First Number You Want To Check it Greater or Not");
// var num2 = prompt("Enter Second Number You Want To Check it Greater or Not");
//     num1 = Number(num1);
//     num2 = Number(num2);
// switch(num1 >num2){
//     case true:
//         document.getElementById('ahmed').innerHTML = num1 +" is Max Number";
//         break;
//     default:
//         document.getElementById('ahmed').innerHTML =  num2 +" is Max Number";
// }

// *******************************************************************

// Eighteen Problem
// Write a program to check whether a number is even or odd  
// var num1 = prompt("Enter First Number You Want To Check it Even or Not");
//     num1 = Number(num1);
// switch(num1 % 2){
//     case 0:
//         document.getElementById('ahmed').innerHTML ="Even Number";
//         break;
//     default:
//         document.getElementById('ahmed').innerHTML ="Odd Number";
// }

// *************************************************************

// Nineteen Problem
// Write a program to check whether a number is positive or negative or zero 

// var num1 = prompt("Enter First Number You Want To Check it Positive or Not");
//     num1 = Number(num1);
// switch(num1 > 0){
//     case true:
//         document.getElementById('ahmed').innerHTML ="Positive Number";
//         break;
//     default:
//         document.getElementById('ahmed').innerHTML ="Negative Number";
// }

// ***********************************************************

// Twenty Problem
// Write a program to create Simple Calculator

// var num1 = prompt("Enter First Number");
// var num2 = prompt("Enter Second Number");
// var oper = prompt(" select any Operation +,-,/,x");
//     num1 = Number(num1);
//     num2 = Number(num2);
// switch(oper){
//     case "+":
//         document.getElementById('ahmed').innerHTML =num1 + num2;
//         break;
//     case "-":
//         document.getElementById('ahmed').innerHTML =num1 - num2;
//         break;
    
//     case "x":
//     document.getElementById('ahmed').innerHTML =num1 * num2;
//     break;
//     case "/":
//         document.getElementById('ahmed').innerHTML =num1 / num2;
//         break;
//     default:
//         document.getElementById('ahmed').innerHTML ="Try Again";
// }


























































// var trs = '';
// for (let index = 0; index <= 100; index++) {
    
//     trs +=`<tr><td>${index}</td>
//     <td>Ahmed</td>
//     <td>19</td>
//     <td>3</td><tr>`;
// }
// document.getElementById('ahmed1').innerHTML = trs ;
