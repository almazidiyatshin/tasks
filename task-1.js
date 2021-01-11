// Написать функцию, которая будет возвращать сумму элементов массива.

const arr = [1, 2, -1, 3];
const getSum = (array) => array.reduce((acc, value) => acc + value, 0);

console.log(getSum(arr));
