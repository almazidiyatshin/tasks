// Написать функцию, которая будет возвращать сумму элементов массива.

const arr = [1, 2, -1, 3];

Array.prototype.sum = function sum() {
  return this.reduce((acc, value) => acc + value, 0);
};

console.log(arr.sum()); // 5
