// function sayHello(name) {
//     console.log('Function say Hello', name);
// }
// String.prototype.sayHello = sayHello;

// const str = 'User'
// console.log(str.sayHello('David'));


// class User {
//     static Roles = {
//         gold: "Gold"
//     }#
//     age;
//     constructor(name, age, password, role) {
//         this.userName = name;
//         this.#age = age;
//         this.password = password;
//         this.nickName = 'qwert'
//         this.number = '1111'
//         this.role = role
//     }

//     changeName(newName) {
//         this.userName = newName;
//     }

//     get userAge() {
//         console.log(this.#age);
//     }

//     set userAge(newAge) {
//         if (newAge >= 0) {
//             this.#age = newAge;
//         } else {
//             console.log('AGE < 0');
//         }
//     }

//     get passworD() {
//         const number = prompt('Enter number')
//         if (number === this.number) {
//             console.log(this.password);
//         } else {
//             console.log("Хацкер?");
//         }
//     }

//     set passworD(newPassword) {
//         if (newPassword.length > 5) {
//             this.password = newPassword
//         }
//     }
// }


// class Admin extends User {
//     constructor(name, age, password, secretPassword) {
//         super(name, age, password)
//         this.secretPassword = secretPassword
//     }
// }
// const goldUser2 = new User('Ajax', 12, '12345',User.Roles.gold)
// const superAdmin = new Admin ('Admin',22,'12343', '2134564352435151324' )
// console.log(superAdmin);
// console.log(goldUser2);
// const goldUser = new User('Poly', 10)
// const goldUser1 = new User('Mango', 11)
// const goldUser2 = new User('Ajax', 12, '12345',User.Roles.gold)
// goldUser2.changeName('Zina');
// // goldUser2.userAge = 99;
// goldUser2.#age = 101;

// goldUser2.userAge = 1
// goldUser2.password = '1'
// goldUser2.nickName = '0'
// goldUser2.passworD







// console.log(goldUser);
// console.log(goldUser1);
// console.log(goldUser2);
// console.log(goldUser2.Roles);

// Example 1 - Блоггер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем, на яких спеціалізується блогер
// Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок: User ${пошта} is ${вік} years old and has ${у постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

class Blogger {
    constructor({
        name,
        age,
        numberOfPosts,
        topics
    }) {
        this.name = name;
        this.age = age;
        this.numberOfPosts = numberOfPosts;
        this.topics = topics;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
    }

    updatePostCount(value) {
        return this.numberOfPosts += value
    }
}


// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
//   });

//   console.log(mango);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
//   mango.updatePostCount(5);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

//   const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
//   });
//   console.log(poly);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
//   poly.updatePostCount(4);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts





// Example 2 - Сховище
// Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

// Додай методи класу:

// getItems() – повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

class Storage {
    constructor(items) {
        this.items = items
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        if (!this.items.includes(item)) {
            this.items.push(item)
        }
    }
    removeItem(item) {
        if (this.items.includes(item)) {
            const idx = this.items.indexOf(item);
            this.items.splice(idx, 1)
        }
    }
}



// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.addItem('🍎');
// console.table(storage.items)
// storage.removeItem('🍎');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]



// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.

// class User {
//     #login;
//     #email;
//     constructor({
//         login,
//         email
//     }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         console.log(this.#login);
//     }
//     set login(newLogin) {
//         this.#login = newLogin
//     }

//     get email() {
//         console.log(this.#email);
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });
//   mango.login = 'asvasdadasd'
// console.log(mango);

// mango.login; // Mango
// mango.login = 'Mangodoge';
// console.log(mango);
// mango.login; // Mangodoge

//   const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });

//   console.log(poly.login); // Poly
//   poly.login = 'Polycutie';
//   console.log(poly.login); // Polycutie



// Example 4 - Нотатки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша нотатка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes.items);


// Example 5 - Toggle
// Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За промовчанням значення властивості on має бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');