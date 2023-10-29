1
let out1 = document.querySelector('.out-1');
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 3; k++) {
    out1.innerHTML += '*';
    }
  out1.innerHTML += '_';
}

2
let out2 = document.querySelector('.out-2');
for (let i = 1; i < 4; i++) {
  out2.innerHTML += i + '<br>';
  for (let k = 0; k < 1; k++) {
    out2.innerHTML += '*_*_*_<br>';
    }
}

3
let out3 = document.querySelector('.out-3');
for (let i = 0; i < 4; i++) {
  for (let k = 0; k < 3; k++) {
    out3.innerHTML += '*_';
    }
  out3.innerHTML += '<br>';
}

4
let out4 = document.querySelector('.out-4');
for (let i = 1; i < 4; i++) {
  out4.innerHTML += i + '_';
  for (let k = 1; k < 6; k++) {
    out4.innerHTML += k + ' ';
    }
}

5
let out5 = document.querySelector('.out-5');
for (let i = 1; i < 4; i++) {
  out5.innerHTML += '<br>';
  for (let k = 0; k < 6; k++) {
    out5.innerHTML += k % 2 === 0 ? '1' : '0';
    }
}

6
let out6 = document.querySelector('.out-6');
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 6; k++) {
    if (k === 0 || k === 4) {
      out6.innerHTML += '1';
    } else if (k === 1 || k === 3) {
      out6.innerHTML += '0';
    } else {
      out6.innerHTML += 'x';
    }
  }
  out6.innerHTML += '<br>';
}

7
let out7 = document.querySelector('.out-7');
for (let i = 0; i < 4; i++) {
  for (let k = 0; k < 4; k++) {
    if (k <= i) {
      out7.innerHTML += '*';
    }
  }
  out7.innerHTML += '<br>'
}

8
let out8 = document.querySelector('.out-8');
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < 5; k++) {
    if (k >= i) {
      out8.innerHTML += '*';
    }
  }
  out8.innerHTML += '<br>'
}

9
let out9 = document.querySelector('.out-9');
for (let i = 0; i < 6; i++) {
  for (let k = 1; k < 6; k++) {
    if (k <= i) {
      out9.innerHTML += k + " ";
    }
  }
  out9.innerHTML += '<br>'
}

10
let out10 = document.querySelector('.out-10');
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < 11; k++) {
    let number = (i * 10 + k);
    if (number < 10) {
      out10.innerHTML += '0' + number + ' ';
    } else {
      out10.innerHTML += number + ' ';
    }
  }
  out10.innerHTML += '<br>';
}