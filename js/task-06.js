const inputEl = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length]");

inputEl.addEventListener("blur", changeBorder);

function changeBorder(event) {
  const inputValue = event.currentTarget.value;
  const lengthInput = inputValue.length;
  const dataLengthEl = Number(inputEl.dataset.length);

  if (lengthInput === dataLengthEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// Если введено подходящее количество символов, то border инпута становится
// зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.
