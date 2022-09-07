// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const random = Math.random();
//         if (random > 0.000000000000001) {
//             resolve('Promise - 1 time 1000')
//         } else {
//             reject('Sorry')
//         }
//     }, 1000)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const random = Math.random();
//         if (random > 0.8) {
//             resolve('Promise - 2 time 3000')
//         } else {
//             reject('Sorry')
//         }
//     }, 3000)
// })


// console.log(promise);
// console.log(promise);
// promise
//     .then(response => console.log('then', response))
//     .catch(err => console.log('catch', err))
//     .finally(() => console.log(promise));

// promise2
//     .then(response => console.log('then', response))
//     .catch(err => console.log('catch', err))
//     .finally(() => console.log(promise));

    // Promise.all([promise, promise2]).then(data => console.log('all',data));
    // Promise.allSettled([promise, promise2]).then(data => {
    //     data.forEach(resp =>{
    //         if(resp.status === 'fulfilled'){
    //             console.log(resp.value);
    //         }
    //     })
    // });
    // Promise.race([promise, promise2]).then(data => console.log('race',data)).catch(err => console.log(err));












//  XMLHttpRequest


const promise = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
promise
.then(res => res.json())
.then(data => console.log('then2',data))
.catch(err => console.log('catch',err))


// console.log('ex 1');

// setTimeout(()=> console.log('setTimeout 2'),0); //macro
// setTimeout(()=> console.log('setTimeout 2.1'),0);
// setTimeout(()=> console.log('setTimeout 22.2'),0);

// Promise.resolve().then(()=>console.log('Promise - 3')); //micro
// Promise.resolve().then(()=>console.log('Promise - 3.1'))
// Promise.resolve().then(()=>console.log('Promise - 3.2'))

// console.log('ex 4');