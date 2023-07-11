/*
 * Funciones sin argumentos
 */

function realizarSuma() {
  let num1 = parseInt(prompt("Ingresa el primer valor"));
  let num2 = parseInt(prompt("Ingresa el segundo valor"));

  suma = num1 + num2;

  document.write(`<br>La suma es: ${suma}`);
}

function realizarResta() {
  let num1 = parseInt(prompt("Ingresa el primer valor"));
  let num2 = parseInt(prompt("Ingresa el segundo valor"));

  suma = num1 - num2;

  document.write(`<br>La resta es: ${suma}`);
}

function realizarMultiplicacion() {
  let num1 = parseInt(prompt("Ingresa el primer valor"));
  let num2 = parseInt(prompt("Ingresa el segundo valor"));

  suma = num1 * num2;

  document.write(`<br>La multiplicacion es: ${suma}`);
}

function realizarDivision() {
  let num1 = parseInt(prompt("Ingresa el primer valor"));
  let num2 = parseInt(prompt("Ingresa el segundo valor"));

  suma = num1 / num2;

  document.write(`<br>La division es: ${suma}`);
}

realizarSuma();
realizarResta();
realizarMultiplicacion();
realizarDivision();
