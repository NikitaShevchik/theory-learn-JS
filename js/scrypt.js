"use strict"


/*---------------------------------------------------------------------Регулярные выражения-------------------------------------------------------------------*/
function regularLearn() {
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


    /*------Метод search в регулярных выражениях JavaScript------*/

    let sea = '1 23 456 789';
    console.log(sea.search(/\w{3}/))


    /*------Метод split в регулярных выражениях------*/
    let spl = '2025-12-31 12:59:59';
    // Разбейте эту строку так, чтобы все части даты и времени были в одном массиве. То есть у вас должен получится следующий массив:
    // ['2025', '12', '31', '12', '59', '59'];
    let splArr = spl.split(/[-:\s]/)
    console.log(splArr)

    /*------Головоломки------*/
    // Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.
    let golOne = '2022';
    console.log(golOne.replace(/\w+/, function (year) {
        if (year <= 2100 && year >= 1900) {
            return true
        } else {
            return false
        }
    }))
    // Определите, что переданная строка является корректным временем вида часы:минуты. Часы и минуты не должны выходить за диапазон времени.
    let golTwo = '05:01'
    console.log(golTwo.replace(/([\w]+)\:([\w]+)/, function (time, hours, minutes) {
        if (time.length == 5) {
            if (hours >= 0 && hours < 24) {
                if (minutes >= 0 && minutes < 60) {
                    return 'right time'
                } else {
                    return 'Not right time'
                }
            } else {
                return 'Not right time'
            }
        } else {
            return 'Not right time'
        }
    }))

    // Удалите одной регуляркой все повторяющиеся слова из строки.
    // let golThree = 'apple orange kivi melon apple kivi orange kivi melon kivi melon melon nikita apple';
    // console.log(golThree.replace(/([a-z]+)/g, function (allWords, word) {
    //     let golThreeKar = golThree.match(/(\w+)/g);
    //     let result = [];
    //     result.push(golThreeKar[0])
    //     for (let i = 0; i < golThreeKar.length; i++) {
    //         if (!result.includes(golThreeKar[i])) {
    //             result.push(golThreeKar[i])
    //         }
    //     }
    //     let resultNew = result.join(' ')
    //     return word[0]
    // }))

    // let golo = 'apple orange apple'.split(' ').filter(function (word, i, arr) {
    //     return !~arr.indexOf(word, i + 1);
    // }).join(" ")
    // console.log(golo)

    let gogolo = 'nikita nikita orange bima bima apple'
    console.log(gogolo.replace(/([a-z]+) \1/g, '-'))

    // Удалите одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы.
    let gogolok = 'This sentence with added words with double letters'
    console.log(gogolok.replace(/\s*\w*([a-z])\1[a-z]*/g, function (all, word, lett) {
        return ''
    }))
}
/*---------------------------------------------------------------------Коллекции--------------------------------------------------------------------*/

