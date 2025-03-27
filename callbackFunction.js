//---callback function is a function which is passed to another function which is higher order function
//---callback function take input value and function as inputs
function add(a,b){
  return a+b
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

function cal(a,b,callback){
  return callback(a,b)
}
console.log(cal(1, 1, add));

