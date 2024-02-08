
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

document.querySelector('.div-1').onclick = function t1() {
  document.querySelector('.out-1').textContent = this.textContent;
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let log = document.querySelector(".div-2");
document.addEventListener("click", logKeyt2);

function logKeyt2(e) {
  log.textContent = `The alt key is pressed: ${e.altKey}`;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

document.querySelector('.div-3').onclick = function t3() {
  document.querySelector('.div-3').style.width = w3 + 'px'
  w3 = w3 + 5
  document.querySelector('.out-3').textContent = w3;
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

document.querySelector('.div-4').ondblclick = function t4() {
  document.querySelector('.out-4').textContent = this.textContent;
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

document.querySelector('.div-5').ondblclick = function t5() {
  let div5 = document.querySelector('.div-5') 
  if (div5.classList.contains('active')) {
    div5.classList.remove('active');
  } else {
    div5.classList.add('active');
  }
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

document.querySelector('.div-6').ondblclick = function t6() {
  let ul6 = document.querySelector('.ul-6');
  if (ul6.classList.contains('hide')) {
    ul6.classList.remove('hide');
  } else {
    ul6.classList.add('hide');
  }
};


// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

document.querySelector('.div-7').oncontextmenu = function t7(event) {
  event.preventDefault();
  let div7 = document.querySelector('.div-7');
  if (div7.classList.contains('active')) {
    div7.classList.remove('active');
  } else {
    div7.classList.add('active');
  }
};

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

document.querySelector('.ch-8').onchange = function() {
  if (this.checked) {
    document.addEventListener('contextmenu', preventRightClick);
  } else {
    document.removeEventListener('contextmenu', preventRightClick);
  }
};

function preventRightClick(event) {
  event.preventDefault();
}


// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

document.querySelector('.div-9').oncontextmenu = function t9(event) {
  
  event.preventDefault();
  let div9 = document.querySelector('.div-9');
  let img9 = div9.querySelector('img');
  if (img9.src = ('img/1.png')) {
    img9.src = ('img/2.png');
  }
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

document.querySelector('.div-10').addEventListener('mouseenter', function() {
  let img10 = this.querySelector('img');
  img10.src = 'img/2.png';
});




// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
  let div11 = document.querySelector('.div-11');
  let img11 = div11.querySelector('img');

  div11.addEventListener('mouseenter', function() {
    img11.src = 'img/2.png';
  });

  div11.addEventListener('mouseleave', function() {
    img11.src = 'img/1.png';
  });
}

t11();

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

document.querySelector('.div-12').onmousedown = () => {
  document.querySelector('.div-12').classList.add('active');
  console.log(true)
}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector('.div-13').onmousedown = () => {
  document.querySelector('.div-13').classList.add('active');
  console.log(true)
}

document.querySelector('.div-13').onmouseup = () => {
  document.querySelector('.div-13').classList.remove('active');
  console.log(true)
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

document.querySelector('.b-14').onclick = function t14() {
  document.querySelector('.div-14').classList.add('active');
}
// document.querySelector('.t-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

document.querySelector('.div-15').onmousemove = function t15() {
  document.querySelector('.div-15').textContent++
}
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
document.querySelector('.b-17_on').onclick = function t17On() {
  // Восстанавливаем обработчик события mousemove
  let w16 = 75
  document.querySelector('.div-16').onmousemove = function t16() {
    document.querySelector('.div-16').style.width = w16 + 'px';
    w16++;
  };
}
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

document.querySelector('.b-17_off').onclick = function t17Off() {
  // Убираем обработчик события mousemove
  document.querySelector('.div-16').onmousemove = null;
}

// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

document.querySelector('.div-18').onmouseenter = function t18() {
  let wid18 = document.querySelector('.div-18').offsetHeight;
  document.querySelector('.div-18').textContent = wid18;
}
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

document.querySelector('.div-19').onmouseout = function t19(event) {
  console.log(event)
  let wid19 = document.querySelector('.div-19').className;
  document.querySelector('.div-19').textContent = wid19;
}
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let v20 = 0
document.querySelector('progress').onmousemove = function t20(event) {
  console.log(event)
  document.querySelector('progress').value = v20
  v20++
}
// ваше событие здесь!!!