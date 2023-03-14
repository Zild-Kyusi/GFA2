const num1 = document.getElementById("Num1");
const num2 = document.getElementById("Num2");
const sum = document.getElementById("add");
const difference = document.getElementById("subtract");
const product = document.getElementById("multiply");
const quotient = document.getElementById("divide");
const remainder = document.getElementById("modulus");
const result = document.getElementById("result");

sum.addEventListener("click", function() {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let sum = n1 + n2;
    result.textContent = "The sum of " + n1 + " and " + n2 + " is " + sum + ".";
});

difference.addEventListener("click", function() {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let difference = n1 - n2;
    result.textContent = "The difference of " + n1 + " and " + n2 + " is " + difference + ".";
});

product.addEventListener("click", function() {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let product = n1 * n2;
    result.textContent = "The product of " + n1 + " and " + n2 + " is " + product + ".";
});

quotient.addEventListener("click", function() {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let quotient = n1 / n2;
    result.textContent = "The quotient of " + n1 + " and " + n2 + " is " + quotient + ".";
});

remainder.addEventListener("click", function() {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let remainder = n1 % n2;
    result.textContent = "The remainder of " + n1 + " and " + n2 + " is " + remainder + ".";
});