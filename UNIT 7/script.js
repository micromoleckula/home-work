1
let a1 = 1;
function t1() {
  document.querySelector('.out-1').innerHTML = a1;
  return a1;
}
document.querySelector('.b-1').onclick = t1;

2
let a2 = 2;
function t2() {
  return a2;
}
document.querySelector('.b-2').onclick = function() {
  document.querySelector('.out-2').textContent = t2();
};

3
function t3(a,b) {
  return a*b
}
document.querySelector('.b-3-1').onclick = function() {
    document.querySelector('.out-3-1').textContent = t3(3,4);
}
document.querySelector('.b-3-2').onclick = function(){
    document.querySelector('.out-3-2').textContent = t3(5,6);
}

4
function t4() {
  let i4 = document.querySelector('.i-4').value;
  return 2023-i4;
}
document.querySelector('.b-4').onclick = function() {
  document.querySelector('.out-4').textContent = t4();
}

5
function t5() {
  let name = document.querySelector('.i-5').value;
  return 'hello '+name
}
document.querySelector('.b-5').onclick = function() {
  document.querySelector('.out-5').textContent = t5();
}

6
function t6() {
  return Math.floor(Math.random() * (i61 - i62 + 1)) + i62;
}
document.querySelector('.b-6').onclick = function() {
  document.querySelector('.out-6').textContent = t6();
}

7
function t7() {
  let x = Math.floor(Math.random() * (255 - 0 + 1));
  let y = Math.floor(Math.random() * (255 - 0 + 1));
  let z = Math.floor(Math.random() * (255 - 0 + 1));
  return 'rgb(' + x + ', ' + y + ', ' + z + ')';
}
document.querySelector('.b-7').onclick = function() {
  document.querySelector('.b-7').style.backgroundColor = t7();
}

8
function t8() {
  let i8 = document.querySelector('.i-8').value;
  return i8.trim();
}
document.querySelector('.b-8').onclick = function() {
  document.querySelector('.out-8').textContent = t8();
}

9
function t9() {
  let i9 = parseInt(document.querySelector('.i-9').value);
  return i9 % 2 === 0 ? "True" : "False";
}
document.querySelector('.b-9').onclick = function() {
  document.querySelector('.out-9').textContent = t9();
}

10
function t10() {
  let i10 = parseInt(document.querySelector('.i-10').value);
  let i101 = parseInt(document.querySelector('.i-101').value);
  return i10 > i101 ? i10 : i101
}
document.querySelector('.b-10').onclick = function() {
  document.querySelector('.out-10').textContent = t10();
}