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


/*-------Спецсимволы внутри квадратных скобок------*/

let spe = 'aba aea aca aza axa a.a a+a a*a';
// Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.
console.log(spe.replace(/a[.+*]a/g, '!'))

let speOne = 'xaz x.z x3z x@z x$z xrz';
// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.
console.log(speOne.replace(/x[^.@$]z/g, '!'))


/*-------Группы символов внутри квадратных скобок------*/

let grsp = 'xaz x1z xAz x.z x@z 5.2.22';
// Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.
console.log(grsp.replace(/[\d.]+/g, '?'))

let grspt = '4gh ag zxzxr';
// Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.
console.log(grspt.replace(/[^\da-g]{3,7}/g, '?'))


/*-------Спецсимволы исключения внутри квадратных скобок------*/

let stret = 'x[]z x{}z x.z x()z';
// Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.
console.log(stret.replace(/x[(){}\[\]]*z/g, '-'))

let stre = '[abc] {abc} abc (abc) [abc]';
// Напишите регулярку, которая найдет строки в любых скобках и заменят их на '!'.
console.log(stre.replace(/[(){}\[\]].+?[(){}\[\]]/g, '='))


/*-------Символ шляпки------*/

let shlp = '^xx axx ^zz bkk @ss';
// Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.
console.log(shlp.replace(/[@^]\w{2}/g, '*'))
// Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.
console.log(shlp.replace(/[^@^\s]\w{2}/g, '*'))
// Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка, а затем две латинских буквы.
console.log(shlp.replace(/[^^\s]\w{2}/g, '*'))


/*------Дефис внутри кв скобок------*/
let defi = 'xaz xBz xcz x-z x@z';
// Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.
console.log(defi.replace(/x[a-zA-Z-]z/g, '_'))

let defitwo = 'xaz x$z x-z xcz x+z x%z x*z';
// Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.
console.log(defitwo.replace(/x[$+-]z/g, '_'))


/*------Начало и конец строки в регулярках------*/
let naca = 'aaa';
console.log(naca.replace(/^a+$/g, '!'))

let nac = 'abc def xyz';
// Напишите регулярку, которая найдет первую подстроку из букв.
console.log(nac.replace(/^\w+/g, '_'))
// Напишите регулярку, которая найдет последнюю подстроку из букв.
console.log(nac.replace(/\w+$/g, '_'))


/*-------Команда 'или' в регулярных выражениях-----*/
let oror = 'aeeea aeea aea axa axxa axxxa';
// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.
console.log(oror.replace(/a(e*|x*)a/g, '+'))
// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.
console.log(oror.replace(/a(e{2}|x*)a/g, '+'))


/*------Метод test------*/

console.log(/a+/.test('eee aaa bbb')) // вернет true

