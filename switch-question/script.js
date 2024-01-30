// DO WHILE

//// продолжение вопроса, пока не будет правильный ответ
// let question
// let answer = 6
// do {
//     question = +prompt('Сколько будет 2+2*2')
//     answer = 6
// }
// while (answer != question) {
//     alert('Правильно')
// }

// деление числа, пока  оно не получится  меньше другого
let num = 1000
let numConst = 2
let count = 0
// Повторение условия
do {
    num = num / 2
    count++
}
// Проверка условия
while (num >= 50)
document.write('Количесто делений - '+count + ' ')
document.write('Само число - '+num + ' ')




















// WHILE


// счетчик до нуля
// let num = prompt('Введите число')
// let a = num
// while (num > 0) {
//     a--
//     document.write(a)
//     if (a <= 1) {
//         num = false
//     }
// }

// факториал
// let num = prompt('Введите число')
// let step = prompt('Введите степень')
// let i = 0
// let res = 1;
// while ( i < step) {
//     res = res * num
//     i++
// }
// alert(res)

// общие делители
// let num1 = +prompt('Введите первое число')
// let num2 = +prompt('Введите второе число')
// let num
// if (num1 > num2) {
//     num = num1
// }
// else {
//     num = num2
// }

// while (0 < num) {
//     if (num1 % num == 0 || num2 % num == 0) {
//         document.write(num + ' ')
//     }
//     num--
// }

// факториал
// let num = +prompt('Введите число')
// let counter = 1
// let res = 1

// while (counter != num) {
//     counter++
//     res = res * counter
// }
// document.write(res)


