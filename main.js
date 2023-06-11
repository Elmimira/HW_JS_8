// Массив объектов с продуктами и ценами
var products = [
    { название: "Яблоко", цена: 10 },
    { название: "Груша", цена: 15 },
    { название: "Банан", цена: 8 },
    { название: "Апельсин", цена: 12 },
];

  // Вывод списка с данными по товарам в консоль
console.log("Список товаров:");
for (var i = 0; i < products.length; i++) {
    console.log(i + 1 + ". " + products[i].название + " - " + products[i].цена + " грн");
}

  // Получение номера товара от пользователя
var userInput = prompt("Введите номер товара:");
var productIndex = parseInt(userInput) - 1;

  // Проверка правильности ввода номера товара
while (isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
    userInput = prompt("Некорректный номер товара. Попробуйте еще раз:");
    productIndex = parseInt(userInput) - 1;
}

  // Получение количества товара от пользователя
userInput = prompt("Введите количество товара:");
var quantity = parseInt(userInput);

  // Проверка правильности ввода количества товара
while (isNaN(quantity) || quantity <= 0) {
    userInput = prompt("Некорректное количество товара. Попробуйте еще раз:");
    quantity = parseInt(userInput);
}

  // Вычисление стоимости покупки
  var totalPrice = products[productIndex].цена * quantity;

  // Проверка наличия скидки
if (totalPrice > 10000) {
    var discount = totalPrice * 0.2;
    var discountedPrice = totalPrice - discount;
    console.log("Итоговая стоимость с учетом скидки: " + discountedPrice + " грн");
    console.log("Вам предоставлена скидка в размере " + discount + " грн");
} else {
    console.log("Итоговая стоимость: " + totalPrice + " грн");
}
