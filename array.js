let array = [1,2,3,4,5]
console.log(array);


//-----------------------------------push()-------------------------------------
//---push() is used to insert or store the value in the end of the array

array.push(6)
console.log(array);

//----------------------------------unshift()-------------------------------
//---unshift() is used to insert or store the value in the starting of an array
//---costly operations
array.unshift(10)
console.log(array);



//-------------------------------pop()------------------------------------------
//---pop() is used to delete the last element in an array
//---also we can store the deleted element in an  array by storing it in variable
let removed = array.pop()
console.log(removed);

console.log(array);



//-------------------------------shift()----------------------------------------
//---shift() is used to delete the first element in an array
//--costly operations
let y = array.shift()
console.log(array);
console.log(y);




//--------------------------------------splice(startIndex,deleteCount,items)------------------------------------------
//------used to remove the element in the center of an array
let remove = array.splice(2,1) 
console.log(array);
console.log(remove);
console.log(array);




//                            splice(startIndex,deleteCount,items)
//---------------------------------splice(2,0,60)---------------------------------
//---splice(2,0,)--is used to remove and insert an element in an array

array.splice(2,0,90)
console.log(array);




//-------------------------------------------indexOf()-----------------------------
//---indexOf() is used to find the element's position----------------
console.log(array.indexOf(4));




//-----------------------------------lastIndexOf()---------------------------------------
//---lastIndexOf()--- is used to find the element's position in last position
let ar = [10,20,30,40,50,30]
console.log(ar);

console.log(ar.indexOf(30));
console.log(ar.lastIndexOf(30));



//-----------------------------------------include()------------------------------
//---include()--- is used to find the elememt is present or not in the array
console.log(ar.includes(40));




//-----------------------------------------map()----------------------------------------
//---map()--- is used to iterate the element in an array-----------------------------
//---map()--- is always takes a callback function has a input .which is called as higher order function



let numbers = [1,4,9,16]

function squartRoot(x){
  return Math.sqrt(x)
}

let result = numbers.map(squartRoot)

console.log(numbers);

console.log(result);




//------------------------------------------filter()--------------------------------------
//---filter()---is always take callback function has a input------------------------------
//---filter()-- is used to filter the array by using some conditions----------------------



let ages = [32,15,19,12]

function checkAge (x){
  if(x<18){
    return true; 
  }
}

let res = ages.filter(checkAge)
console.log(ages);

console.log(res);



//-----------------------------------------reduce()----------------------------------------
//---reduce()--- is takes always a callback as a input------------------
//---reduce()---is used to combain all the value into one value and display it ---------- 



let number = [1,4,9,16]
function redValue(total,x){
  return total+x
}

let rst = number.reduce(redValue,0)

console.log(number);

console.log(rst);







//-----------------------------------some()---------------------------------------------
//---some()--- is used to satisified a some condition only
//---some()---is used to check some proprities or some condition only

let score = [85,72,90,67]

function somee(x){
  if(x>85){
    return x
  }
}

let final = score.some(somee)

console.log(final);





//-------------------------------------------------every()---------------------------------
//---every()--is used to satisified the condition in every element in the array


function pass(x){
  if (x > 75) {
    return true
  }
}


let passed = score.every(pass)

console.log(passed);



//----------------------------------------find()-----------------------------------------
//---find()---is used to find the element is pressent or not in the array
function findValue(x){
  if(x>70){
    return x
  }
}

let s = score.find(findValue)

console.log(s);
//---------------------------------------findIndex()--------------------------------------
//---findIndex()--- is used to find the element's position in the array
function findValue(x){
  if(x>85){
    return x
  }
}

let s1 = score.findIndex(findValue)

console.log(s1);




//----------------------------------------------sort()-------------------------------------

let fruits = ['banana','apple','graps','mango']

console.log(fruits);
fruits.sort()
console.log(fruits);

let scores = [85,67,72,90];

console.log(scores);
scores.sort();
console.log(scores);