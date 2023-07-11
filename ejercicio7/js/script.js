/*
 * Funciones con argumentos
 */

function realizarSuma(argNum1,argNum2){
  let num1 = argNum1;
  let num2 = argNum2;

  suma = num1 + num2;

  document.write(`<br>La suma es: ${suma}`);
}

let a = parseInt(prompt("ingresa un numero"));
realizarSuma(a,7);
realizarSuma(10,6);
realizarSuma(40,9);



