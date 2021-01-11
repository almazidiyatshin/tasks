// Реализовать наследование (Man унаследовать от Human). Двумя способами (es5 & es6).

// ES6
class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  getName() {
    return this.name;
  }

  getSex() {
    return this.sex;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = 'man';
  }
}

// ES5
const Human = function Human(name, sex) {
  this.name = name;
  this.sex = sex;
};

Human.prototype.getName = function getName() {
  return this.name;
};

Human.prototype.getSex = function getSex() {
  return this.sex;
};

const Man = function Man(name) {
  Human.call(this, name);
  this.sex = 'man';
};

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;
