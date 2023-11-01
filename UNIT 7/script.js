function one() {
  console.log(true)
}

one()
let a = 7;
let b = 8;


function two() {
  console.log(a * b);
  return a*b;
}

let c = 10*two()


function multi(x, y) {
  return x*y;
}

console.log(multi(4, b))