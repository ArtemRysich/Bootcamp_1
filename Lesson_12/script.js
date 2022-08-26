// const button = document.querySelector('.click')
// button.addEventListener('click', onClick)
// const input = document.querySelector('.input')
// input.addEventListener('input', onInput)


// function onClick(evt) {
//     console.log(evt);
// }


// function onInput(evt) {
//     console.log(evt);
//     console.log(evt.target.value);
// }

// const form = document.querySelector('.login')
// form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    console.log(evt);
    console.log(evt.target);
    console.log(evt.currentTarget);
    const {
        email,
        password
    } = evt.currentTarget;
    const emVal = email.value
    const pasVal = password.value
    console.log({
        emVal,
        pasVal
    });
    evt.target.reset()
}


const div = document.querySelector('.testA')
div.addEventListener('click', onClickDiv)

function onClickDiv(evt) {
evt.preventDefault()
console.log(evt.currentTarget);
console.log(evt.target);
}

// const test = document.querySelector('.test')
// test.addEventListener('click', onClick)
// function onClick(evt){
//     console.log(evt.currentTarget);
//     console.log(evt.target);
// }
// 'keydown' або "keyup"  працюють з службовими клавішами
document.addEventListener('keydown', onKey)
// keyCode - Deprecated
function onKey(evt) {
    if (evt.code === "Escape") {
        console.log('YES');
        document.removeEventListener('keydown', onKey)
    }
    console.log(evt.code);
}