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
// Являются спецсимволами: $ ^ . * + ? \ / {} [] () |
// Не являются спецсимволами: @ : , ' " ; - _ = < > % # ~ `& !

let screen = 'a.a aba aea';
console.log(screen.replace(/a\.a/g, '?'))

let screenTwo = '2+3 223 2223'; // Напишите регулярку, которая найдет строку '2+3', не захватив остальные.
console.log(screenTwo.replace(/2\+3/, '?'))

let screenThree = '23 2+3 2++3 2+++3 345 567'; // Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).
console.log(screenThree.replace(/2\++3/g, '?'))

let screenFour = '23 2+3 2++3 2+++3 445 677'; // Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.
console.log(screenFour.replace(/2\+*3/g, '?'))

let screenFive = '*+ *q+ *qq+ *qqq+ *qqq qqq+'; // Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
console.log(screenFive.replace(/\*q+\+/g, '?'))

let screenSix = '[abc] {abc} abc (abc) [abc]'; // Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.
console.log(screenSix.replace(/\[.*?]/g, '!'))


/*-------ФИГУРНЫЕ СКОБКИ В РЕГУЛЯРНЫХ ВЫРАЖЕНИЯХ------*/

let fig = 'aa aba abba abbba abbbba abbbbba';
//Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
console.log(fig.replace(/ab{1,4}a/g, '!'))

// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается менее 3-х раз (включительно).
console.log(fig.replace(/ab{0,3}a/g, '!'))

//Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
console.log(fig.replace(/ab{4,}a/g, '!'))

/*-------ОГРАНИЧЕНИЕ ЖАДНОСТИ------*/
//Чтобы ограничить жадность, нужно после оператора повторения поставить знак вопроса ?
let greed = 'aeeex zzz x kkk';
console.log(greed.replace(/a.+?x/g, '!'))

let greedTwo = 'aba accca azzza wwwwa'; //Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме 'a').
console.log(greedTwo.replace(/a.*?a/g, '?'))


/*-------Группы символов в регулярных выражениях------*/

// Символы: /d - цифра, /w - цифра, латинская буква или знак подчеркивания, /s - пробел или пробельный символ (пробел, перевод строки, табуляцию)
let grp = '1 12 123 abc @@@';
console.log(grp.replace(/\d/g, '!'))
console.log(grp.replace(/\d+/g, '!'))
console.log(grp.replace(/\s/g, '!'))

let grpTwo = '123abc3@@';
let grpThree = '1 12 123 abc @@@';

console.log(grpTwo.replace(/\D+/g, '!'))

console.log(grpThree.replace(/\S+/g, '!'))


let grpFour = 'a1a a2a a3a a4a a5a aba aca'; // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
console.log(grpFour.replace(/a\da/g, '?'))

let grpFive = 'a1a a22a a333a a4444a a55555a aba aca'; // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
console.log(grpFive.replace(/a\d+a/g, '?'))

let grpSix = 'aa a1a a22a a333a a4444a a55555a aba aca'; // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').
console.log(grpSix.replace(/a\d*a/g, '?'))


let grpSeven = 'avb a1b a2b a3b a4b a5b abb acb'; // Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
console.log(grpSeven.replace(/a\D+?b/g, '?'))


let grpEigth = 'ave a#b a2b a$b a4b a5b a-b acb'; // Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
console.log(grpEigth.replace(/a\W+?b/g, '?'))

let grpNine = 'ave a#a a2a a$a a4a a5a a-a aca'; // Напишите регулярку, которая заменит все пробелы на '!'.
console.log(grpNine.replace(/\s/g, '!'))

/*-------Наборы символов------*/
let sym = 'xax xbx xcx x@x';
console.log(sym.replace(/x[a-z]x/g, '!'))

let symTwo = 'xax x1x x3x x5x x@x';
console.log(symTwo.replace(/x[a-z1-9]x/g, '!'))



let symThree = 'aba aea aca aza axa'; // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.
console.log(symThree.replace(/a[bex]a/g, '='))

let symFour = 'a1a a3a a7a a9a aba'; // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти.
console.log(symFour.replace(/a[3-6]a/g, '='))

let symFive = 'aba aea afa aha aga'; // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g.
console.log(symFive.replace(/a[a-g]a/g, '='))
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.
console.log(symFive.replace(/a[a-fj-z]a/g, '='))

let symSix = 'aAa aea aEa aJa a3a'; // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.
console.log(symSix.replace(/a[a-fA-D]a/g, '='))

let symSeven = 'aAXa aeffa aGha aza ax23a a3sSa'; // Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных.
console.log(symSeven.replace(/a[a-z]+a/g, '='))
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.
console.log(symSeven.replace(/a[a-zA-Z]+a/g, '='))
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.
console.log(symSeven.replace(/a[a-z0-9]+a/g, '='))

/*-------Инвертирование------*/
// ^ - знак инвертирования. [ab] - ищет символы а или b. [^ab] - все символы, кроме a и b.

let inv = '1x2 1ex2 1op2 1y2 1ee2 1yue2 1pop2'

// Напишите регулярку, которая найдет строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.
console.log(inv.replace(/1[^ex]*?2/g, '!'))

let invTwo = 'x2az xa5z x117Jz x98z x11z x0z xPJHaIz xPJz'
// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.
console.log(invTwo.replace(/x[^2-7]*?z/g, '!'))

// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая латинская буква от 1 и более раз, буква 'z'.
console.log(invTwo.replace(/x[^a-z]+?z/g, '!'))

// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая маленькая латинская буква и не цифра от 1 до 5 от 1 и более раз, буква 'z'.

console.log(invTwo.replace(/x[^A-Za-z1-5]+?z/g, '!'))


/*-------Кириллица в регулярках------*/

let kir = 'wйw wяw wёw wqw';
console.log(kir.replace(/w[а-яё]w/g, '?'));

let kirTwo = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
console.log(kirTwo.replace(/[а-яёА-ЯЁ]*/g, '?'));