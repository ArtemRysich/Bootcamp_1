// Продублювати всі посилання
// Виведіть на екран загальну кількість яблук і винограду. Різницю яблук та винограда.
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)



// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// students += 50 ;

// console.log(students);




// Розбери пріоритет операторів в інструкції 
//  значення змінної result.
// const result = 108 + 223 - 2 * 5;
//                 // 331     -      //10 = 321

// console.log(result);


// Напиши скрипт, який виводить у консоль заокруглені
//  вгору/вниз і т.д. Значення змінної value.
//  Використовуй методи Math.floor(), Math.ceil()
// та Math.round(). Перевірте, що буде в консолі при
// значеннях 27.3 і 27.9.

//Math.floor метод який округляє значення завжди до меншого цілого числа
// console.log(Math.floor(27.3));
// console.log(Math.floor(27.9));

// Math.ceil метод який завжди округляє до більшого цілого числа
// console.log(Math.ceil(27.3));
// console.log(Math.ceil(27.9));

// Math.round метод який округляє по матиматичним принципам
// console.log(Math.round(27.499));
// console.log(Math.round(27.9));



// // Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`; // Новий синтаксис
// const message = companyName + ' has ' + (repairBots + defenceBots) + " bots in stock" // Старий синтаксис
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// const message = 1 + 2 + 'some value' + 7;
// // "3some value7"
// console.log(typeof message);


// const message = "1" + 2 + 'some value' + 7;
// '12some value7'
// console.log(message);




// Яким буде результат виразів?
// Логічний оператор "І" (&&) повертає перший false або останій true
// console.log(true && 3);//3

// console.log(false && 3);//false

// console.log(true && 4 && 'kiwi');//'kiwi'

// console.log(true && 0 && 'kiwi');//0 (0 в булевому перетворені повертає false)

// // Логічний оператор "АБО" (||) повертає перший true або останій false
// console.log(true || 3);//true

// console.log(true || 3 || 4);//true

// console.log(true || false || 7);//true

// console.log(null || 2 || undefined);//2 (2 в булевому перетворені повертає true)

// console.log((1 && null && 2) > 0);//false

// console.log(null || (2 && 3) || 4);//3 (null в булевому перетворені повертає false)

// (2 && 3)   (2 в булевому перетворені повертає true)
//            (3 в булевому перетворені повертає true)
// так як внас вираз (2 && 3) знаходиться серед двох операторів || ми 3 приводимо до буля
// повертаємо перше true







// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 2000000;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60; // 70/60= 1  70%60 = 10

// // console.log(minutes);
// // `${hours}`
// // hours.toString()
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
// const doubleDigitHours = hours.toString().padStart(2, 0); //hours.toString().padStart(3,'hello'); //  'he' + '1' = "he1"
// console.log(doubleDigitHours);

// const doubleDigitMinutes = minutes.toString().padStart(2, 0);
// console.log(doubleDigitMinutes);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// const numberCard = '1234 5678 1234 5678'
// // const test  = numberCard.slice(0,9)
// // const secureNumber = numberCard.slice(0,-4).padEnd(19,"*")
// const secureNumber = numberCard.slice(0,-4).padEnd(numberCard.length,"*")
// // const secureNumber = test
// console.log(secureNumber);
