// 1
// Використовуючи конструкцію if..else і prompt, напиши код, який запитуватиме:
//"Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Вірно!", інакше - "Не знаєте? ECMAScript!"

// const input = prompt("Яка офіційна назва JavaScript?");
// if (input === 'ECMAScript') {
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }



// 2
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
//формату "14 год. 26 хв.". Якщо значення змінної хвилин дорівнює 0, то виводь рядок
//"14 год.", без хвилин.

// const hours = 14;
// const minutes = 11; //(0 === false)
// let timestring;
//     // console.log(Boolean(0));
//     // console.log(!!0);
// if (minutes) { //minutes !== 0
//     timestring = `${hours} год. ${minutes}  хв.`
// } else {
//     timestring = `${hours} год.`
// }

// console.log(timestring);


//3
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".

// const userInput = prompt('Введіть число');
// const toNumber = Number(userInput)
// console.log(Boolean(userInput)); '0'
// console.log('userInput', userInput);
// console.log('userInput to boolean', !!userInput);
// console.log("toNumber", toNumber);
// console.log("toNumber to boolean", !!toNumber);
//     true && true
//     true || false
//     false || true
// if (toNumber === 0 && userInput) { //userInput === 0
//     console.log("Це нуль");
// } else if (toNumber < 0) {
//     console.log("Це від'ємне число");
// } else if (toNumber > 0) {
//     console.log("Це позитивне число");
// } else {
//     console.log('Значення введено не вірно');
// }


//4 (endsWith)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// const isEnd = link.endsWith('/')

// if(isEnd){

// }else{
//     link +="/";
// }

// // if (!isEnd) {
// //     // link = link + "/";
// //     link +="/";
// // }

// console.log(link);



// console.log(link);

//5 (includes та логічне І)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.


//6
// Виконай рефакторинг коду попередньої задачі, використовуючи тернарний оператор


// 7
// Напишіть скрипт, який буде виводити в консоль браузера рядок залежно від значення змінної години.
// Якщо значення змінної години:
// менше 17, виводи строку "Очікує"
// більше або дорівнює 17 і меньше або дорівнює 24, виводить рядок "Закінчується"
// більше 24 , виводить рядок "Прострочено"
// const hours = 17;
// let message;


// 8
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.
// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
// const daysUntilDeadline = 5;

// 9
// Виконай рефакторинг коду попередньої задачі, використовуючи switch.
// https://medium.com/trabe/using-switch-true-in-javascript-986e8ad8ae4f
// const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//     case 0:
//         console.log("Сьогодні");
//         break;
//     case 1:
//         console.log("Завтра");
//         break;
//     case 2:
//         console.log("Післязавтра");
//         break
//     default:
//         console.log("Дата в майбутньому");
// }












// 10
// Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
// const max = 100;
// const min = 19;

// for (let i = min; i <= max; i += 1) {
//     if (!(i % 5)){//i % 5 === 0 //!(i % 5)
//         console.log(i);
//     }
//     // console.log(i);
// }














// 11
// Напиши скрипт, який запитуватиме логін за допомогою prompt і повертатиме alert

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто відміна - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "qwerty123", то вивести рядок "Доброго дня!"
// Інакше виводити рядок "Невірний пароль"