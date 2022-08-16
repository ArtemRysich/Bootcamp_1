
// 6 значень як завжди повертають false
// false 0 '' NaN null undefined
// console.log(!!'');//false
// console.log(!!'.');//true
// console.log(!!' ');//true
//&& в умові потребує і зліва і зправа від себе true, повертає перший false або останій true
// const response = 0 && 1
// !! ідентично Boolean()
// console.log('0', !!0); //console.log('0', Boolean(0))

// if (0 && 1) {  =>  0 && 1 => 0 => false
//     console.log('Виконався if');
// } else {
//     console.log('Виконався else');
// }

// const value = 5;
//Така нотаціє сигналізує про погане знання if та значеннь які повертають false
// if(Boolean(value) === true){

// }

// Хороший приклад
// if(value){

// }
// let Hello;
// console.log(0 && 1)
// console.log([1,2,3] && Hello);
// console.log([1,2,3] && 'Hello');
// console.log([1,2,3] && '');
// console.log('' && [1,2,3]);
// ----------------------------------------------------
// ||

// console.log(0 || 1)
// console.log(0 || 1 || [1, 2, 3])
// console.log(null || 0 || undefined);

// !

// true => !true = false

// const arr = [1, 2, 3, 4, 5];
// const response = arr.includes(9)
// console.log(response);

// // if (response) {

// // }else{
// //     console.log('не присутній');
// // }

//  if (!response) {
//     console.log('не присутній');
//  }


// Розглянути патерн «Раннє повернення»
// const obj = {}
// console.log(typeof obj === 'object');

// function foo(a, b, c) {
//     if (typeof c === 'number') {
//         return true
//     }
//     if (typeof b === 'string') {
//         return true
//     }
//     if (typeof a === 'object') {
//         return true
//     }
//     return false
// }

// console.log(foo(0, '1', [1, 2, 3]));


// Розглянути деструктуризацію в циклах



// const obj = {
//     produtName: 'Iphone',
//     price: 1000,
//     points: ['Citrus', 'Rozetka', 'Ipeople']
// }

// for(const point of obj.points){
// console.log(point);
// }


// const obj = {
//     produtName: 'Iphone',
//     points: [{
//         name: 'Citrus',
//         price: 1100,
//         model: '13'
//     }, {
//         name: 'Rozetka',
//         price: 1200,
//         model: '11',
//         state: 'Used'
//     }, {
//         name: 'Ipeople',
//         price: 1000,
//         model: '12'
//     }]
// }

// for(const point of obj.points){
//     console.log(point);
//     }
// const {
//     points
// } = obj

// for (const point of points) {
//     const {
//         name,
//         price
//     } = point
//     console.log(name, price);

// }
//point
// for (const {
//         name,
//         price,
//         model,
//         state
//     } of obj.points) {
//     console.log(state);

// }
// const a = [{
//     name: 'Name'
// }, {
//     name: 'Name1'
// }, {
//     name: 'Name2'
// }]
// const b = a[0];
// console.log(b);
// b.name = 'Hello'
// console.log(a);

//Не працює
// for (let {state} of obj.points) {
//     if (!state) {
//     state = 'New'
//     }

// }

// console.log(obj);

//Працює
// for (let point of obj.points) {
//     if (!point.state) {
//         point.state = 'New'
//     }
// }

// console.log(obj);
// Розглянути  патерн «Об'єкт параметрів»
// function foo({car,type,price,run,currency}) {
// console.log(price + currency);
// }
// foo({
//     car: 'Honda',
//     type: 'Accord',
//     price: 10000,
//     run: 196000,
//     currency : '$'
// })


// Детальніше про "break" і "continue". Коли і що потрібно використовувати? А коли достатньо лише "return"?



// const arr = []

// function add() {
//     let total = 0;
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i += 1) {
//         total += arguments[i];
//         if (total < 20) {
//             break;
//         }
//         console.log(total);
//     }
//     console.log('hello world');
//     return total
// }
// console.log(add(1, 33, 52, 67, 12, 5));