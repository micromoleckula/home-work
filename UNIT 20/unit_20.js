
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

document.querySelector('.i-1').onkeypress = function t1(event) {
    console.log(event);
    document.querySelector('.out-1').textContent = event.key
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

document.querySelector('.i-2').onkeypress = function t2(event) {
    console.log(event);
    document.querySelector('.out-2').textContent = event.keyCode
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

document.querySelector('.i-3').onkeypress = function t3(elem) {
    let charCode = elem.which || elem.keyCode;
    if (!isNaN(String.fromCharCode(charCode))) {
        document.querySelector('.out-3').textContent = 'true'
    } else {
        document.querySelector('.out-3').textContent = 'false'
    }
}

// ваше событие здесь!!!
// 32
// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

document.querySelector('.i-4').onkeypress = function t4(event) {
    console.log(event);
    let char = event.key;
    document.querySelector('.out-4').textContent += char.toLowerCase();
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

document.querySelector('.i-5').onkeypress = function t5(event) {
    console.log(event);
    let char = event.key;
    document.querySelector('.out-5').textContent += char.toUpperCase();
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

document.querySelector('.i-6').onkeypress = function t6(event) {
    let char = event.key.toLowerCase();
    document.querySelector('.i-6').value += char;
    event.preventDefault(); // Чтобы не добавлялся второй раз символ в input
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

document.querySelector('.i-7').onkeypress = function t7() {
    const a7 = [3, 4, 6, 3, 8, 'f'];
    const randomIndex = Math.floor(Math.random() * a7.length); // Генерируем случайный индекс
    const randomChar = a7[randomIndex]; // Получаем случайный символ из массива
    document.querySelector('.out-7').textContent = randomChar; // Выводим случайный символ в .out-7
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

document.querySelector('.i-8').onkeypress = function t8(event) {
    let charCode = event.charCode;
    let char;

    if (charCode === 105) { // i
        char = '1';
    } else if (charCode === 111) { // o
        char = '0';
    } else if (charCode === 108) { // l
        char = '7';
    } else {
        char = String.fromCharCode(charCode); // Оставляем символ без изменений
    }

    document.querySelector('.out-8').textContent += char;
    event.preventDefault(); // Чтобы символ не добавлялся дважды
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let arrDw = 0;
let d9 = document.querySelector('.out-9');

document.querySelector('.i-9').onkeydown = function t9(event) {
    if (event.key === "ArrowDown") {
        arrDw++;
        d9.textContent = arrDw;
    }
};


// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let wid10 = 75;
let hei10 = 75;
let d10 = document.querySelector('.div-10');

document.querySelector('.i-10').onkeydown = function t10(event) {
    if (event.key === "ArrowUp") {
        hei10--;
        d10.style.height = hei10 + 'px';
    } else if(event.key === "ArrowDown") {
        hei10++;
        d10.style.height = hei10 + 'px';
    } else if(event.key === "ArrowLeft") {
        wid10--;
        d10.style.width = wid10 + 'px'; // Исправление здесь
    } else if(event.key === "ArrowRight") {
        wid10++;
        d10.style.width = wid10 + 'px'; // Исправление здесь
    } else {
        console.log(false)
    }
};

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {
    
}

// ваше событие здесь!!!

