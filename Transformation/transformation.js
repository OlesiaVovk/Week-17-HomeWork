/* Сделайте интерфейс преобразования ФИО на три поля(input).
Учтите, пожалуйста, все нюансы - лишние пробелы, отсутствие больших букв в именах и пр.
Результат должен получиться идеальным.Например, было введено пользователем
 "   Цветкова алиса АлександровНА  ", а стало три поля:
 Имя: Алиса, Фамилия: Цветкова, Отчество: Александровна */


function makeBeautiful() {
    let myInput = document.getElementById("userInfo").value;
    let removeSpaces = myInput.trim();
    let array = removeSpaces.split(" ");

    for (let i = 0; i < array.length; i++) {
        array[i] = `${array[i].slice(0, 1).toUpperCase()}${array[i].slice(1).toLowerCase()}`;
    }

    document.getElementById("userSurname").value = array[0];
    document.getElementById("userName").value = array[1];
    document.getElementById("userPatronymic").value = array[2];

}

document.getElementById("myBtn").onclick = makeBeautiful;


