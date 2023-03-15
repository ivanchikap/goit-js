import usersF from './users.js';

// ТЗ
// Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над массивом объектов пользователей из файла users.js.
const users = usersF;
// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = (users) => {
  const usersName = users.map((user) => user.name);
  return usersName;
};

console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const res = users.filter((user) => {
    return user.eyeColor === color;
  });

  return res;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// Задание 4
// Получить массив только неактивных пользователей (поле isActive).
console.log('task-6');
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
console.log('task-6');
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.
console.log('task-7');
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
console.log('task-8');
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
console.log('task-9');
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
console.log('task-10');
const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .filter((el, i, arr) => arr.indexOf(el) === i)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ];

// own tasks
console.log('own-task-1');
// Увеличить количество пойнтов каждого игрока
const players = [
  { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'ajax', timePlayed: 150, points: 54, online: false },
  { id: 'player-5', name: 'chelsy', timePlayed: 80, points: 48, online: false },
];

const updatedPlayers = players.map((player) => {
  return {
    ...player,
    points: Math.round(player.points * 1.1),
  };
});

console.log(updatedPlayers);

console.log('own-task-2');
// Увеличить количество часов игрока по id

const playerIdToUpdate = 'player-3';

const res2 = players.map((player) => {
  return player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 300 }
    : player;
});

console.log(res2);

console.log('own-task-3');
// 1. Собираем все теги из твитов в массив
// 2. Сжелать из массива обьект з количеством вхождений

const tweets = [
  { id: '00', likes: 5, tags: ['js', 'nodejs'] },
  { id: '01', likes: 2, tags: ['html', 'css'] },
  { id: '02', likes: 12, tags: ['html', 'js', 'nodejs'] },
  { id: '03', likes: 8, tags: ['css', 'react'] },
  { id: '04', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, { tags }) => {
  acc.push(...tags);
  return acc;
}, []);

console.log(allTags);

const tagsStat = allTags.reduce((acc, tag) => {
  acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
  return acc;
}, {});

console.log(tagsStat);
