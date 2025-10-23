let form = document.getElementById("aquariumForm");

form.onsubmit = function() {
    // 1. Получаем значения из полей формы и преобразуем в числа
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let resultDiv = document.getElementById("result");
    
    // 2. Проверяем валидность (как в твоей функции)
    if(length <= 0 || width <= 0 || height <= 0) {
        resultDiv.innerHTML = "Ошибка: числа должны быть больше 0";
        return false;
    }
    
    // 3. Считаем и выводим
    let volume = length * width * height;
    resultDiv.innerHTML = "Объем аквариума: " + volume + " см³";
    
    return false;
};