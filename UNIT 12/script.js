let a = [4, 5, 9];
let b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(a, b);

// console.log('------------')

// for (let i = 0; i < b.length; i++) {
//   let c = b[i];
//   for (let k = 0; k < c.length; k++) {
//     console.log(c[k]);
//   }
// }

// console.log('------------')

// for (let i = 0; i < b.length; i++) {
//   let c = b[i];
//   for (let k = c.length - 1; k >= 0; k--) {
//     console.log(c[k]);
//   }
// }

// console.log('------------')

// for (let i = 0; i < b.length; i++) {
//   console.log(b[i]);
//   console.log(b[i][0]);
// }

// console.log('------------')
let out = '';

for (let i = 0; i < b.length; i++) {
  for (let k = 0; k < b[i].length; k++) {
    out += b[i][k];  
  }
}

document.querySelector('.out').innerHTML = out;