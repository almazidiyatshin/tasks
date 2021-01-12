// Написать функцию, которая проверяет строку на палиндром.

const str1 = 'Иди';
const str2 = 'А роза упала на лапу Азора';
const str3 = 'Человек';

const isPalindrom = (str) => {
  const normalStr = str.toLowerCase().split(' ').join('');
  const reverseStr = normalStr.split('').reverse().join('');
  return normalStr === reverseStr;
};

console.log(isPalindrom(str1));
console.log(isPalindrom(str2));
console.log(isPalindrom(str3));
