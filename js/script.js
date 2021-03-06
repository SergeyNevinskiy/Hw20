// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

const arr = [`a`, `b`, `c`, `d`];
const str = `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`;
alert(str);

//2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

const arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

alert(arr[1][0]);

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

const obj = {
  js: [`jQuery`, `Angular`],
  php: `hello`,
  css: `world`,
};

alert(obj.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

const arr = [];
let str = `x`;

for (let i = 0; i < 10; i++) {
  arr.push(str);
  str += `x`;
}

alert(arr);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

const arr = [];

for (let i = 1; i < 5; i++) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += i;
  }
  arr.push(str);
}
alert(arr);

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

let arr = [];
function arrayFill(item, numberIt) {
  for (let i = 0; i < numberIt; i++) {
    arr.push(item);
  }
  return arr;
}
arrayFill("s", 8);
alert(arr);

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const arr = [1, 9, 2, 5, 4, 7, 3];
let sum = 0;
const arr1 = arr.reduce(function (accum, item) {
  if (sum <= 10) {
    sum += item;
    accum++;
  }
  return accum;
}, 0);

alert(arr1);

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const arr = [1, 2, 3, 4, 5, 6];

function reverseArr(array) {
  let newArr = [];
  while (array.length) {
    newArr.push(array.pop());
  }
  return newArr;
}
alert(reverseArr(arr));

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const arr = [[1, 2, 3], [4, 5], [6]];

function summ(array) {
  let arr2 = array.flat().reduce(function (summ, elem) {
    return summ + elem;
  }, 0);
  return arr2;
}

console.log(summ(arr));


// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let arr1 = arr.flat(2);
let arr2 = arr1.reduce(function (accum, item) {
return accum += item;
}, 0); 
console.log(arr2);
