// Написать функцию, которая будет возвращать сумму элементов массива.

const arr = [1, 2, -1, 3];

arr.sum = () => arr.reduce((acc, value) => acc + value, 0);

console.log(arr.sum()); // 5
