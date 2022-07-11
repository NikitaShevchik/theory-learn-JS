"use strict"

let test = 'Nikita';

test.replace('a', 'o')

console.log(test.replace('i', '-')) // N-kita где просто находит первую попавшеюся i и заменяет её
console.log(test.replace(/i.i/, '-')) // N-ta где . это любой символ
console.log(test.replace(/i/g, '-')) // N-k-ta где g - найти и заменить все (а не только первый)


let str = 'ahb acb aeb aeeb adcb axeb';
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
console.log(str.replace(/a.b/g, '---'))

let strTwo = 'aba aca aea abba adca abea';
console.log(strTwo.replace(/a..a/g, '----'))

//'abba' и 'abea', не захватив 'adca'.
console.log(strTwo.replace(/ab.a/g, '----'))


let strThree = 'xx xax xaax xaaax xbx';
console.log(strThree.replace(/xa+x/g, '!')) // Найдем все подстроки по шаблону буква 'x', буква 'a' один или более раз, буква 'x'       +

console.log(strThree.replace(/xa*x/g, '--')) //Найдем все подстроки по шаблону буква 'x', буква 'a' ноль или более раз, буква 'x'       *

console.log(strThree.replace(/xa?x/g, '--')) //Найдем все подстроки по шаблону буква 'x', буква 'a' ноль или один раз, буква 'x'        ?



/*-------ОПЕРАТОРЫ ПОВТОРЕНИЯ------*/

let strFour = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
console.log(strFour.replace(/ab+a/g, '---'))


// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
console.log(strFour.replace(/ab*a/g, '---'))

// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
console.log(strFour.replace(/ab?a/g, '---'))

// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.
console.log(strFour.replace(/ab*a/g, '---'))


/*-------ГРУППИРУЮЩИЕ СКОБКИ------*/
let strFive = 'ab abab abab abababab abea';
console.log(strFive.replace(/(ab)/g, '--')) // строка 'ab' повторяется 1 или более раз.

/*-------ЭКРАНИРОВАНИЕ------*/