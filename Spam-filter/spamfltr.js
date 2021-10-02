// спам-фильтр
function checkSpam(str) {
  if (str.match(/(viagra|xxx)/gim)) {
    return str.replace(/(viagra|xxx)/gim, "***");
  } else {
    return str;
  }
}

// отправляет сообщение
function sendMessage() {

  let inputValue = document.getElementById("myInput").value;
  let outputValue = checkSpam(inputValue);
  let outputElement = document.getElementById("myOutput");
  outputElement.value = outputValue;
}

document.getElementById("myBtn").onclick = sendMessage;