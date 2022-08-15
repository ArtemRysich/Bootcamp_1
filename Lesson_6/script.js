// Розглянути rest в якості параметру замість псевдомасиву arguments

// function foo(...qwerty) {
//     console.log(qwerty);
// }
// foo(1, 2, 3, 4, 5)

// Розглянути spread для перетворення з псевдомасиву в масив

// function foo() {
//   console.log(arguments);
//   const arr = Array.from(arguments);
//   const arr1 = [...arguments]
//   console.log(arr1);
// }
// foo(1, 2, 3, 4, 5)

//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({weight : wie, height}) {
//     const weight = 100;
//     // console.log(obj.weight);
//     // const {
//     //     weight,
//     //     height
//     // } = obj
//     console.log(weight, height , wie);
//     // const numericWeight = Number(weight.replace(',', '.'));
//     // const numericHeight = Number(height.replace(',', '.'));
//     // return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));


//  Task 2 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300'
// });

//  Task 3 (Глибока деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({
//     companyName,
//     bots: {
//         repairBots: {
//             type1: repairType1,
//             type2: repairType2
//         },
//         defenceBots: {
//             type1: defenceType1,
//             type2: defenceType2
//         }
//     }
// }) {
// console.log(obj.bots.repairBots.type1);
// console.log(companyName);
// console.log('repairType1',repairType1);
// console.log('repairType2',repairType2);
// console.log('defenceType1',defenceType1);
// console.log('defenceType2',defenceType2);
// // console.log(bots); не доступний
// return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: {
//             type1: 150,
//             type2: 200
//         },
//         defenceBots: {
//             type1: 300,
//             type2: 200
//         },
//     }
// }));


// Task 4 (Деструктуризація)
// Напишу функцію щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({companyName, stock}) {
// console.log(companyName);
// console.log(stock);
// const values = Object.values(stock)
// console.log(values);
// let total = 0
// for(const value of values){
//    total += value
// }
// console.log(total);

// return `${companyName} has ${total} items in stock`
//   }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"

// Task 5 (spread)
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданою властивістю id, а також list зі значенням "default" якщо у partialContact немає такої властивості.

// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         list: "default",
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }


// Task 6 (rest)
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.


function transformUsername({
    firstName,
    lastName,
    ...props
}) {
    console.log(props);
    console.log(firstName);
    console.log(lastName);
    return {
        fullName: `${firstName} ${lastName}`,
        ...props
    }
}

console.log(
    transformUsername({
        id: 1,
        firstName: 'Jacob',
        lastName: 'Mercer',
        email: 'j.mercer@mail.com',
        friendCount: 40,
    }),
);

console.log(
    transformUsername({
        id: 2,
        firstName: 'Adrian',
        lastName: 'Cross',
        email: 'a.cross@hotmail.com',
        friendCount: 20,
    }),
);