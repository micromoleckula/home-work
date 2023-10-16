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
    out2.innerHTML = a21.value;
  } else {
    out2.innerHTML = a22.value;
  }
}

//3
let a31 = document.querySelector('.i-3');
let a32 = document.querySelector('.i-3-3');
let b3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');

b3.onclick = () => {
  let a311 = parseFloat(a31.value);
  let a322 = parseFloat(a32.value);
  if (a311 > a322) {
    out3.innerHTML = a31.value;
  } else {
    out3.innerHTML = a32.value;
  }
}

//4
let i4 = document.querySelector('.i-4');
let b4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

b4.onclick = () => {
  let num4 = parseFloat(i4.value);
  if (num4 >= 18) {
    out4.innerHTML = 'Чиназес';
  } else {
    out4.innerHTML = 'лошара';
  }
}

//5
let i5 = document.querySelector('.i-5');
let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');

b5.onclick = () => {
  let num5 = parseFloat(i5.value)
  if (num5 > -1) {
    out5.innerHTML = 0;
  } else {
    out5.innerHTML = 'm';
  }
}

//6
let i6 = document.querySelector('.i-6');
let b6 = document.querySelector('.b-6');
let out6 = document.querySelector('.out-6');

b6.onclick = () => {
  if (i6.value % 2 == 0) {
    out6.innerHTML = 'even';
  } else {
    out6.innerHTML = 'odd';
  }
}

//7
let a71 = document.querySelector('.i-7');
let a72 = document.querySelector('.i-7-7');
let b7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');

b7.onclick = () => {
  let a711 = parseFloat(a71.value);
  let a722 = parseFloat(a72.value);
  let num7 = Math.pow(a711, a722);
  out7.innerHTML = num7;
}

//8
let sel8 = document.querySelector('.select-8');
let b8 =  document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');

b8.onclick = () => {
  let num8 = parseFloat(sel8.value);
  switch (num8) {
    case 1:
      out8.innerHTML = 'one';
      break;
    case 2:
      out8.innerHTML = 'two';
      break;
    case 3:
      out8.innerHTML = 'three';
      break;
  }
}

//9
let i9 = document.querySelector('.i-9');
let b9 =  document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');

b9.onclick = () => {
  let num9 = parseFloat(i9.value);
 
  if (65 <= num9 || 65 <= num9){
    out9.innerHTML = 0;
  }
  else if (44 <= num9 || 64 <= num9) {
    out9.innerHTML = 3;
  } 
  else if (33 <= num9 || 43 <= num9) {
    out9.innerHTML = 2;
  } 
  else if (1 <= num9 || 32 <= num9) {
    out9.innerHTML = 1;
  } 
}

//10
let sel10 = document.querySelector('.select-10');
let b10 =  document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

b10.onclick = () => {
  let num10 = parseFloat(sel10.value);
  switch (num10) {
    case 1:
      out10.innerHTML = sel10.value;
      break;
    case 2:
      out10.innerHTML = sel10.value;
      break;
    case 3:
      out10.innerHTML = sel10.value;
      break;
  }
}

//11
let sel11 = document.querySelector('.select-11');
let b11 =  document.querySelector('.b-11');
let out11 = document.querySelector('.out-11');
let out111 = document.querySelector('.out-11');

b11.onclick = () => {
  let num11 = parseFloat(sel11.value);
  switch (num11) {
    case 1:
      out11.innerHTML = sel11.value;
      break;
    case 2:
      out11.innerHTML = sel11.value;
      break;
    case 3:
      out11.innerHTML = sel11.value;
      break;
  }
  out111.innerHTML = sel11.options[sel11.selectedIndex].text;
}

