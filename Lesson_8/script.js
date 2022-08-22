// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [{
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true
    },
    {
        make: 'Honda',
        model: 'accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false
    }
];




// Повертає масив такої самої довжини
// const onSale = cars.map(car => {
//     if(car.onSale){
//         return car
//     }
// })

// console.log(onSale);











//   Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.


// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getModels = arr => {
//     const models = arr.map(car => car.model)
//     return models
// };

// console.log(getModels(cars));
// console.log(cars);






// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним значенням властивості price залежно від переданої знижки (%).

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const makeCarsWithDiscount = (cars, discount) => {
//     const withDiscount = cars.map(car => {
//         const copyObj = {...car}
//         // console.log(car);
//         const disc = Math.round(car.price / 100 * discount)

//         copyObj.oldPrice = car.price
//         // console.log(disc);
//         copyObj.price -= disc
//         copyObj.discount = disc
//         return copyObj
//     })
//     return withDiscount
// };
// console.log('cars',cars);
// console.log(makeCarsWithDiscount(cars, 6));
// console.table(makeCarsWithDiscount(cars, 11));






// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.
// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const filterByPrice = (cars, threshold) => {
//     const response = cars.filter(({price}) => price < threshold)
//     return response
// };
// console.log(cars);
// console.log(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));






// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },


// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale )

// // console.log(cars);
// console.log(getCarsWithDiscount(cars));





// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getCarsWithType = (cars, type) => cars.filter(({type : carType}) => carType === type)

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));






// // Example 6 - Метод find


// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getCarByModel = (cars, model) => {
//     const response = cars.find(({
//         model: carMadel
//     }) => carMadel === model)
//     return response;
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));








// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.
// https://learn.javascript.ru/string
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

// const sortByAscendingAmount = cars => {
//     cars.sort((a, b) => a.model.localeCompare(b.model) )
//     console.log(cars);
// };

// console.table(sortByAscendingAmount(cars));









// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => {};

// console.table(sortByDescendingPrice(cars));








// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотньому алфавітному порядку, залежно від значення параметра order.

// const sortByModel = (cars, order) => {};

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));







// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).




// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },


// const getModelsOnSale = cars => {
//     return cars.reduce((acc, {amount}) => acc += amount, 0)
// };

// console.log(getModelsOnSale(cars));




// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.



// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getModelsOnSale = cars => {
//     const modelsArr = cars.filter(car => car.onSale).map(({model}) => model);

// return modelsArr
// };

// console.table(getModelsOnSale(cars));





// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає список (Марка, Модель кількість та Ціна) автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.
// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getSortedCarsOnSale = cars => {
//     const sortedCars = cars.filter(({
//         onSale
//     }) => onSale).sort((a, b) => a.price - b.price);
//     console.log('cars',cars);
//     console.log('sortedCars',sortedCars);

//     const list = sortedCars.reduce((acc, {
//         make,
//         model,
//         amount,
//         price
//     }, idx) => acc + `${idx+1}. Марка ${make}, Модель: ${model}, Кількість: ${amount}, Ціна: ${price}\n`
//   , sortedCars.length
//     ? `Кількість автомобілів ${sortedCars.reduce((acc,{amount}) => acc+=amount,0)}:\n`
//     : 'За вашим запитом не знайдено жодного автомобіля!')

// return list;
// };

// console.table(getSortedCarsOnSale(cars));

// Кількість автомобілів ХХ:
// 1...
// 2...


// function getCarsModel(arr) {
//     return arr.reduce((acc, item) => {
//         acc.push(item.model)
//         return acc
//     })
// }

// console.log(getCarsModel(cars));




// Потрібно повернути обєкт де ключом являється назва літери а значенням та кількість раз скільки ця літера зустрічаєьься в рядку 
// const str = 'fwewfwfaczfascawdczxzsdaczzcsfacaDAxcadfa';
// const st1 = 'fwewfwfaczfascazvdxfndgfmretnsrafGDBhwerDAxcadfa';


// /**
//  * Return object where symbol key ....
//  * @param {String} str 
//  * @returns {Object}
//  */
// function returnObj(str) {
//     const obj = str.toLocaleLowerCase().split('').reduce((acc, item) => {
//         if (item in acc) {
//             acc[item] += 1
//             return acc
//         }
//         acc[item] = 1;
//         return acc
//     }, {})
//     return obj
// }
// returnObj(str)
// returnObj(str1)

// {
//     f: 6,
//     w: 4,
// }




// function foo(number, onPositive, onNegative) {
//     let result = 0;
//     if (!number) {
//         console.log(`value equal 0`);
//     } else if (number > 0) {
//         result = onPositive(number)
//     } else {
//         result = onNegative(number)
//     }
//     return result
// }

// foo(0, positive, negative)

// function positive(number) {
//     return -number
// }

// function negative(number) {
//     return number * -1
// }


// const strs = ['sdsdgsdfsdgadagsgasfa','asfweadasgwqvwfvqfq','qdcasfqwefqxdcqaxqqww','wefwcsfcass']
// function boo(arr, callback){
//     arr.forEach(str => console.log(callback(str)))
// }


// boo(strs, returnObj)


// const carsEx = [{
//         name: "Honda",
//         type: "A",
//     },
//     {
//         name: "Toyota",
//         type: "A",
//     },
//     {
//         name: "Honda",
//         type: "Z",
//     },
//     {
//         name: "Toyota",
//         type: "Z",
//     }
// ]

// const honda  = carsEx.filter(({name}) => name ===  "Honda").sort((a,b) => a.type.localeCompare(b.type));
// console.log("honda",honda);
// const toyota  = carsEx.filter(({name}) => name ===  "Toyota").sort((a,b) => a.type.localeCompare(b.type));
// console.log("toyota", toyota);
// const result =   [...honda, ...toyota]//honda.concat(toyota)
// console.log(result);

// const numbers = [1, 2, [3, [4, [1, 1, 1], 5], 6], 7]
// console.log(Array.isArray(numbers));
// const getSomeNumbers = numbers => numbers.flatMap(value => {
//     if()
//         value
//     })
//     .flatMap(value => value).filter(value => value > 2);
// https://learn.javascript.ru/recursion
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// function foo(arr) {
//   return arr.flatMap(item => {
//         if (Array.isArray(item)) {
//             return foo(item)
//         }
//         return item
//     })
// }

