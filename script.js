const classForm = document.querySelector("#class-form");
const goalInput = document.querySelector("#goal");
const recommendation = document.querySelector("#recommendation");
const bookingForm = document.querySelector("#booking-form");
const bookingStatus = document.querySelector("#booking-status");
 
const formats = [
  {
    keywords: ["свид", "пара", "дво"],
    text: "Подойдет формат «Свидание на двоих»: общая работа за гончарным кругом, две чашки и кофе после занятия.",
  },
  {
    keywords: ["друз", "компан", "вечер"],
    text: "Подойдет формат «Вечер с друзьями»: мини-группа, простые изделия и общий стол в кафе-зоне.",
  },
  {
    keywords: ["спокой", "один", "перезагруз", "устал"],
    text: "Подойдет индивидуальное занятие: меньше людей, медленный темп, чашка или подсвечник на выбор.",
  },
  {
    keywords: ["работ", "команд", "корпоратив"],
    text: "Подойдет мини-корпоратив: занятие для небольшой команды, чайная пауза и общая витрина готовых работ.",
  },
];
 
classForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = goalInput.value.trim().toLowerCase();
  const selected = formats.find((format) =>
    format.keywords.some((keyword) => value.includes(keyword)),
  );
 
  recommendation.textContent = selected
    ? selected.text
    : "Подойдет базовый мастер-класс «Моя первая чашка»: 90 минут, помощь мастера, кофе и готовое изделие после обжига. В реальном проекте такой подбор можно подключить к YandexGPT.";
});
 
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const name = formData.get("name") || "Гость";
  const format = formData.get("format");
  bookingStatus.textContent = `${name}, заявка принята. Для демонстрации выбран формат: ${format}.`;
  bookingForm.reset();
});
