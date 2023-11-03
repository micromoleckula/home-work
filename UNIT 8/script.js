for (let i = 0; i < 6; i++) {
  console.log(i);
}


let k = 0
while (k < 5) {
  console.log('penis' + k);
  k++;
}

let sum = 0;
let p = 0;
while (p <= 5) {
  sum = sum + p;
  p++;
}
console.log('sum = ' + sum);


let out = document.querySelector('.out');
p = 0;
let outStr = '';
let flag = 4;

while (p < 5) {
  let p1 = 0;
  while (p1 < 5) {
    if (p1 < flag) {
      outStr += '&nbsp';
    } else {
      outStr += '*';
    }
    p1++
  }
  flag--;
  outStr += '<br>';
  p++
}
out.innerHTML = outStr;


function t1() {

}

document.querySelector('.b-1').onclick = t1;

function t2() {

}

document.querySelector('.b-2').onclick = t2;


function t3() {

}

document.querySelector('.b-3').onclick = t3;

function t4() {

}

document.querySelector('.b-4').onclick = t4;

function t5() {

}

document.querySelector('.b-5').onclick = t5;


function t6() {

}

document.querySelector('.b-6').onclick = t6;


function t7() {

}

document.querySelector('.b-7').onclick = t7;


function t8() {

}

document.querySelector('.b-8').onclick = t8;


function t9() {

}

document.querySelector('.b-9').onclick = t9;

function t10() {

}

document.querySelector('.b-10').onclick = t10;

function t11() {

}

document.querySelector('.b-11').onclick = t11;

function t12() {

}

document.querySelector('.b-12').onclick = t12;

function t13() {

}

document.querySelector('.b-13').onclick = t13;

function t14() {

}

document.querySelector('.b-14').onclick = t14;

function t15() {

}

document.querySelector('.b-15').onclick = t15;
