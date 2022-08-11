// Приклади з областями видимості
// ------------------------------//
// let a = 10;

// if(true){
//     let a = 5
// console.log('in local',a);
// }
// console.log('in global',a);


// ------------------------------//
// let a = 10;

// {
//     let a = 5
// }
// console.log(a);

// ------------------------------//
// let a = 10;

// if(true){
//     // let a = 20;
//     a = 15;
// }
// console.log(a);

// ------------------------------//
// let a = 10;

// if (true) {
//     let a = 100;
//     a = 1
//     if (true) {
//         a = 15;
//         // let a = 25;
//         console.log('local 2', a);
//     }
//     console.log('local', a);
// }
// console.log('global', a);

// ------------------------------//
// let x = [1, 5]; //складні типи даних за пасиланням
// // let x = 15 // примітивні типи даних
// let y = 10;

// function foo(a, y) {
//     // a[0] = 99
//     a = 99
// }
// foo(x, y)
// console.log('x', x);


// Створення та види функцій

// function expression
// викликається тільки після оголошення
// const foo = function (a, b) {
//     return a + b
// }
// console.log(foo(3, 4));


// function declaretion

// function boo(a, b) {
//     return a + b
// }
// console.log(boo(5,6));
// console.log(boo(4,2));


/// arguments
//  Порахувати суму всіх чисел

// function getSum (){
// console.log(arguments);
// const arr = Array.from(arguments);
// console.log(arr);
// let sum = 0;
// for(const number of arr){
//     sum+=number
// }
// console.log(sum);

// // console.log(arr);
// }

// // getSum(1, 2, 3, 4, 5, 6, 7, 8)
// getSum(44, 5, 14, 3)


// Стек викликів

function foo(){
    console.log('foo before');
    boo()
    console.log('foo after');
}


function boo(){
    foo()
    console.log('boo');
}

foo()



// Напишіть функції для роботи з колекцією навчальних курсів courses:
// 1 addCourse(name) - додає курс в кінець колекції
// 2 removeCourse(name) - видаляє курс з колекції
// 3 updateCourse(oldName, newName) - замінює назву на нову
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];




// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте данний курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс з такою назвою не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('Angular', 'NestJS'); //'Курс з такою назвою не знайдено'