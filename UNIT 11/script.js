function showArr(elementClass, array) {
  document.querySelector(elementClass).textContent = array;
}

const d1 = [32, 'best', 66, 'best'];


function f1() {
  let i1 = document.querySelector('.i-1').value;
  // Валидация ввода
  if (i1 !== "") {
    d1.push(i1);
    showArr('.out-1', d1);
  } else {
    alert("Введите значение");
  }
}

document.querySelector('.b-1').onclick = f1;

function f2() {
  d1.pop();
  showArr('.out-2', d1);
}

document.querySelector('.b-2').onclick = f2;

function f3() {
  d1.shift();
  showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;

function f4() {
  let i4 = document.querySelector('.i-4').value;
  if (i4 !== "") {
    d1.push(i4);
    showArr('.out-4', d1);
  } else {
    alert("Введите значение");
  }
}

document.querySelector('.b-4').onclick = f4;

function f5() {
  let i5 = document.querySelector('.i-5').value;
  if (i5 !== "") {
    d1.unshift(i5);
    showArr('.out-5', d1);
  } else {
    alert("Введите значение");
  }
}

document.querySelector('.b-5').onclick = f5;

6
d6 = ['test', 5, 12];

function f6() {
  let i6 = document.querySelector('.i-6').value;
  
  if (i6 !== "") {
    d6[d6.length] = i6;
    showArr('.out-6', d6);
  } else {
    alert("Введите значение");
  }
}

document.querySelector('.b-6').onclick = f6;

7
d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
  d7 = d7.slice(0, -1);
  showArr('.out-7', d7);
}

document.querySelector('.b-7').onclick = f7;

8
let d8 = [2, '4', 12, 67, 'hello'];

function f8() {
  let i8 = document.querySelector('.i-8').value;

  if (i8 !== "") {
    d8 = [i8, ...d8];
    showArr('.out-8', d8);
  } else {
    alert("Введите значение");
  }
}

document.querySelector('.b-8').onclick = f8;

9
let d9 = [100, 200, 300, 400, 700, 121];

function f9() {
  d9 = d9.slice(0, -1);
  showArr('.out-9', d9);
}

document.querySelector('.b-9').onclick = f9;

10
let d10 = [3,14,15,92,6];

function f10() {
  d10.reverse();
  showArr('.out-10', d10);
}

document.querySelector('.b-10').onclick = f10;

11
let d11 = [2, 3, 4, 5, 6, 7];

function f11() {
  let i11 = parseInt(document.querySelector('.i-11').value);
  let i = d11.indexOf(i11);

  if (i !== -1) {
    showArr('.out-11', i.toString());
  } else {
    showArr('.out-11', -1);
  }
}

document.querySelector('.b-11').onclick = f11;

12
let d12 = [6, 62, 60, 70, 1, 5];

function f12() {
  let searchValue = parseInt(document.querySelector('.i-12').value);
  let index = -1;

  for (let i = 0; i < d12.length; i++) {
    if (d12[i] === searchValue) {
      index = i;
      break;
    }
  }
  showArr('.out-12', index.toString());
}

document.querySelector('.b-12').onclick = f12;

13
let d13 = [6, 0, 22, 1, 4, 76];
let d133 = [];

let copyDirection = true; // true: d13 to d133, false: d133 to d13

function f13() {
  if (copyDirection) {
    d133 = [];
    for (let i = d13.length - 1; i >= 0; i--) {
      d133.push(d13[i]);
    }
  } else {
    d13 = [];
    for (let i = d133.length - 1; i >= 0; i--) {
      d13.push(d133[i]);
    }
  }

  copyDirection = !copyDirection; // Toggle the copy direction
  showArr('.out-13', copyDirection ? d13 : d133);
}

document.querySelector('.b-13').onclick = f13;

14
let d14 = [];

function f14() {
  let i14 = parseInt(document.querySelector('.i-14').value);
  let i = 0;

  while (i < i14) {
    d14.push(1);
    i++;
    console.log(true);
  }

  showArr('.out-14', d14);
}

document.querySelector('.b-14').onclick = f14;

15
let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
  let i15 = document.querySelector('.i-15').value.trim();

  if (i15 !== '') {
    // Проверяем, есть ли значение в массиве
    if (d15.includes(parseInt(i15))) {
      alert("Элемент уже есть в массиве");
    } else {
      d15.push(parseInt(i15));
    }
  }

  showArr('.out-15', d15);
}

document.querySelector('.b-15').onclick = f15;

16
let d16 = [];
let d161 = [5,6,7,8,9];
let d162 = [23,24,56,87];

function f16() {
  d16 = d16.concat(d161, d162);
  showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;

17
let d17=[];
let d171=['a', 'b', 'c', 'd'];
let d172=[1,2,3,4,5];

function f17() {
  let i = 0;
  while (d171.length > i) {
    d17.push(d171[i])
    i++;
  }
  let i2 = 0;
  while (d172.length > i2) {
    d17.push(d172[i2])
    i2++;
  }
  showArr('.out-17', d17);
}

document.querySelector('.b-17').onclick = f17;

18
let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

function f18() {
  let i18 = document.querySelector('.i-18').value;
  let d188 = d18.includes(i18);
  showArr('.out-18', d188);
}

document.querySelector('.b-18').onclick = f18;

19
let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];

function f19() {
  let maxString = d19[0];

  for (let i = 1; i < d19.length; i++) {
    if (d19[i].length > maxString.length) {
      maxString = d19[i];
    }
  }

  showArr('.out-19', maxString);
}

document.querySelector('.b-19').onclick = f19;

20
let d20 = [4,5,6,7,8,9,10];

function f20() {
  d20 = d20.join('')
  showArr('.out-20', d20);
}

document.querySelector('.b-20').onclick = f20;



