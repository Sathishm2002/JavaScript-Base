//obiects has two 

//state/properties      and      behaviour


//{
//    key:value,
//}

let car = {
  name : "BMW",
  cost : 75.6,
  mileage : 8.6,

  start  :function(){
    console.log("car is starting.....");
  },

  stop : function(){
    console.log("car is stoping.....");
  },

  accelerate : function(){
    console.log("car is accelerating.....");
    
  }
}

//----object has two value which is state and behaviour

//----we can access the object value by using state of the object
//---example---
console.log(car.name);
console.log(car.cost);
car.start();
car.stop();



//----------pass by value----------and----------pass by reference

///------------pass by value--------------------------------------------
let a=100;
let b;
b=a;  //assigning work from right to left.

console.log(a);
console.log(b);


b=200;

console.log(a);
console.log(b);

//---primitive----------------and-------------objects-----------------------------

//-------------------------------pass by reference------------------
let c1 = {
  name : "BMW",
  cost : 75.6,
  mileage : 8.6
}

console.log(c1);
console.log(c1.name);
console.log(c1.cost);
console.log(c1.mileage);


let c2;
c2=c1;

console.log(c2.name);
console.log(c2.cost);
console.log(c2.mileage);



c2.name = "kIA"
console.log(c2.name);
console.log(c1.name);

//--------------------------------------object as functions-------------------------------
//----------passed to function-----------------------------
function exmp(car){
  console.log(car);
}


let c4 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.6,
};

exmp(c4)
console.log(c4);

//---returned from function------------------------------------

function exmp1(){
  let c4 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.6,
};
return c4
}

console.log(exmp1());



//----------------functions are objects in javascript------------------------

//---object syntax:
let n = {
//  key:value,
//  key:value,
}

//---function syntax:
function add(a,b){
  console.log(a+b);
  
}
console.log(add.name);
console.log(add.length);
add.call
add(10,20)




function add1(c,d){
  console.log(c+d);
}

add1(20,20)

let add2
add2  =  add1


add2(100,200)


function example(fun){
  fun(200,100)
}

function sub(a,b)
{
  console.log(a-b);
}

example(sub)