// Определите, начинается ли переданная строка с 'http://'.
console.log(/^http:\/\//.test('http://youtube.com'))

// Определите, начинается ли переданная строка с 'http://' или с 'https://'.
console.log(/^http:\/\/|^https:\/\//.test('https://meta.com'))

// Определите, что ли заканчивается переданная строка расширением 'txt', 'html' или 'php'.
console.log(/txt$|html$|php$/.test('kololo.html'))

// Определите, что ли заканчивается переданная строка расширением 'jpg' или 'jpeg'.
console.log(/jpg$|jpeg$/.test('pictures.jpg'))

// Определите, что ли заканчивается переданная строка расширением 'jpg', 'jpeg' или 'png'.
console.log(/jpg$|jpeg$|png$/.test('pinapple.png'))

// Определите, является ли строка 'числом, длиной от 1 до 12 цифр'.
console.log(/^[0-9]{1,12}$/.test('1292928474'))

// Определите, является ли переданная строка датой в формате год-месяц-день.
console.log(/[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/.test('2011-01-15'))

// Определите, является ли переданная строка датой в формате день.месяц.год.
console.log(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test('14.05.2000'))

// Определите, является ли переданная строка временем в формате часы:минуты:секунды.
console.log(/[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$/.test('22:12:22'))

// Определите, является ли переданная строка корректным емэйлом.
console.log(/\w+@\w+\.\w+/.test('2442jn@gmail.com'))

// Определите, является ли переданная строка доменным именем.
console.log(/\.\w+/.test('.ru'))


/*------Метод match с модификатором g------*/
let strr = 'a aa aaa aaaa';
let res = strr.match(/a+/g, '!');
console.log(res)

let mat = 'site.ru sss site.com zzz site.net';
// Получите массив доменных имен из этой строки.
let matRes = mat.match(/\.\w+/g)
console.log(matRes)

let matTwo = 'a1b c34d x567z';
// Найдите сумму всех чисел этой строки.
let matTwoRes = matTwo.match(/\d/g);
let sum = 0;
for (let i = 0; i < matTwoRes.length; i++) {
    sum = sum + Number(matTwoRes[i])
}
console.log(matTwoRes)
console.log(sum)


/*-------Карманы в методе match-----*/
let pock = 'sss domain.ru zzz';
let pockRes = pock.match(/(\w+)\.(\w+)/)
// Найдите этот домен и положите его имя в первый карман, а зону - во второй.
console.log(pockRes)
console.log(pockRes[0])
console.log(pockRes[1])
console.log(pockRes[2])


let pockTwo = '31.12.2025';
let pockTwoRes = pockTwo.match(/(\d+)\.(\d+)\.(\d{4})/)
// Положите день в первый карман, месяц - во второй, а год - в третий.
console.log(pockTwoRes)
console.log(pockTwoRes[0])
console.log(pockTwoRes[1])
console.log(pockTwoRes[2])
console.log(pockTwoRes[3])


/*-------Карманы в методе replace-----*/

let popo = '1 23 456 xax';
let popoRes = popo.replace(/(\d+)/g, '($1)');
console.log(popoRes)

let popoTwo = 'aaa@bbb ccc@ddd';
let popoTwoRes = popoTwo.replace(/([a-z]+)@([a-z]+)/g, '$2@$1')
console.log(popoTwoRes)

let popoThree = '12 34 56 78';
let popoThreeRes = popoThree.replace(/(\d)(\d)/g, '$2$1')
console.log(popoThreeRes)
// Поменяйте местами цифры во всех двухзначных числах.

let popoFour = '31.12.2025';
let popoFourRes = popoFour.replace(/(\d+)\.(\d+).(\d+)/, '$3.$2.$1')
console.log(popoFourRes)
// Преобразуйте эту дату в '2025.12.31'.


/*------Карманы по умолчанию в методе replace------*/

let po = '1 23 456';
let poR = po.replace(/\d+/g, '($&)');
console.log(poR)


let pocket = 'a1b2c3';
let pocketRes = pocket.replace(/\d/g, '$&$&')
console.log(pocketRes)
// Напишите регулярку, которая рядом с каждой цифрой напишет такую же.


let pocketTwo = 'sss site.ru zzz site.com kkk';
let pocketTwoRes = pocketTwo.replace(/\w+\.\w+/g, '<a href = "http://$&" >$&</a>')
console.log(pocketTwoRes)
// Замените домены на ссылки вида:
// < a href = "http://site.ru" > site.ru</>


/*-------Карманы в самой регулярке-----*/
let karm = 'aaa bbb ccc xyz';
console.log(karm.replace(/([a-z])\1\1/g, '+'))
// Найдите все подстроки, в которых есть три одинаковые буквы подряд.

let karmTwo = 'a aa aaa aaaa aaaaa';
console.log(karmTwo.replace(/([a-z])\1+/g, '+'))
// Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.


let karmThree = 'aaa aaa bbb bbb ccc ddd';
console.log(karmThree.replace(/(\w+) \1/g, '+'))
// Найдите все подстроки, в которых есть два одинаковых слова подряд.


/*-------Несохраняющие скобки-----*/
let nosave = 'abab123';
let nosaveR = nosave.match(/(?:ab)+([1-9]+)/);
console.log(nosaveR[1])
// ?: - не будет класть в карман

/*-----Позитивный и негативный просмотр-------*/

// Получите массив имен функций из строки.
let posi = 'func1() func2() func3()';
let posiRes = posi.match(/\w+(?=\(\))/g)
console.log(posiRes)

// Получите массив имен атрибутов этого тега.
let posiTwo = '<a href="" class="eee" id="zzz">';
let posiTwoRes = posiTwo.match(/\w+(?=")/g)
console.log(posiTwoRes)



/*------Коллбэк в методе replace------*/

let kol = '2+3= 4+5= 6+7=';
let kolRes = kol.replace(/(\d+)\+(\d+)=/g, function (match0, match1, match2) {
    let sum = Number(match1) + Number(match2);
    return match0 + sum;
})
console.log(kolRes)


let kolT = 'aaa [2] bbb [3] ccc [12] ddd';
let kolTRes = kolT.replace(/\d+/g, function (match) {
    return match * 2;
})
console.log(kolTRes)
// Найдите числа, стоящие в скобках и увеличьте их в два раза.То есть из нашей строки должна получится следующая: 'aaa [4] bbb [6] ccc [24] ddd'

let kolTh = '123 456 789';
let kolThRes = kolTh.replace(/(\d)(\d)(\d)/g, function (match0, match1, match2, match3) {
    return match3 + match2 + match1;
})
console.log(kolThRes)
// Найдите все числа и переверните их цифры в обратном порядке.То есть из нашей строки должна получится следующая: '321 654 987'


let kolF = '31.12.2025 30.11.2024 29.10.2023';
let kolFRes = kolF.replace(/(\d+)\.(\d+)\.(\d+)/g, function (alldate, day, month, year) {
    return year + '-' + month + '-' + day
})
console.log(kolFRes)
// Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка: '2025-12-31 2024-11-30 2023-10-29'


/*------------*/








/*------------*/
/*------------*/
/*------------*/
/*------------*/
/*------------*/
/*------------*/
/*------------*/
/*------------*/
/*------------*/