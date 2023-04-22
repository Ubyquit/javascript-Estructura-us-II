/*
Fisicas cantidad*IVA   IVA = 16%
Morales (cantidad-ISR)*IVA ISR = 1.25%

100*1.16 = 116
100*.16 = 16

100*1.25
100*.0125
*/

let cantidad = parseInt(prompt("Ingresa una cantidad"));
let tipoPersona = prompt("[1] 🙎 Fisica\n[2] 🏢 Moral");

const IVA = 0.16;
const ISR = 0.0125;

operacionIVA = cantidad * IVA;
operacionISR = cantidad * ISR;

fisica = cantidad + operacionIVA;
moral = (cantidad - operacionISR) + operacionIVA;

if (tipoPersona == 1) {
  document.write(`La cantidad: ${cantidad} <br>
    IVA: ${operacionIVA} <br>
    Total: ${fisica}`);
} else if (tipoPersona == 2) {
    document.write(`La cantidad: ${cantidad} <br>
    IVA: ${operacionIVA} <br>
    ISR: -${operacionISR} <br>
    Total: ${moral}`);
} else {
  alert("Valor erroneo");
}
