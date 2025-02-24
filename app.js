// Подключаем Telegram Web App SDK
const tg = window.Telegram.WebApp;

// Ждем, пока страница загрузится
document.addEventListener("DOMContentLoaded", function () {
    // Получаем кнопку
    const btn = document.getElementById("btn");

    // Добавляем обработчик события на кнопку
    btn.addEventListener("click", function () {
        alert("Кнопка нажата!");
        tg.sendData("Данные отправлены в Telegram!");
    });
});

// Инициализация Mini App
tg.ready();