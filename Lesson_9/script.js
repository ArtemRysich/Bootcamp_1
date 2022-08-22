// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю із властивості stones.
// 'use strict'
const chopShop = {
    stones: [{
            name: 'Emerald',
            price: 1300,
            quantity: 4
        },
        {
            name: 'Diamond',
            price: 2700,
            quantity: 3
        },
        {
            name: 'Sapphire',
            price: 1400,
            quantity: 7
        },
        {
            name: 'Ruby',
            price: 800,
            quantity: 2
        },
    ],

    calcTotalPrice(stoneName) {
        const findStone = (stoneName) => this.stones.find(({
            name
        }) => name === stoneName);
        const stone = findStone(stoneName);
        const result = stone.price * stone.quantity;
        return result
    },
};

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200


// const chopShop2 = {
//     stones: [{
//             name: 'sdadgf',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'adsfdgfg',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'afdsgfdhgfh',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'asdfg',
//             price: 800,
//             quantity: 2
//         },
//     ],
// }
// chopShop.calcTotalPrice.call(chopShop2)
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600



// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.

// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//     },
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return Date.now();
//     }
// };

// console.log(
//     phonebook.add({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(phonebook);
// console.log(
//     phonebook.add({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );



// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//     a: null,
//     b: null,
//     read(a, b) {
//         this.a = a
//         this.b = b
//     },
//     add() {
//        return this.a + this.b
//     },
//     mult(){
//         return this.a * this.b
//     }
// };

// calculator.read(5, 10)
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());










// const foo = () => {
//     console.log(this);
// }

// const obj = {
//     test: this,
//     objA: {
//         testA: this,
//     },
//     hello: 'Hello world',
//     testFoo() {
//         foo()
//     }
// }
// obj.testFoo()
// console.log();
// obj.foo()
// const obj = {
//     name: "My name"
// }

// function foo(a,b) {
//     console.log(this, a,b);
// }


// const test = foo.bind(obj)
// test()
// test(3,4)
// test(31,42)

// foo(444,555)