const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '150px';

one.classList.add('two')

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
  this.classList.toggle('three');
}

console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'))

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
  gas[i].onclick = function () {
    let gallons = document.querySelector('.gallons').value;
    let amount = this.getAttribute('data');
    document.querySelector('.out').innerHTML = gallons*amount;
  }
}

let a = document.createElement('div');

1
let b1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');
b1.onclick = function () {
  out1.style.width = '200px';
  out1.style.height = '40px';
}

2
let b2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');
b2.onclick = function () {
  out2.classList.add('bg-2');
  out2.style.width = '200px';
  out2.style.height = '40px';
}

3
let b3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');
out3.classList.add('bg-3');
b3.onclick = function () {
  out3.classList.remove('bg-3');
}

4
let b4 = document.querySelector('.b-4');
b4.onclick = function () {
  this.classList.toggle('bg-4');
}

5
let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');
b5.onclick = function () {
  if (out5.classList.contains('bg-5')) {
    out5.innerHTML = 'work';
  } else {
    out5.innerHTML = 'not work';
  }
}

6
let b6 = document.querySelector('.b-6');
let element6 = document.querySelectorAll('.p-6');
let out6 = document.querySelector('.out-6');
b6.onclick = function () {
  out6.innerHTML = element6.length;
}

7
let b7 = document.querySelector('.b-7');
let out7 = document.querySelectorAll('.out-7');
let i7 = -1;
b7.onclick = function () {
  while (out7.length > i7) {
    i7++
    out7[i7].classList.add('bg-7');
  }
}

8
let b8 = document.querySelector('.b-8');
let out8 = document.querySelectorAll('.out-8');
let i8 = -1;
b8.onclick = function () {
  while (out8.length > i8) {
    i8++
    out8[i8].classList.remove('out-8')
    out8[i8].classList.add('bg-8');
  }
}

9
