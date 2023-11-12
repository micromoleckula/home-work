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