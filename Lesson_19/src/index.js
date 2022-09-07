// const obj = {
//     email : 'test@gmail.com',
//     password : '123456'
// }


// const options =  {
//     method: 'POST',  //"PUT" "PATCH"
//     body: JSON.stringify(obj),
//     headers:{
//        "Content-Type": "application/json"
//     }
// }
// AJAX => JSON
const city = 'Lviv'
const resp = fetch(`http://api.weatherapi.com/v1/forecast.json?key=f40e5c2d562a4ec88a1103811220609&q=${city}&days=7
`);
console.log(resp);
resp.then(res => res.json()).then(response => console.log(response)).catch(err => console.log(err)).finally()
//resp => console.log(resp)