/*-----Псевдомассивы-------*/
function collectionInJsLearn() {


    const allP = document.querySelectorAll('p');

    // Каким-нибудь способом получите псевдомассив элементов. Преобразуйте его в массив тремя описанными способами.
    let pArr = [];
    for (let p of allP) {
        pArr.push(p.innerHTML)
    }

    let pArr2 = [...allP]
    console.log(pArr2)

    let pArr3 = Array.from(allP)
    console.log(pArr3)

    // С помощью метода slice получите все абзацы, кроме первого и последнего.
    console.log(pArr.slice(1, pArr.length - 1))

    /*-----Типы псевдомассивов в JavaScript-------*/

    // При добавлении нового элемента в наш DOM - в этом случае он автоматически появится в HTMLCollection, но коллекция NodeList останется без изменений.

    const main = document.querySelector('.main')

    let mainNodes = main.childNodes;
    let mainChild = main.children;

    // main.innerHTML += `<p>Йо я новый</p>`
    console.log(mainNodes, mainChild, allP)

    /*-----Коллекции Map-------*/

    let obj = { a: 1, b: 2, c: 3 };

    let map = new Map;

    let arr1 = [1, 2];
    let arr2 = [3, 4];

    map.set(arr1, 'Hello')
    map.set(arr2, 'How are you')

    console.log(map.get(arr1), map.get(arr2))
    // Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы.
    let obj1 = { Message: 'hello' }
    let obj2 = { Question: 'how are you?' }
    let obj3 = { Name: 'Nikita' }

    let arr3 = [5, 6]
    let arr4 = [7, 8]
    let arr5 = [9, 10]

    map.set(obj1, arr3)
    map.set(obj2, arr4)
    map.set(obj3, arr5)
    console.log(map.get(obj1), map.get(obj2), map.get(obj3))

    /*------Полезные свойства и методы коллекций Map------*/

    console.log(map.size);
    console.log(map.has(arr1)) // Проверить наличие ключа
    map.delete(arr2) // Удалить элемент из коллекции
    console.log(map.get(arr2));
    map.clear() // Очистить всю коллекцию

    /*------Перебор коллекций Map циклом------*/

    let map2 = new Map;

    let arrMap1 = [1, 2];
    let arrMap2 = [3, 4];

    map2.set(arrMap1, 'data1');
    map2.set(arrMap2, 'data2');

    for (let elem of map2) {
        console.log(elem)
    }

    for (let [key, elem] of map2) {
        console.log(key)
        console.log(elem)
    }

    /*------Отделение ключей и значений в коллекциях Map------*/

    let values = map2.values()
    let keys = map2.keys()
    let entries = map2.entries();
    console.log(values, keys)
    console.log(entries)

    // Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.
    for (let key of keys) {
        console.log(key)
    }
    // Пусть дана коллекция Map. Получите массив ее элементов и переберите их циклом for-of.
    for (let value of values) {
        console.log(value)
    }

    /*------Применение коллекций Map------*/
    function primColMap() {
        let mapP = new Map;
        var z = 1;
        for (let p of allP) {
            mapP.set(p, z++)
        }
        for (let p of allP) {
            p.addEventListener('click', function () {
                this.innerHTML = this.innerHTML + mapP.get(this);
            })
        }
    }

    // Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.
    function firstInputMapTask() {
        const allInputs = document.querySelectorAll('input')
        let mapInput = new Map;

        var o = 1;
        for (let i of allInputs) {
            mapInput.set(i, o++)
        }
        console.log(mapInput)
        for (let inpu of allInputs) {
            inpu.addEventListener('click', function () {
                this.value = mapInput.get(this)
            })
        }
    }

    // Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.
    function secondInputMapTask() {
        const allInputs = document.querySelectorAll('input')
        let mapInput = new Map;
        for (let inpu of allInputs) {
            inpu.addEventListener('keyup', function (e) {
                if (e.key == 'Enter') {
                    mapInput.set(this.value)
                }
            })
            inpu.addEventListener('blur', function () {
                for (let key of mapInput.keys()) {
                    console.log(key)
                }
                // this.value = mapInput.get(this)
            })
        }
    }

    /*------Коллекции Set------*/
    let set = new Set;
    let arr = [1, 2, 3, 1, 3, 4];
    // С помощью этого массива создаейте коллекцию Set.
    for (let a of arr) {
        set.add(a)
    }
    console.log(set)
    // Создайте пустую коллекцию Set.С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.
    let set2 = new Set;
    set2.add(1);
    set2.add(2);
    set2.add(3);
    console.log(set2)

    /*------Полезные свойства и методы коллекций Set------*/

    // set.size
    // set.has(1)
    // set.delete(1)
    // set.clear()

    // Создайте коллекцию Set с начальными значениями 1, 2 и 3. Выведите на экран количество элементов в коллекции.
    let k = new Set;
    k.add(1);
    k.add(2);
    k.add(3)
    console.log(k.size)
    // Создайте коллекцию Set с начальными значениями 1, 2 и 3. Проверьте наличие в коллекции элемента со значением 3, а затем элемента со значением 4.
    console.log(k.has(3), k.has(4))

    /*-----Перебор коллекций Set циклом-------*/

    // Создайте коллекцию Set с какими-нибудь числами. Переберите эту коллекцию циклом и найдите сумму ее элементов.

    let su = new Set;
    su.add(5).add(6).add(3).add(9).add(3);
    var sumSu = 0;
    for (let k of su) {
        sumSu = sumSu + k;
    }
    console.log('Сумма коллеции = ', sumSu)

    /*------Преобразование коллекций Set------*/

    // Дана коллекция Set. Преобразуйте ее в массив двумя описанными способами.
    let seti = new Set([1, 2, 3]);
    let mass = [...seti];
    let yt = Array.from(seti)
    console.log(mass, yt)
    // Дан массив. Преобразуйте его в коллекцию.
    let arri = [1, 2, 4, 4, 5, 3, 7, 3]
    let setti = new Set(arri)
    console.log(arri, setti)

    /*------Удаление дублей с помощью коллекций Set------*/

    // Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.
    let arrai = [1, 2, 2, 2, 3]

    function cleanArray(arr) {
        let se = new Set(arr);
        arr = [...se]
        return arr
    }

    console.log(cleanArray(arrai))

    /*-----Получение дом элементов без дублей-------*/
    const button = document.querySelector('button')
    let setik = new Set;
    for (let p of allP) {
        p.addEventListener('click', function () {
            setik.add(p)
        })
    }
    button.addEventListener('click', function () {
        for (let s of setik) {
            s.innerHTML += '!'
        }
    })

    /*------Массивы ArrayBuffer в JavaScript------*/
    let buffer = new ArrayBuffer(32)
    console.log(buffer)
    // супер редкий

    /*-------Введение в формат JSON в JavaScript-----*/

    let arro = [1, 2, 3, 'a', 'b', 'c'];
    // Вручную преобразуйте этот массив в строку в формате JSON.
    let arrojson = '[1, 2, 3, a, b, c]';
    console.log(typeof (arro), typeof (arrojson))

    let objo = {
        a: 1,
        b: 2,
        c: 'eee',
        d: true,
    };
    // Вручную преобразуйте этот массив в строку в формате JSON.
    let objojson = `{
    "a": "1",
    "b": "2",
    "c": "eee",
    "d": "true"
}`;


    let objor = {
        a: ['a', 'b', 'c',],
        b: '111',
        c: 'eee',
    };
    // Вручную преобразуйте этот массив в строку в формате JSON.
    let objorjson = `{
    "a": "[a, b, c]",
    "b": "111",
    "c": "eee"
}`;

    /*-----Преобразование JSON в структуру данных JavaScript-------*/
    let json = '[1, 2, 3, 4, 5, "a", "b"]'; // массив в формате джейсон

    let arrjson = JSON.parse(json);
    console.log(arrjson)
    // let json = '[1, 2, 3, 4, 5,]'; // некорректный JSON
    // let arr = JSON.parse(json);    // выдаст ошибку


    let json2 = '[1,2,3,4,5]';
    // Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.
    let arrjson2 = JSON.parse(json2)
    let sumjs = 0;
    for (let k of arrjson2) {
        sumjs = sumjs + k;
    }
    console.log(arrjson2, sumjs)


    let json3 = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
    // Найдите сумму чисел из представленных данных.
    let arrjson3 = JSON.parse(json3);
    let sumarrjson3 = 0;
    for (let i in arrjson3) {
        for (let k of arrjson3[i]) {
            sumarrjson3 = sumarrjson3 + k;
        }
    }
    console.log(sumarrjson3)




    let json4 = '["user1","user2","user3","user4","user5"]';
    // Выведите эти имена в виде списка ul.
    const ul = document.querySelector('.ul')
    let arrjson4 = JSON.parse(json4)
    for (let u of arrjson4) {
        ul.innerHTML += `<li class="li">${u}</li>`
    }






    let json5 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	},
	{
		"name": "user4",
		"age": 17,
		"salary": 700
	}
]`;
    // Выведите этих работников на экран в виде HTML таблицы.
    let arrjson5 = JSON.parse(json5);
    const tableInfo = document.querySelector('.workers__body')

    for (let i of arrjson5) {
        console.log(i)
        tableInfo.innerHTML += `<ul class="workers__item item">
    <li class="item__name">${i.name}</li>
    <li class="item__age">${i.age}</li>
    <li class="item__salary">${i.salary}$</li>
