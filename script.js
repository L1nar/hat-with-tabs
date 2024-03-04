const tabList = document.querySelector('#tabList');
const tabContent = document.querySelectorAll('.tabContent');
const tabLink = document.querySelectorAll('.tabLink');

const defaultOpen = document.querySelectorAll('#defaultOpen');
const tabActive = document.querySelector('.tabContent.active');

// getComputedStyle(Element); - позволяет получить значение любого CSS свойства элемента, даже из CSS файла.
console.log(getComputedStyle(tabActive).backgroundColor);

// Установить по умолчанию такой же цвет как у активной вкладки.
defaultOpen.style.backgroundColor = getComputedStyle(tabActive).backgroundColor;

tabList.addEventListener('click', (event) => {
    const targetElem = event.target; //Кнопка по которой нажали.
    console.log(targetElem);
    // element.dataset.имя - обращение к атрибуту с указанным именем.
    const dataColour = targetElem.dataset.colour;
    console.log(dataColour);

    // Перебирать все вкладки с контентом
    for (let tab of tabContent) {
        // Скрыть все вкладки
        tab.classList.remove('active');
        // Если id вкладки равен дата атрибуту
        if (tab == dataColour) {
            tab.classList.add('active');
        }
    }
})