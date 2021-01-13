// Реализовать каррирование. Кол-во скобок может быть произвольное.
// корректный вывод в консоль только в браузере

function sum() {
  const [firstArgument] = arguments;
  let currentSum = firstArgument;

  function f(nextArgument) {
    currentSum += nextArgument;
    return f;
  }

  f.toString = function toString() {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2)(3));
