/* Сделайте генератор 10 случайных чисел (по нажатию на кнопку) в диапазоне от -10 до 10
 и найдите среди них минимальное, максимальное и среднее арифметическое,
 а также сумму и произведение всех этих чисел.
 */


//функция 
function getRandom() {

    document.getElementById("result").innerHTML = "";
    let arr = [];

    for (let i = 0; i < 10; i++) {
        let randomNuber = Math.round((Math.random() * 20 - 10));
        arr.push(randomNuber);
    }

    let maxNum = Math.max.apply(null, arr);
    let minNum = Math.min.apply(null, arr);

    let average = 0;
    for (let num of arr) {
        average += num / arr.length;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let mult = 1;
    for (let num of arr) {
        mult *= num;
    }

    document.getElementById("result").innerHTML += `<ul>
    <li>Сгенерировано ${arr}</li>
    <li>Минимальное ${minNum}</li>
    <li>Максимальное ${maxNum}</li>
    <li>Среднее арифметическое ${average}</li> 
    <li>Сумма чисел ${sum}</li>
    <li>Произведение чисел ${mult}</li>
    </ul>`;
}

document.getElementById("getResult").onclick = getRandom;


/* Я не стала использовать Math.random в среднем арифметическом, так как часто округляется до нуля в этом диапазоне */

