/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
всё в виде двух цифр, т.е. 31.12.16 10:00. 
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );*/


function formatDate(date) {

    let now = new Date();
    let difference = now - date;

    const second = 1000,
          minute = second * 60,
          hour = minute * 60;

    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = (date.getFullYear()).toString().slice(-2);
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);


    if (difference < second) {
        return ("Прямо сейчас");
    } else if (difference < minute) {
        return (`${difference / 1000} сек.назад `);
    } else if (difference < hour) {
        return (`${difference / 1000 / 60} мин.назад `);
    } else {
        return (`${day}.${month}.${year}.${hours}.${minutes}`);
    }
}

formatDate(new Date(new Date() - 1));


