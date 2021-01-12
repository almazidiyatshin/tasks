// Реализовать каррирование. Кол-во скобок может быть произвольное.
// не доделано

function sum() {
  const innerFunc = (...args) => (x) => (!x ? args.reduce((acc, value) => acc + value, 0) : innerFunc(...args, x));
  return innerFunc();
};

console.log(sum(1)(2)(3)());
