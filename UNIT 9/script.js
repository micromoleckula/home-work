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
let out9 = document.querySelectorAll('.out-9');

function f9() {
  this.classList.add('bg-9');
}

for (let i = 0; i < out9.length; i++) {
  out9[i].addEventListener('click', f9);
}

10
let out10 = document.querySelectorAll('.out-10');

function f10() {
  this.classList.toggle('bg-10');
}

for (let i = 0; i < out10.length; i++) {
  out10[i].addEventListener('click', f10);
}

11
let b11 = document.querySelector('.b-11');
b11.onclick = function () {
  let div11 = document.createElement('div');
  div11.innerHTML = 'Pisun';
  div11.classList.add('bg-11');
  document.body.appendChild(div11);
}

12 
let b12 = document.querySelector('.b-12');
let out12 = document.querySelector('.out-12');
b12.onclick = function () {
  let div12 = document.createElement('div');
  div12.innerHTML = 'Pisun';
  div12.classList.add('bg-12');
  out12.appendChild(div12);
}

13
let b13 = document.querySelector('.b-13');
let out13 = document.querySelector('.out-13');
b13.onclick = function () {
  let div13 = document.createElement('div');
  div13.innerHTML = 'Pisun';
  div13.classList.add('bg-13');
  out13.appendChild(div13);
}

out13.onclick = function () {
  out13.innerHTML = 'Jopa'
}

14
let b14 = document.querySelector('.b-14');
b14.onclick = function () {
  let out14 = document.querySelector('.out-14');
  let newElement14 = document.createElement('div');
  div14.classList.add('bg-13');
  newElement14.innerHTML = 'text';
  out14.prepend(newElement14);
}

15
let b15 = document.querySelector('.b-15');
b15.onclick = function () {
  let out151 = document.querySelector('.out-151');
  let newElement15 = document.createElement('div');
  newElement15.classList.add('bg-13');
  newElement15.innerHTML = 'text';
  out151.before(newElement15);
}

16
let b16 = document.querySelector('.b-16');
b16.onclick = function () {
  let out161 = document.querySelector('.out-161');
  let newElement16 = document.createElement('div');
  newElement16.classList.add('bg-13');
  newElement16.innerHTML = 'text';
  out161.after(newElement16);
}

17
let b17 = document.querySelector('.b-17');
b17.onclick = function () {
  let out17 = document.querySelector('.out-17');
  let newElement17 = document.createElement('div');
  newElement17.classList.add('bg-13');
  newElement17.innerHTML = 'text17777777777777';
  out17.replaceWith(newElement17);
}

18
let b18 = document.querySelector('.b-18');
b18.onclick = function () {
  let p18 = document.querySelector('.p-18');
  let out18 = document.querySelector('.out-18');
  let newElement18 = document.createElement('div');
  newElement18.classList.add('bg-13');
  newElement18.innerHTML = p18.getAttribute('data-b');
  out18.prepend(newElement18);
}

19
let b19 = document.querySelector('.b-19');
b19.onclick = function () {
  let p19 = document.querySelectorAll('.p-19');
  let out19 = document.querySelector('.out-19');
  let newElement19 = document.createElement('div');
  // newElement19.classList.add('bg-13');
  let elem19 = '';
  let i19 = 0;
  while (p19.length > i19) {
    elem19 += p19[i19].getAttribute('data-b') + ' ';
    i19++;
  }
  newElement19.innerHTML = elem19 ;
  out19.prepend(newElement19);
}

20
let b20 = document.querySelector('.b-20');
b20.onclick = function () {
  let out20 = document.querySelector('.out-20');
  out20.setAttribute('title', 'go');
  console.log(out20.getAttribute('title'));
}
