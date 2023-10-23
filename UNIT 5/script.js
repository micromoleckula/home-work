//1
let out1 = ' ';
document.querySelector('.btn-1').onclick = () => {
  console.log(true)
  for (let i = 1; i < 51; i++) {
    out1 += i + " ";
  }
  document.querySelector('.out-1').innerHTML = out1;
}

//2
let out2 = ' ';
document.querySelector('.btn-2').onclick = () => {
  console.log(true)
  for (let i = 2; i < 123; i += 2) {
    out2 += i + " ";
  }
  document.querySelector('.out-2').innerHTML = out2;
}

//3
let out3 = ' ';
document.querySelector('.btn-3').onclick = () => {
  console.log(true)
  for (let i = 25; i > 6; i -= 1) {
    out3 += i + " ";
  }
  document.querySelector('.out-3').innerHTML = out3;
}

//4
let out4 = ' ';
document.querySelector('.btn-4').onclick = () => {
  console.log(true)
  for (let i = 77; i > 34; i -= 3) {
    out4 += i + "_";
  }
  document.querySelector('.out-4').innerHTML = out4;
}

//5
let out5 = ' ';
document.querySelector('.btn-5').onclick = () => {
  console.log(true)
  for (let i = 1; i % 18; i += 1) {
    if (i % 2 == 0) {
      out5 += i + "_**";
    } else {
      out5 += i + "_*";
    }
  }
  document.querySelector('.out-5').innerHTML = out5;
}

//6
let out6 = ' ';
document.querySelector('.btn-6').onclick = () => {
  console.log(true)
  for (let i = 0; i < 6; i += 1) {
    out6 += '******<br>';
  }
  document.querySelector('.out-6').innerHTML = out6;
}

//7
let out7 = ' ';
document.querySelector('.btn-7').onclick = () => {
  console.log(true)
  let i7 = document.querySelector('.i-7').value;
  for (let i = i7; i > -1; i -= 1) {
    out7 += i + ' ' ;
  }
  document.querySelector('.out-7').innerHTML = out7;
}

//8
document.querySelector('.btn-8').onclick = () => {
  console.log(true)
  document.querySelector('.out-8').innerHTML = '<input type = "text" value = " " class = "i-81">' + '<br>' + '<div class = "out-81"></div>' + '<button class = "b-81">Push</button>';
  document.querySelector('.b-81').onclick = () => {
    document.querySelector('.out-81').innerHTML = document.querySelector('.i-81').value;
  }
}