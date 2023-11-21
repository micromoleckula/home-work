//1
document.querySelector('.btn-1').onclick = () => {
  alert('1');
} 

//2

document.querySelector('.i-2').onclick = () => {
  alert('2');
}

//3
document.querySelector('.p-3').onclick = () => {
  alert('3');
}

//4
document.querySelector('.b-4').onclick = () => {
  let checkBox4 = document.querySelector('.i-4');
  if (checkBox4.checked) {
    document.querySelector('.out-4').innerHTML = checkBox4.checked;
  } else {
    document.querySelector('.out-4').innerHTML = checkBox4.checked;
  }
}

//5
document.querySelector('.b-5').onclick = () => {
  let checkBox5 = document.querySelector('.i-5');
  if (checkBox5.checked) {
    document.querySelector('.out-5').innerHTML = checkBox5.value;
  } else {
    document.querySelector('.out-5').innerHTML = checkBox5.checked;
  }
}

//6
document.querySelector('.b-6').onclick = () => {
  document.querySelector('.out-6').innerHTML = document.querySelector('.i-6').value;
}

//7
document.querySelector('.b-7').onclick = () => {
  let pass7 = document.querySelector('.i-7').value;
  if (pass7.length >= 6 && pass7.length <= 6) {
    document.querySelector('.out-7').innerHTML = 'Пароль больше или равен 6'
  } else {
    document.querySelector('.out-7').innerHTML = 'Пароль меньше или равен 6'
  }
}

//8
document.querySelector('.b-8').onclick = () => {
  document.querySelector('.out-8').innerHTML = '<input type="text" value="" class="i-81"></input> <button class="b-81">Push</button';
  document.querySelector('.b-81').onclick = () => {
    document.querySelector('.out-81').innerHTML = document.querySelector('.i-81').value;
  }
}

//9
document.querySelector('.b-9').onclick = () => {
  let r9 = document.querySelector('.i-9');
  if (r9.checked) {
    document.querySelector('.out-9').innerHTML =  document.querySelector('.i-9').value;
  } else {
    document.querySelector('.out-9').innerHTML = '0';
  }
}

//10
document.querySelector('.b-10').onclick = () => {
  document.querySelector('.b-10').style.backgroundColor = document.querySelector('.i-10').value;
}

//11
document.querySelector('.b-11').onclick = () => {
  document.querySelector('.i-111').value = document.querySelector('.i-11').value;
}

//12
document.querySelector('.b-12').onclick = () => {
  document.querySelector('.out-12').innerHTML = document.querySelector('.i-12').value;
}

//13
document.querySelector('.i-13').oninput = () => {
  document.querySelector('.out-13').innerHTML = document.querySelector('.i-13').value;
}

//14
document.querySelector('.i-14').oninput = () => {
  document.querySelector('.out-14').innerHTML = document.querySelector('.i-14').value;
}

//15
document.querySelector('.b-15').onclick = () => {
  document.querySelector('.i-15').innerHTML = document.querySelector('.i-155').value;
  document.querySelector('.out-15').innerHTML = document.querySelector('.i-155').value;
}

//16
document.querySelector('.b-16').onclick = () => { 
  document.querySelector('.out-16').innerHTML = document.querySelector('.i-16').value; 
}

//17
function onchangeseveteen() { 
  document.querySelector('.out-17').innerHTML = document.querySelector('.i-17').value; 
}

//18
function onchangeeighteen() { 
  document.querySelector('.i-188').value = document.querySelector('.i-18').value; 
}

//19
document.querySelector('.b-19').onclick = (event) => {
  event.preventDefault();
  document.querySelector('.out-19').innerHTML = 
  document.querySelector('.i-191').value + ", " + document.querySelector('.i-192').value;
}

//20
document.querySelector('.b-20').onclick = (event) => { 
  event.preventDefault();
  let text20 = document.querySelector('input[name="text-input"]').value;
  let pass20 = document.querySelector('input[name="password-input"]').value;
  document.querySelector('.out-20').innerHTML = text20 + ' ' + pass20;
}
