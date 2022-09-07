// for(let i = 3; i > 0; i--){
//     const delay = i * 1000;
//     setTimeout(()=> console.log(i), delay)
// }


// console.log('start');
// setTimeout(() => console.log("setTimeout3"), 2000);
// setTimeout(() => console.log("setTimeout2"), 1000);
// setTimeout(() => console.log("setTimeout"), 0);


// console.log('fin');


// function foo(number) {
//     for (let i = 0; i < number; i += 1) {
//         console.log('foo', i);

//     }
// }
// foo(10000)


// function boo(number) {
//     for (let i = 0; i < number; i += 1) {
//         console.log('boo', i);
//     }
// }
// boo(10000)
// const timer = setTimeout(()=>{console.log("Timeout")},1000);
// console.log(timer);
// let i = 0;
// const time = setInterval(() => {
//     i += 1;
//     console.log(i);
//     if (i > 5) {
//         clearInterval(time)
//     }
// }, 1000)

// const time1 = setInterval(() => {
//     console.log('interval1')
//     const time2 = setInterval(() => {
//         console.log('interval2')
//     }, 0)
// }, 2000)

// console.log('id', time);
// console.log('id1',time1);
// console.log('id2',time2);





// clearInterval(time1)
// clearInterval(time2)


// setTimeout(() => {
//     console.log("setTimeout");
//     const time2 = setInterval(() => {
//         console.log('interval2')
//     }, 1000)
// },500)




const endDate = new Date();
const endDateMinutes = endDate.getDay();
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень' , 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
const namesOfDay = ['Неділя', 'Понеділок','Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота' ]

console.log("endDateMinutes", namesOfDay[endDateMinutes]);


// setInterval(()=>{
//     const currentDate = new Date();

//     // console.log('currentDate', currentDate.getMinutes());
//     const deltaDate = endDateMinutes - currentDate;

//     const toDate = new Date(deltaDate)
//     console.log(toDate);
// },1000)
// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// const day = hour * 24;
// console.log(day);
// const days = addLeadingZero(Math.floor(ms / day));
// // Remaining hours
// const hours = addLeadingZero(Math.floor((ms % day) / hour));
// // Remaining minutes
// const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
// // Remaining seconds
// const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));







