const arrayINE = {
  apPaterno: "VILLAFAÑA",
  apMaterno: "REJON",
  nombres: "LUIS FERNANDO",
  sexo: "H",
  domicilio: "CANCUN QROO, REG 227 C.P.77516",
  claveLector: "QWERTYUIOP12345678",
  CURP: "QWERTYUIOP123456",
  registro: "2008 02",
  fechaNacimiento: "25/09/1990",
  seccion: "0108",
  vigencia: "2020 - 2023",
  img:"img/Captura de pantalla 2023-04-21 a la(s) 10.07.31 a.m..png"
};

let apPaterno = arrayINE.apPaterno;
let apMaterno = arrayINE.apMaterno;
let nombres = arrayINE.nombres;
let sexo = arrayINE.sexo;
let domicilio = arrayINE.domicilio;
let claveLector = arrayINE.claveLector;
const CURP = arrayINE.CURP;
let registro = arrayINE.registro;
let fechaNacimiento = arrayINE.fechaNacimiento;
let seccion = arrayINE.seccion;
let vigencia = arrayINE.vigencia;
let img = arrayINE.img;

document.getElementById("apPaterno").innerHTML = apPaterno;
document.getElementById("apMaterno").innerHTML = apMaterno;
document.getElementById("nombres").innerHTML = nombres;
document.getElementById("img").src = img;
