// Реализовать цепочку вызовов. add - увеличивает на 1, dec - уменьшает на 1.

const obj = {
  a: 0,
  add() {
    this.a += 1;
    return this;
  },
  dec() {
    this.a -= 1;
    return this;
  },
};

obj.add().add().dec().add();
console.log(obj.a);
