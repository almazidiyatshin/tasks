// Написать функцию, которая проверяет строку на палиндром.

const str1 = 'Иди';
const str2 = 'А роза упала на лапу Азора';
const str3 = 'Человек';

const isPalindrom = (str) => {
  if (str.length < 2) {
    return true;
  }

  const normalStr = str.toLowerCase().trim();
  const firstSym = normalStr[0];
  const lastSym = normalStr[normalStr.length - 1];

  return firstSym !== lastSym ? false : isPalindrom(normalStr.substring(1, normalStr.length - 1));
};

console.log(isPalindrom(str1));
console.log(isPalindrom(str2));
console.log(isPalindrom(str3));
