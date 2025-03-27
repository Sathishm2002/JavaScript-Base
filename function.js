//---function has tow 
//---basic function and advanced function

//--function usualy has four things

//name
//next to the name() paranthisies 
//paranthisies () are used to get inpute form the world //--->we can call input as parameters in js
//after paranthisies name(){} they is a curly bractets //{}--->we can call it as body of function in js
//in side of {} curly brackets they perform some activity/task
//after completing task or activity it gives/return output

//---------------------------syntax for function

//------------------- function name(parameters)
//------------------- {
//------------------- perform some task ----->based on condition
//------------------- return value
//------------------- }


//-----------------they are foure types of functions-----------------------------
//---typ--1-->which takes (no input/parameters) and does not give (any output)
//---typ--2-->which takes (no input/parameters) and give (output)
//---typ--3-->which takes (input/parameters) and does not give (any output)
//---typ--4-->which takes (input/parametrs) and give (output)

//---------------------------NO INPUT and NO OUTPUT-------------------------------------
let a = 100;
let b = 200;

function add(){
  let c;
  c=a+b;
  console.log(c);
}
add()


//-------------------------------NO INPUT and GIVES OUTPUT---------------------------------


function sub(){
  let c;
  c = a - b;
  return c;
}
let result = sub()
console.log(result);

//--------------------------------GIVE INPUT and NO OUTPUT-----------------------------

function mul(x,y){
  let z;
  z=x*y
  console.log(z);
}
mul(2,3)

 
//------------------------------------GIVE INPUT and GIVES OUTPUT------------------------

function div(x,y){
  let z=x/y
  return z;
}
let res = div(10,2)
console.log(res);




let student1Mark = 93
let student1MaxMark = 100

function calGrade(student1Mark,student1MaxMark){

  let student1Percentage = (student1Mark / student1MaxMark) * 100;
  let student1Grade;

  if (student1Percentage >= 90) {
    student1Grade = "A";
  } else if (student1Percentage >= 80) {
    student1Grade = "B";
  } else if (student1Percentage >= 70) {
    student1Grade = "C";
  } else if (student1Percentage >= 60) {
    student1Grade = "D";
  } else {
    student1Grade = "F";
  }
  console.log(student1Grade);
  
}

calGrade(92,100)
calGrade(62,100)
calGrade(32,50)


//-----------------------types of functions-----------------------------------
//-----------------------------------function decleration-------------------------

function sum(a,b){
  return a+b
}

console.log(sum(10, 20));


//---------------------------function Expression-------------------------------------
//----we assign name in starting stage of function
let sums = function(a,b){
  return a+b
}
console.log(sums(10, 20));


//----------------------------arrow function------------------------------------------
//----we remove the function name and use function expression
let sumss=(a,b)=>{
  return a+b
}
console.log(sumss(20,30));



//---------------------IIFE (Immediately Invoked Function Expression)-------------------
(function(){
  console.log("I run when Called");
})()
example()

