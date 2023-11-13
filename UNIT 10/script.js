1
let ar1 = ['chinazes', false, 'urde', 34, true, 'sanhizas', 21];
document.querySelector('.b-1').onclick = function () {
  document.querySelector('.out-1').innerHTML = ar1;
}

3
let ar3 = ['chinazes', false, 'urde', 34, true, 'sanhizas', 21];
document.querySelector('.b-3').onclick = function () {
  document.querySelector('.out-3').innerHTML = ar3.length;
}

4
let ar4 = ['chinazes', 'pensil', 'urde', 34, true, 'sanhizas', 21, 34, 'komtsumon', 'kakashka'];
document.querySelector('.b-4').onclick = function () {
  autist4 = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
  document.querySelector('.out-4').innerHTML = autist4;
}

5
let ar5 = [3, 1, 2, 3, 4, 5, 6];
document.querySelector('.b-5').onclick = function () {
  autist5 = ar5[0] + ar5[2] + ar5[3];
  document.querySelector('.out-5').innerHTML = autist5;
}

6
let ar6 = ['Dmitry', 'Telets', 6, 5];
document.querySelector('.b-6').onclick = function () {
  let i = 0;
  let aut6 = '';
  while (ar6.length > i) {
    aut6 += ar6[i] + ' ';
    i++;
  }
  document.querySelector('.out-6').innerHTML = aut6;
}

7
let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

document.querySelector('.b-7').onclick = function () {
  ar7[5] = 'italy';
  ar7[6] = 'turkey';
  ar7[7] = 'vietnam';
  let i = 0;
  let aut7 = '';
  while (ar7.length > i) {
    aut7 += ar7[i] + ' ';
    i++;
  }
  document.querySelector('.out-7').innerHTML = aut7;
}

8
let ar8 = ['china', 'india', 'brazil', 'japan', 'egypt'];

document.querySelector('.b-8').onclick = function () {
  ar8[2] = 3.14;
  ar8[3] = 17;
  ar8[5] = 5;
  let i = 0;
  let aut8 = '';
  while (ar8.length > i) {
    aut8 += ar8[i] + ' - ';
    i++;
  }
  document.querySelector('.out-8').innerHTML = aut8;
  document.querySelector('.out-8-1').innerHTML = ar8.length;
}

9
let ar9 = [100, 200, 300, 400, 700, 121];

document.querySelector('.b-9').onclick = function () {
  let i = 0;
  let aut9 = '';
  while (ar9.length > i) {
    aut9 = ar9[i];
    i++;
  }
  document.querySelector('.out-9').innerHTML = aut9;
}

10
let ar10 = [100, 200, 300, 400, 700, 121];

document.querySelector('.b-10').onclick = function () {
  let i = 0;
  let aut10 = '';
  while (ar10.length > i) {
    aut10 =ar10[0] + ' ' + ar10[i] ;
    i++;
  }
  document.querySelector('.out-10').innerHTML = aut10;
}

11
let ar11 = [2,3,4,5,6,7];

document.querySelector('.b-11').onclick = function () {
  let a = ar11[2];
  ar11[2] = ar11[4];
  ar11[4] = a;
  document.querySelector('.out-11').innerHTML = ar11;
}
document.querySelector('.out-11').innerHTML = ar11;

12
let ar12 = ['test', 'west', 'list', 'class', 'best'];

document.querySelector('.b-12').onclick = function () {
  let temp = ar12[0];
  ar12[0] = ar12[ar12.length - 1];
  ar12[ar12.length - 1] = temp;
  document.querySelector('.out-12').innerHTML = ar12;
}

13
let ar13 = ['test', 'west', 'list', 'class', 'best'];

document.querySelector('.b-13').onclick = function () {
  let aut13 = '';
  let i = 0;
  while (ar13.length > i) {
    aut13 += i + ' ' + ar13[i] + ' ';
    i++
  }
  document.querySelector('.out-13').innerHTML = aut13;
}

14
let ar14 = [1, 2, 3, 'hello', 66];

document.querySelector('.b-14').onclick = function () {
  let aut14 = '';
  let i = ar14.length - 1;
  while (i >= 0) {
    aut14 += ar14[i] + ' ';
    i--
  }
  document.querySelector('.out-14').innerHTML = aut14;
}

15
let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

document.querySelector('.b-15').onclick = function () {
  let i = 0;
  let aut15 = '';
  while (ar15.length > i) {
    if (ar15[i] > 0) {
      aut15 += ar15[i] + ' ';
    }
    i++;
  }
  document.querySelector('.out-15').innerHTML = aut15;
}

16
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

document.querySelector('.b-16').onclick = function () {
  let i = 0;

  while (ar16.length > i) {
    if (ar16[i] % 2 === 0) {
      ar16_odd.push(ar16[i]);
    } else {
      ar16_even.push(ar16[i]);
    }
    i++;
  }

  document.querySelector('.out-16-odd').innerHTML = ar16_odd.join(' ');
  document.querySelector('.out-16-even').innerHTML = ar16_even.join(' ');
}

17
let ar17 =  [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

document.querySelector('.b-17').onclick = function () {
  let i = 0;
  let count = 0
  while (ar17.length > i) {
    if (ar17[i] > 3) {
      count++
    }
    i++;
  }
  document.querySelector('.out-17').innerHTML = count;
}

18
let ar18 =  [15,24,13,78,21,4,45,67];

document.querySelector('.b-18').onclick = function () {
  let max = ar18[0];
  for (let i = 0; i < ar18.length; i++) {
    if (ar18[i] > max) {
      max = ar18[i]
    }
  }
  document.querySelector('.out-18').innerHTML = 'max: ' + max;
}

19
let ar19 =  [15,424,313,78,241,4,45,67];

document.querySelector('.b-19').onclick = function () {
  let min = ar19[0]
  for (let i = 0; i < ar19.length; i++) {
    if (ar19[i] < min) {
      min = ar19[i]
    }
  }
document.querySelector('.out-19').innerHTML = 'min: ' + min;
}

20
let ar20 =  [1, 2];

document.querySelector('.b-20').onclick = function () {
  let count = 0;
  for (let i = 0; i < ar20.length; i++) {
    count = count + ar20[i];
  }
  
  document.querySelector('.out-20').innerHTML = count;
}