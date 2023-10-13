//1
let a = 7; 
let b = 9;
console.log(a * b)

//2
let two = document.querySelector('.two'); 
let c = 7; 
let d = 9; 
two.innerHTML = c / d;

//3
let three = document.querySelector('.three'); 
let e = 3;
let f = 5;
three.innerHTML = e + f;

//4
let four = document.querySelector('.four'); 
let e1 = '3';
let f1 = 5;
four.innerHTML = e1 + f1;

//5
let five = document.querySelector('.five'); 
let e2 = 3;
let f2 = 0;
five.innerHTML = e2 / f2;

//6
let six = document.querySelector('.six'); 
let e3 = 3;
let f3 = 'hello';
six.innerHTML = e3 + f3;

//7
let seven = document.querySelector('.seven'); 
let e4 = 3;
let f4 = 'hello';
seven.innerHTML = e4 * f4;

//8
let inputOne = document.querySelector('.input-one'); 
let btnOne = document.querySelector('.btn-one');
let eight = document.querySelector('.eight');

btnOne.onclick = function() {
  eight.innerHTML = inputOne.value;
}

//9
let inputTwo = document.querySelector('.input-two'); 
let btnTwo = document.querySelector('.btn-two');
let nine = document.querySelector('.nine');

btnTwo.onclick = function() {
  nine.innerHTML = inputTwo.value;
  inputTwo.value = '';
}

//10
let inputThree = document.querySelector('.input-three'); 
let btnThree = document.querySelector('.btn-three');
let ten = document.querySelector('.ten');

btnThree.onclick = function() {
  ten.innerHTML = +inputThree.value * 10;
  inputThree.value = '';
}

//11
let inputFour = document.querySelector('.input-four'); 
let btnFour = document.querySelector('.btn-four');
let eleven = document.querySelector('.eleven');
let elevenTwo = document.querySelector('.eleven-two');

btnFour.onclick = function() {
  eleven.innerHTML = inputFour.value;
  elevenTwo.innerHTML = +inputFour.value + 10;
  inputFour.value = '';

}

//12
let inputFive = document.querySelector('.input-five'); 
let inputFiveTwo = document.querySelector('.input-five-two');
let btnFive = document.querySelector('.btn-five');
let twelve = document.querySelector('.twelve');

btnFive.onclick = function() {
  twelve.innerHTML = 'Hello ' + inputFive.value + ' ' + inputFiveTwo.value;
  inputFive.value = '';
  inputFiveTwo.value = '';
}

//13
let inputSix = document.querySelector('.input-six'); 
let inputSixTwo = document.querySelector('.input-six-two');
let btnSix = document.querySelector('.btn-six');
let thirteen = document.querySelector('.thirteen');

btnSix.onclick = function() {
  thirteen.innerHTML = +inputSix.value + +inputSixTwo.value;
  inputSix.value = '';
  inputSixTwo.value = '';
}

//14
let inputSeven = document.querySelector('.input-seven'); 
let btnSeven = document.querySelector('.btn-seven');

btnSeven.onclick = function() {
  inputSeven.value = 'hello';
}

//15
let y = document.querySelector('.input-eight');
y.style.border = '2px solid red'

//16
let inputNine = document.querySelector('.input-nine'); 
let inputNineTwo = document.querySelector('.input-nine-two');
let btnNine = document.querySelector('.btn-nine');
let sixteen = document.querySelector('.sixteen');

btnNine.onclick = function() {
  sixteen.innerHTML = +inputNine.value + +inputNineTwo.value;
  inputNine.value = '';
  inputNineTwo.value = '';
}





