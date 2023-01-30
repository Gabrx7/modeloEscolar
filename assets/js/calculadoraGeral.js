const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

// Adição
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", function() {
  result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
});

// Subtração
const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener("click", function() {
  result.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
});

// Multiplicação
const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener("click", function() {
  result.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
});

// Divisão
const divideBtn = document.getElementById("divide");
divideBtn.addEventListener("click", function() {
  result.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
});