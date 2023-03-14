// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// console.log(Account.prototype.getInfo); // function

// function Account({login, email}) {
//   this._login = login;
//   this._email = email;
// }

// Account.prototype.getInfo = function() {
//   console.log(`Login: ${this._login}, Email: ${this._email}`);
// }

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// Задание 2
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User {
//   constructor({ name, age, followers }) {
//     this._name = name;
//     this._age = age;
//     this._followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this._name} is ${this._age} years old and has ${this._followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Задание 3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// class Storage {
//   constructor(goods) {
//     this._goods = goods;
//   }

//   getItems() {
//     return this._goods;
//   }

//   addItem(item) {
//     this._goods.push(item);
//   }

//   removeItem(item) {
//     const index = this._goods.indexOf(item);
//     if (index !== -1) {
//       this._goods.splice(index, 1);
//     }
//   }
// }

// // Добавь методы класса:

// // getItems() - возвращает массив текущих товаров
// // addItem(item) - получает новый товар и добавляет его к текущим
// // removeItem(item) - получет товар и, если он есть, удаляет его из текущих
// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage._goods); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  set value(newStr) {
    this._value = newStr;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}
// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
// Задание 5
// Напиши класс Car с указанными свойствами и методами.

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs({ _maxSpeed, _speed, _isOn, _distance, _price }) {
    console.log(
      'maxSpeed:',
      _maxSpeed,
      'speed:',
      _speed,
      'isOn:',
      _isOn,
      'distance:',
      _distance,
      'price:',
      _price
    );
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 240,
    isOn = false,
    distance = 0,
  }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  get price() {
    return this._price;
  }

  set price(priceAmount) {
    this._price = priceAmount;
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this._isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (this._speed + value > this._maxSpeed) {
      return new Error('Max speed is exceeded');
    }

    this._speed += value;
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this._speed - value < 0) {
      return new Error('Car can not drive with the speed below zero');
    }

    this._speed -= value;
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (!this._isOn) {
      return new Error('Car is not ON, please start the car');
    }

    this._distance += this._speed * hours;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
console.log(mustang);
Car.getSpecs(mustang);
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
