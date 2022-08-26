// const list = document.querySelector('.list');
// console.dir(list);
// list.addEventListener('click', onClick)
// // for(const item of list.children){
// //     item.addEventListener('click', onClick)
// // }

// // list.addEventListener('click', onClick)

// function onClick(e) {
//     e.target.tagName === 'SPAN'
//     if (e.target.classList.contains('js-button')) {
//         const currentId = e.target.closest('.item').dataset.id
//         console.dir(currentId);
//     }
//     if (e.target.classList.contains('js-favorite')) {
//         const currentId = e.target.closest('.item').dataset.id
//         console.dir(currentId);
//     }
// }



const instruments = [{
        id: 1,
        img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
        name: 'Молоток',
        price: 150,
    },
    {
        id: 4,
        img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
        name: 'Молоток',
        price: 175,
    },
    {
        id: 2,
        img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
        name: 'Перфоратор',
        price: 3000,
    },
    {
        id: 3,
        img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
        name: 'Рівень',
        price: 2000,
    },
];

const basket = [];
const list = document.querySelector('.products')
const markup = instruments.reduce((acc, item) => {
    return acc + `<li class='js-product' data-id="${item.id}"><img src="${item.img}" alt="${item.name}" width="100"> <h2 >${item.name} </h2> <p> ${item.price}</p> <button class='js-target'> Купити </button> </li>`
}, '')
const Elbasket = document.querySelector('.basket')

list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', onClickProduct)
Elbasket.addEventListener('click', onBasket)




function onBasket (evt){
    console.log(basket);
}
function onClickProduct(evt) {
    if (!evt.target.classList.contains("js-target")) {
        return;
    }
    const currentId = evt.target.closest('.js-product').dataset.id;
    const currentProduct = instruments.find(({
        id
    }) => id === Number(currentId))
    const orderProduct = {
        date: new Date(),
        ...currentProduct
    }
    basket.push(orderProduct)
}


console.log('Hello');

console.log(basket);
