// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable
// const clients = ["Mango", "Poly", "Ajax"];
// const string = "script";

// Імутабельні
// const firstEl = string[0];
// string[0] = "p"
// console.log(string);

// Мутабельні
// const firstEl = clients[0]
// clients[0] = "Kiwi"
// console.log(clients);


// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами Jazz і Blues.
// Додайте "Rock'n'roll" в кінець.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// genres.push("Rock'n'roll")// push додає один або декілька елементів в кінець масиву
// const firstEl = genres[0];
// const lastEl = genres[genres.length - 1];
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// const firstELDelete = genres.shift() //Видаляє перший елемент масиву та повертає його ЗНАЧЕННЯ
// const firstELDelete = genres.splice(0,1) // Видаляє елемент за вказаним індексом то повертає видалений елемент в якості масиву
// genres.unshift("Country","Reggae")// unshift додає один або декілька елемнтів на початок масиву
// genres.splice(0,0,"Country","Reggae")// splice може додавати елемент або декілька на вказану позицію
// console.log(genres);




// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються в змінній величині у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const valueToArr = values.split(' ')
// const first = Number(valueToArr[0]);
// const last = valueToArr[valueToArr.length -1]
// const last = Number(valueToArr[1]);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// window.isNaN// примусово не переводить до типу даних Number

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Number.isNaN// примусово ПЕРЕВОДИТЬ до типу даних Number


// console.log(Number.isNaN('8 11'));
// if (!isNaN(first) && !isNaN(last)) {
//     console.log('first', first);
//     console.log('last', last);
//     console.log(first * last);
// }else{
//     console.log('Невірні дані');
// }


// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів має починатися з першого.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0, number = 1; i < fruits.length; i += 1, number+=1) {
//     console.log(`Порядковий номер ${number}`, fruits[i]);
// }




// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Kate';
// const phones = '89001234567,89001112233,890055566377';

// const namesToArr = names.split(',');
// const phonesToArr = phones.split(',')

// for (let i = 0; i < namesToArr.length; i += 1) {
//     if (i < phonesToArr.length) {
//         console.log(`${namesToArr[i]} має номер телефону ${phonesToArr[i]}`);
//     }else {
//         console.log(`${namesToArr[i]} немає номер телефону `);
//     }
// }


// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const strToArr = string.split(' ');
// strToArr.splice(0,1)
// strToArr.pop()// видаляє останій елемент масиву
// strToArr.splice(strToArr.length - 1,1)
// strToArr.splice(-1, 1)
// strToArr.splice(-1)
// console.log(strToArr);




// Example 6 - Масиви та рядки
// Напиши скрипт, який «розвертає» рядок (зворотній порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const strToArr = string.split('');
// // reverse розвертає масив
// const reverse = strToArr.reverse();
// const arrToStr = reverse.join('')
// console.log(arrToStr);


// const string = 'Welcome to the future';
// const strToArr = string.split('');
// const arrToStr = strToArr.reverse().join('')
// console.log(arrToStr);


// const string = 'Welcome to the future';
// const arrToStr = string.split('').reverse().join('');
// console.log(arrToStr);



// Example 7 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код має працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
// const numbers = [101, 78, 12, 76, 5, 11, 9];
// let min = numbers[0]; //101
// for (const number of numbers) {
//     if (number < min){
//         min = number
//     }
// }

//  0,1,2,3,4,5,6 до 7
//  1,2,3,4,5,6 до 7

// for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] < min) {
//         min = number
//     }
// }





// const arr1 = [0,1,2].includes(0) === true
// const arr = [5,1,2].includes(0) === false


// const arr2 = [0,14,2].indexOf(14) === 1
// const arr3 = [0,19,2].indexOf(14) === -1