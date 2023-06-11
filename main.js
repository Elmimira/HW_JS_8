// Массив объектов с продуктами и ценами
var products = [
{ название: "Яблоко", цена: 10 },
{ название: "Груша", цена: 15 },
{ название: "Банан", цена: 8 },
{ название: "Апельсин", цена: 12 },
];

// Функция вывода списка продуктов в консоль
function printProductList() {
for (var i = 0; i < products.length; i++) {
    var product = products[i];
    console.log(
    i + 1 + ". " + product.название + " - " + product.цена + " грн"
    );
}
}

// Функция проверки правильности ввода номера товара
function validateProductNumber(number) {
return !isNaN(number) && number > 0 && number <= products.length;
}

// Функция проверки правильности ввода количества товара
function validateQuantity(quantity) {
return !isNaN(quantity) && quantity > 0;
}

// Функция расчета итоговой стоимости покупки
function calculateTotalPrice(productIndex, quantity) {
var product = products[productIndex - 1];
  var totalPrice = product.цена * quantity;

if (totalPrice > 10000) {
    totalPrice *= 0.8; // Применяем скидку 20%
    console.log("Ваша покупка превышает 10 000 грн. Скидка 20% применена.");
}

console.log("Итоговая стоимость покупки: " + totalPrice + " грн");
}

// Выводим список продуктов в консоль
printProductList();

// Получаем номер товара от пользователя
var productNumber = parseInt(prompt("Введите номер товара:"));

// Проверяем правильность ввода номера товара
while (!validateProductNumber(productNumber)) {
productNumber = parseInt(
    prompt("Неверный номер товара. Введите номер товара:")
);
}

// Получаем количество товара от пользователя
var quantity = parseInt(prompt("Введите количество товара:"));

// Проверяем правильность ввода количества товара
while (!validateQuantity(quantity)) {
quantity = parseInt(
    prompt("Неверное количество товара. Введите количество товара:")
);
}

// Рассчитываем и выводим итоговую стоимость покупки
calculateTotalPrice(productNumber, quantity);
