// const user = {
//     name: "User",
//     city: 'Lviv',
//     age: 24
// }

// const obj = JSON.stringify(user);
// console.log(typeof obj);
// const response = JSON.parse(obj);
// console.log(response);


// const container = document.querySelector('.container')


// local.addEventListener('click', onLocal)

// function onLocal() {
//   localStorage.setItem('test', JSON.stringify({
//     a: 1,
//     b: 2
//   }))
// }
// let src;

// document.body.style.backgroundColor = 'red'
// try {
//   const response = JSON.parse(localStorage.getItem('test'));

//   if (!response) {
//     throw new Error('My first error');
//   }

//   if(typeof response !== 'number'){
//     throw new Error('! NUMBER =(');
//   }

//   src = `https://img.freepik.com/free-photo/the-cat-on-white-background_155003-15381.jpg?w=2000`
//   console.log(response);
//   console.log(response.a);

// } catch (e) {

//   src = `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000`
//   console.log(e);

// } finally {
//   const img = ` <img src="${src}" width="300"alt="">`
//   container.insertAdjacentHTML('beforeend', img)
//   document.body.style.backgroundColor = 'white';
// }



// console.log("Hello world");

// const session = document.querySelector('.session');
// const local = document.querySelector('.local');

const obj = {
  name: 'User',
  age: 22
}
const arr = [1, 2, obj, 4, 5];
// const KEY_LOCAL = 'array'
// const KEY_SESSION = 'array_KEY_SESSION'

// try {
//   const response = JSON.parse(localStorage.getItem(KEY_LOCAL));
// } catch (e) {

// }
// session.addEventListener('click', onSession)
// local.addEventListener('click', onLocal)
// sessionStorage.setItem(KEY_SESSION, JSON.stringify(arr))
// sessionStorage.setItem('KEY_SESSION2', JSON.stringify(arr))
// function onSession() {
// sessionStorage.clear()
// }
// localStorage.setItem(`KEY_LOCAL0`, JSON.stringify(arr))
// localStorage.setItem("KEY_LOCAL", JSON.stringify(arr))
// localStorage.setItem(`KEY_LOCAL2`, JSON.stringify(arr))
// localStorage.setItem(`KEY_LOCAL3`, JSON.stringify(arr))
// function onLocal() {
//     localStorage.removeItem(KEY_LOCAL)
// }
// console.log(localStorage.length);
// for (let i = 0; i < localStorage.length; i += 1){
//   console.log(  localStorage.key(i));
// }

// console.log(localStorage.key(2));
// localStorage працює в рамках url адресу та привязує значення до неї, не важливо перезавантаження, закритя вкладки або браузера. Видаляємо елементи тільки примусово. removeItem або clear.

// sessionStorage він працює в рамках сесії(привязка до вкладки) працює при перезавантажені.Видаляємо елементи при закриті сесії (аюо експайр сесії). removeItem або clear.