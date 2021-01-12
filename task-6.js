// Промисы. Описать, что происходит на каждой строчке.

function func1() {
  return Promise.resolve('1');
}

function func2() {
  return Promise.resolve('2');
}

function func3(res) {
  return console.log(res);
}

// 7.1:
func1()
// func1 возвращает выполненный промис со значением '1'
  .then(() => func2())
// выполняется колбек-функция, которая возвращает выполненный промис со значением '2'
  .then(func3);
// выполняется колбек-функция func3, которая выводит значение предыдущего промиса в консоль, то есть '2'

// проблема
// 7.2:
func1()
  .then(() => {
    func2();
  })
  .then(func3);

// 7.3:
func1()
// func1 возвращает выполненный промис со значением '1'
  .then(func2())
// игнорируется, так как нужно передавать колбек-фукнцию, а не вызывать ее
  .then(func3);
// выполняется колбек-фукнция func3, которая выводит значение предыдущего промиса в консоль, то есть '1'

// 7.4:
func1()
// func1 возвращает выполненный промис со значением '1'
  .then(func2)
// выполняется колбек-функция func2, которая возвращает промис со значением '2'
  .then(func3);
// выполняется колбек-фукнция func3, которая выводит значение предыдущего промиса в консоль, то есть '2'
