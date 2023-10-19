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