function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const changeColorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

function changeColorBodyFunc() {
  const random = getRandomHexColor();
  bodyEl.style.backgroundColor = `${random}`;
  colorText.textContent = random;
}

changeColorBtn.addEventListener("click", changeColorBodyFunc);
// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и
//   выводит значение цвета в span.color.