</ul>`
    }


    /*------Преобразование структур данных JavaScript в формат JSON------*/
    let arrnojson = [1, 2, 3, 4, 5, 'a', 'b'];
    let jsonarr = JSON.stringify(arrnojson);
    console.log(jsonarr)

    let jsonov = ['user1', 'user2', 'user3', 'user4', 'user5'];
    // Преобразуйте этот массив в формат JSON.
    let arrjsonov = JSON.stringify(jsonov)
    console.log(arrjsonov)




    // Получите список городов в формате JSON.
    const allCities = document.querySelector('.cities');
    let citiesArr = []
    for (let c of allCities.children) {
        citiesArr.push(c.textContent)
    }
    let citiesjson = JSON.stringify(citiesArr);
    console.log(citiesjson);



    // Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.
    const table = document.querySelector('table');
    const tr = table.querySelectorAll('tr')
    let objWork = [];
    for (let i = 1; i < tr.length; i++) {
        const allTd = tr[i].querySelectorAll('td');
        objWork.push({
            surname: allTd[0].textContent,
            name: allTd[1].textContent,
            patronymic: allTd[2].textContent
        })
    }
    let jsonobjwork = JSON.stringify(objWork)
    console.log(jsonobjwork)

    /*-----Изменение данных в JSON на JavaScript-------*/


    let jsonok = '["user1","user2","user3","user4","user5"]';
    // Добавьте в конец строки еще одного юзера.
    // let ar = JSON.parse(jsonok)
    // ar.push('user6')
    // jsonok = JSON.stringify(ar)
    // console.log(jsonok)


    function parsePushStringify(jeson, value) {
        let arrjeson = JSON.parse(jeson);
        arrjeson.push(value);
        jeson = JSON.stringify(arrjeson)
        return jeson
    }
    console.log(parsePushStringify(jsonok, 'user6'))



    let jsonic = '["user1","userERROR","user3","user4","user5"]';
    console.log(jsonic)
    // Поменяйте имя второго юзера.
    let arrjsonic = JSON.parse(jsonic);
    arrjsonic[1] = "user2";
    jsonic = JSON.stringify(arrjsonic)
    console.log(jsonic)



    let jsonych = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
    console.log(jsonych)
    // Добавьте в эту строку еще одного работника.
    let arrjsonych = JSON.parse(jsonych);
    console.log(arrjsonych)
    arrjsonych.push({
        name: 'user4',
        age: 17,
        salary: 80900
    });
    console.log(arrjsonych)
    jsonych = JSON.stringify(arrjsonych)
    console.log(jsonych)
}

/*--------------------------------------Основы работы с локальным хранилищем в JavaScript--------------------------------------*/

function localStorageStartLearn() {
    localStorage.setItem('key', 'hello')
    let str = localStorage.getItem('key')
    console.log(str)

    function setItemsInLocal(key1, key2, key3, value1, value2, value3) {
        localStorage.setItem(key1, value1);
        localStorage.setItem(key2, value2)
        localStorage.setItem(key3, value3)
    }

    setItemsInLocal('first', 'second', 'third', '1', '2', '3');

    function getSumLocalStorage(key1, key2, key3) {
        let a = localStorage.getItem(key1);
        let b = localStorage.getItem(key2);
        let c = localStorage.getItem(key3);
        let sum = Number(a) + Number(b) + Number(c);
        console.log(sum)
    }

    getSumLocalStorage('first', 'second', 'third')

    let timeUser = localStorage.getItem('time');

    if (!timeUser) {
        let timeNow = (new Date()).getTime()
        localStorage.setItem('time', timeNow)
    }


    function timeFromLastEntry(last) {
        let timeNow = (new Date()).getTime();
        let howMuch = ((Number(timeNow) - Number(last)) / 60000).toFixed(0)
        console.log('С прошлого санса прошло ', howMuch, ' минут')
    }
    timeFromLastEntry(timeUser)


    const inputForBD = document.querySelector('.locals__input');
    const saveButtonBirthday = document.querySelector('.locals__save');
    const outputMessage = document.querySelector('.locals__output');

    saveButtonBirthday.addEventListener('click', function () {
        if (inputForBD.value.length == 10) {
            localStorage.setItem('birthDate', inputForBD.value)
        }
    })

    let birthDate = localStorage.getItem('birthDate')

    window.onload = function () {

        if (birthDate != null) {
            let today = (new Date()).getDate()
            let todayMonth = (new Date()).getMonth() + 1
            if (todayMonth == Number(birthDate.slice(5, 7))) {
                if (today == Number(birthDate.slice(8, 10))) {
                    outputMessage.classList.remove('_hide')
                    outputMessage.innerHTML = 'С ДНЕМ РОЖДЕНИЯ'
                }
            }
        }
    }

    const input = document.querySelector('.input')
    input.addEventListener('blur', function () {
        localStorage.setItem('inputValue', input.value)
    })

    window.onload = function () {
        input.setAttribute('placeholder', localStorage.getItem('inputValue'))
    }

    // Пользователь заходит на сайт, затем обновляет страницу, 
    // затем еще раз обновляет и так далее. Сделайте счетчик обновления страницы. 
    // Каждый раз при обновлении выводите значение счетчика на экран.

    if (localStorage.getItem('reloads') == null) {
        localStorage.setItem('reloads', 0)
    }
    window.addEventListener('unload', function () {
        localStorage.setItem('reloads', Number(localStorage.getItem('reloads')) + 1);
        let reloads = localStorage.getItem('reloads');
        if (reloads == 100) {
            localStorage.removeItem('reloads')
        }
    })

    console.log(localStorage.getItem('reloads'))
}
/*-------------------------------------Хранение массивов и объектов в локальном хранилище---------------------------------------*/
function savingLocalsStorage() {
    let arr = [1, 2, 3, 4, 5]
    localStorage.setItem('array', JSON.stringify(arr))
    let getArr = localStorage.getItem('array');
    console.log(JSON.parse(getArr))
    const inputsSaver = document.querySelector('.inputs__saver');
    let arrInputs = [];
    const allInputs = document.querySelectorAll('.input');
    inputsSaver.addEventListener('click', function () {
        arrInputs = [];
        for (let inp of allInputs) {
            arrInputs.push(inp.value)
        }
        localStorage.setItem('inputsValues', JSON.stringify(arrInputs))
        let valuesInputs = localStorage.getItem('inputsValues')
        console.log(JSON.parse(valuesInputs))
    })
    window.onload = function () {
        let valuesInputs = localStorage.getItem('inputsValues')
        let arrayWithValuer = JSON.parse(valuesInputs);
        let i = 0;
        for (let inpu of allInputs) {
            inpu.setAttribute('placeholder', arrayWithValuer[i])
            i++;
        }
        console.log(arrayWithValuer)
    }
}
/*------Модификация хранимых структур------*/
function modificationSavedtructures() {
    let users = [
        {
            surname: 'surname1',
            name: 'name1',
            age: 31,
        },
        {
            surname: 'surname2',
            name: 'name2',
            age: 32,
        },
        {
            surname: 'surname3',
            name: 'name3',
            age: 33,
        },
    ];
    const inputsSaver = document.querySelector('.inputs__saver');
    const allInputs = document.querySelectorAll('.input');

    localStorage.setItem('users', JSON.stringify(users))
    console.log(localStorage.getItem('users'))

    let userNew = { surname: '-', name: '-', age: '-' }

    // Сохраните его в локальное хранилище. Затем сделайте 3 инпута и кнопку. 
    // Пусть в инпуты вводятся фамилия, имя и возраст. 
    // По нажатию на кнопку запишите нового юзера в конец сохраненного в хранилище массива.
    function localInputs() {
        let arrayUsersJSON = localStorage.getItem('users');
        let users = JSON.parse(arrayUsersJSON)
        let userNew = { surname: '-', name: '-', age: '-' }
        userNew.surname = allInputs[0].value;
        userNew.name = allInputs[1].value;
        userNew.age = Number(allInputs[2].value);
        users.push(userNew);
        localStorage.setItem('users', JSON.stringify(users))

        console.log(localStorage.getItem('users'))
        console.log(users)
    }
    inputsSaver.addEventListener('click', localInputs)
}

/*-----------------------------------------Обработка исключительных ситуаций в JavaScript-----------------------------------------*/
// let data = JSON.parse('{1,2,3,4,5}');

// let str = '';
// for (let i = 1; i <= 6 * 10 ** 6; i++) { // формируем строку более 5 мб
// 	str += '+';
// }

// localStorage.setItem('key', str); // пытаемся записать в хранилище


// try {
//     let data = JSON.parse('{1,2,3,4,5}');
// } catch (error) {
//     console.log('ОШИБКА, НЕВЕРНЫЙ ДЖЕЙСОН')
// }


// Оберните этот код в конструкцию try-catch. В блоке catch выведите сообщение о переполнении хранилища.
// Проверьте работу вашего кода для строки размером менее 5 мб и для строки большего размера.
function fTrycatch1() {
    let str = '';
    for (let i = 1; i <= 6 * 10 ** 6; i++) { // формируем строку более 5 мб
        str += '+';
    }
    try {
        localStorage.setItem('key', str);
        console.log('Успех')
    } catch (error) {
        console.log('Хранилище переполнено')
    }
}

// Дан JSON, внутри которого хранится массив. Если этот JSON корректный, то выведите элементы массива в виде списка ul.
// Если же JSON не корректный, выведите на экран сообщение о том, что на странице случилась ошибка.
function fTrycatch2() {
    try {
        let jsonTest = '[1, 2, 3, 4]'
        let jsonParse = JSON.parse(jsonTest)
        console.log('Верный джейсон')
        console.log(jsonParse)
        const cities = document.querySelector('.cities');
        for (let j of jsonParse) {
            cities.innerHTML += `<li class = "cities__li">${j}</li>`
        }

    } catch (error) {
        console.log('Неверный джейсон')
    }
}


// Что не так с этим кодом? Исправьте недостатки этого кода.
// let str = 'некая строка';
// localStorage.setItem('key', str);
// alert('успешно сохранено!');
function fTrycatch3() {
    let str = 'некая строка';
    try {
        localStorage.setItem('key', str);
        alert('успешно сохранено!');
    } catch (error) {
        alert('Хранилище переполненно, не сохранено :(');
    }

}

// Что не так с этим кодом? Исправьте недостатки этого кода.

// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// alert(sum);

function fTrycatch4() {
    let json = '[1,2,3,4,5]';
    try {
        let arr = JSON.parse(json);
        let sum = 0;
        for (let elem of arr) {
            sum += +elem;
        }
        alert(sum);
    } catch (error) {
        alert(`Ошибка, ${json} не является корректным джейсоном`)
    }
}
function fTrycatchError() {
    // Вложенность кода
    function save(str) {
        localStorage.setItem('key', str);
        console.log('yes')
    }
    try {
        save('string');
    } catch (error) {
        alert('закончилось место в локальном хранилище!');
    }

    // Дана функция, преобразующая JSON в массив:
    function getArr(json) {
        return JSON.parse(json);
    }
    // В следующем коде из JSON получают массив:
    // let arr = getArr('[1,2,3,4,5]');
    // console.log(arr);

    // Оберните вызов функции в конструкцию try-catch.
    try {
        let arr = getArr('[1,2,3,4,5]');
        console.log(arr);
    } catch (error) {
        alert('Неверный джейсон');
    }

    /*------Объект с ошибкой------*/
    // Специально создайте исключительную ситуацию, связанную с попыткой разбора некорректного JSON. Выведите в консоль имя и текст этой ошибки.

    try {
        let arr = getArr([1, 2, 3, 4, 5]);
    } catch (error) {
        console.log(error.name); // имя ошибки
        console.log(error.message); // текст ошибки
    }

    // Специально создайте исключительную ситуацию, связанную с переполнением локального хранилища. Выведите в консоль имя и текст этой ошибки.
    let str = ''
    try {
        for (let i = 0; i < 6 * 10 ** 6; i++) {
            str += '+'
        }
        localStorage.setItem('longPlus', str)
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }

    // создайте функцию, принимающую массив, и заполняющий локальный стораж каждым элементом этого массива. Затем добавим его в трайкетч
    // и в случае ошибки = дадим понять пользователю в чем именно беда

    function writeLocal(json) {
        let array = JSON.parse(json)

        for (let i = 0; i < array.length; i++) {
            localStorage.setItem(i, array[i])
        }
    }
    try {
        writeLocal('[1, 2, 3, 4]')
        console.log(localStorage)
    } catch (error) {
        if (error.name === 'SyntaxError') {
            console.log('Неправильно записанный джейсон')
        }
        if (error.name === 'QuotaExceededError') {
            console.log('Память локального хранилища заполнена')
        }
    }
}

/*------Выбрасывание исключительных ситуаций в JavaScript------*/
function throwError() {


    // new Error('эрор')

    // throw new Error('эрор');

    function div(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error('ошибка деления на ноль');
        }
    }

    // console.log(div(5, 0))
    // alert(div(5, 0))

    // try {
    //     alert(div(3, 0));
    // } catch (error) {
    //     alert('вы пытаетесь делить на 0, что запрещено');
    // }


    // Напишите свою функцию, которая будет извлекать корень из числа и при этом выбрасывать исключение, 
    // если корень извлекается из отрицательного числа.
    let result = Math.sqrt(-1);

    function sqrt(a) {
        if (a >= 0) {
            alert(Math.sqrt(a))
        } else {
            throw new Error('Нельзя извлекать корень из отрицательного числа')
        }
    }

    try {
        sqrt(-100)
    } catch (error) {
        alert('Запрещенно извлекать корень из отрицательного числа!')
    }

    // try {
    //     if (result === NaN){
    //         console.log(result)
    //     }
    // } catch (error) {

    // }
    // console.log(result); // выведет NaN
}

/*------Типы исключений------*/

// В JavaScript предусмотрено решение этой проблемы: можно выбрасывать исключения не только типа Error, 
// но и любого встроенного в JavaScript типа ошибки, например, TypeError, SyntaxError, RangeError.

try {
    // throw new Error('текст исключения');
    throw new SyntaxError('текст исключения');
} catch (error) {
    console.log(error.name); // 'Error'
    console.log(error.message); // 'текст исключения'
}

try {
    // throw new Error('текст исключения');
    throw new TypeError('текст Type эрора');
} catch (error) {
    console.log(error.name); // 'Error'
    console.log(error.message); // 'текст исключения'
}

let x = 2;
try {
    if (x == 3) {
        throw new SyntaxError('текст исключения');
    } else {
        throw new RangeError('текст Type эрора');
    }
} catch (error) {
    if (error.name == 'SyntaxError') {
        console.log('syntax')
    } else if (error.name == 'RangeError') {
        console.log('range error')
    }
}


// Переделайте эту функцию так, чтобы она выбрасывала исключение с каким-нибудь придуманными типом.

function throwErrorReplace() {



    function div(a, b) {
        if (b != 0) {
            alert(a / b)
        } else {
            throw { name: 'DivisionByZeroError', message: 'Ошибка деления на ноль' }
        }
    }

    // DivisionByZeroError

    try {
        div(5, 2)
    } catch (error) {
        alert(error.message)
    }

    // Выше вы делали функцию, выбрасывающую исключение при попытке извлечь корень из отрицательного числа.
    // Переделайте вашу функцию так, чтобы она выбрасывала исключение с придуманным вами типом.
    // Хорошо подумайте над названием исключения, чтобы это название было удачным.

    function sqrt(a) {
        if (a < 0) {
            throw { name: 'SqrtNegativeNumber', message: 'Нельзя извлекать корень из отрицательного числа' }
        } else {
            let result = Math.sqrt(a)
            alert(result)
        }
    }

    try {
        sqrt(-10)
    } catch (error) {
        alert(error.message)
    }
}

/*------Пример применения------*/


window.addEventListener('load', function () {
    const locals = document.querySelector('.locals');
    locals.innerHTML = '<div id="product" data-product="яблоко" data-price="1000" data-amount="5"></div>'
})

function getCost(elem) {
    return elem.dataset.price * elem.dataset.amount;
}










/*------------*/
/*------------*/
/*------------*/
/*------------*/
