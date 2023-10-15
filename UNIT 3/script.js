//1
let i1 = document.querySelector('.i-1');
let b1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');
let num1 = parseFloat(i1.value);

b1.onclick = () => {
  let num1 = parseFloat(i1.value);
  if (num1 == 4) {
    out1.innerHTML = 'True';
  }
  else {
    out1.innerHTML = 'False';
  }
}

//2
let a21 = document.querySelector('.i-2');
let a22 = document.querySelector('.i-2-2');
let b2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

b2.onclick = () => {
  let a211 = parseFloat(a21.value);
  let a222 = parseFloat(a22.value);
  if (a211 > a222) {
    out2.innerHTML = a21;
  } else {
    out2.innerHTML = a22;
  }
}