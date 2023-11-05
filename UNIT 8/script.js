1
function t1() {
  let outStr1 = '';
  let a1 = 0;
  while (a1 < 50) {
    a1++;
    outStr1 += a1 + ' ';
  }
  document.querySelector('.out-1').innerHTML = outStr1;
}
document.querySelector('.b-1').onclick = t1;


2
function t2() {
  let outStr2 = '';
  let a2 = 0;
  while (a2 < 122) {
    a2++;
    if (a2 % 2 == 0) {
      outStr2 += a2;
    } else {
      outStr2 += " ";
    }
  }
  document.querySelector('.out-2').innerHTML = outStr2;
}
document.querySelector('.b-2').onclick = t2;


3
function t3() {
  let outStr3 = '';
  let a3 = 26;
  while (a3 > 7) {
    a3--
    outStr3 += a3 + ' ';
  }
  document.querySelector('.out-3').innerHTML = outStr3;
}
document.querySelector('.b-3').onclick = t3;


4
function t4() {
  let outStr4 = '';
  let a4 = 79;
  while (a4 > 34) {
    a4--;
    if (a4 % 3 == 0) {
      outStr4 += a4 + '_';
    }
  }
  document.querySelector('.out-4').innerHTML = outStr4;
}
document.querySelector('.b-4').onclick = t4;


5
function t5() {
  let outStr5 = '';
  let a5 = 0;
  while (a5 < 17) {
    a5++;
    if (a5 % 2 == 0) {
      outStr5 += a5 + "_**";
    } else {
      outStr5 += a5 + "_*";
    }
  }
  document.querySelector('.out-5').innerHTML = outStr5;
}
document.querySelector('.b-5').onclick = t5;


6
function t6() {
  let a6 = 0;
  let i6 = document.querySelector('.i-6').value;
  let outStr6 = '';
  let a66 = 0;
  while (a6 < i6) {
    while (a66 < 6) {
      outStr6 += '*';
      a66++;
    }
    a66 = 0;
    outStr6 += '<br>';
    a6++;
  }
  document.querySelector('.out-6').innerHTML = outStr6;
}
document.querySelector('.b-6').onclick = t6;


7
function t7() {
  let i7 = document.querySelector('.i-7').value;
  let outStr7 = '';
  while (i7 > -1) {
    outStr7 += i7 + ' ';
    i7--;
  }
  document.querySelector('.out-7').innerHTML = outStr7;
}
document.querySelector('.b-7').onclick = t7;


8
function t8() {
  let i81 = document.querySelector('.i-81').value;
  let i82 = document.querySelector('.i-82').value;
  i82++
  let outStr8 = '';
  while (i81 < i82) {
    outStr8 += i81 + ' ';
    i81++;
  }
  document.querySelector('.out-8').innerHTML = outStr8;
}
document.querySelector('.b-8').onclick = t8;


9
function t9() {
  let i91 = document.querySelector('.i-91').value;
  let i92 = document.querySelector('.i-92').value;
  let outStr9 = '';
  if (i91 > i92) {
    i91++
    while (i91 > i92) {
      outStr9 += i92 + ' ';
      i92++;
    }
    document.querySelector('.out-9').innerHTML = outStr9;
  } else {
    i92++
    while (i91 < i92) {
      outStr9 += i91 + ' ';
      i91++;
    }
    document.querySelector('.out-9').innerHTML = outStr9;
  }
}
document.querySelector('.b-9').onclick = t9;


10
function t10() {
  let outStr10 = '';
  let a10 = 1949;
  while (a10 < 2001) {
    a10++;
    if (a10 % 2 == 0) {
      outStr10 += a10;
    } else {
      outStr10 += " ";
    }
  }
  document.querySelector('.out-10').innerHTML = outStr10;
}
document.querySelector('.b-10').onclick = t10;


11
function t11() {
  let outStr11 = '';
  let div11 = document.querySelectorAll('.div-11');
  let i11 = 0;
  while (i11 < div11.length) {
    outStr11 += div11[i11].textContent + ' '; 
    i11++;
  }
  document.querySelector('.out-11').innerHTML = outStr11;
}
document.querySelector('.b-11').onclick = t11;


12
function t12() {
  let outStr12 = '';
  let div12 = document.querySelectorAll('.div-12');
  let i12 = 0;
  while (i12 < div12.length) {
    outStr12 += div12[i12].style.backgroundColor = 'orange';
    i12++;
  }
}
document.querySelector('.b-12').onclick = t12;


13
function t13() {
  let outStr13 = '';
  let i13 = document.querySelectorAll('.i-13');
  let a13 = 1;
  while (a13 <= i13.length) {
    outStr13 += a13 + ' ' + i13[a13 - 1].value;
    outStr13 += '<br>';
    a13++;
  }
  document.querySelector('.out-13').innerHTML = outStr13;
}
document.querySelector('.b-13').onclick = t13;


14
function t14() {
  let outStr14 = '';
  let i14 = document.querySelectorAll('.i-14');
  let a14 = 0;
  while (a14 < i14.length) {
    if (i14[a14].checked) {
      outStr14 += i14[a14].value;
    }
    a14++;
  }
  document.querySelector('.out-14').innerHTML = outStr14;
}
document.querySelector('.b-14').onclick = t14;


15
function t15() {
  let outStr15 = '';
  let a15 = 11;
  let a155 = -1;
  while (a15 > 0) {
    a15--;
    a155++;
    outStr15 += ' ' + a15 + ' ' + a155;
  }
  document.querySelector('.out-15').innerHTML = outStr15;
}
document.querySelector('.b-15').onclick = t15;