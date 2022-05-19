const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const DEFAULT_USERNAME = "Anonymous";

function changeUsername(event) {
  if (event.currentTarget.value === "") {
    nameOutputEl.textContent = DEFAULT_USERNAME;
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
}
nameInputEl.addEventListener("input", changeUsername);
// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
