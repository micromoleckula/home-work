let d1 = [32, 'best', 66, 'best'];

function showArr(elementClass, array) {
  document.querySelector(elementClass).textContent = array;
}

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









