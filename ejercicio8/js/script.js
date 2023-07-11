function comprarHelado(argNombre) {

  let dinero = parseInt(prompt(`${argNombre} 💵 Ingresa el dinero para comprar`))

  let pUva = 15;
  let pFresa = 15;
  let pCrema = 25;
  let bYogurt = 45;
  let bFresa = 45;
  let bNapolitano = 50;

  if (dinero > 14 && dinero < 25) {
    let opcion = prompt(
      `Puedes comprar \n[1] Paleta de Uva $${pUva} 🍇\n[2] Paleta de Fresa $${pFresa} 🍓\n[3] Salir ❌`
    );

    if (opcion == 1) {
      let cambio = dinero - pUva;
      alert(`😄 Gracias! haz comprado la Paleta de Uva $${pUva} 🍇
      \nTu cambio es: ${cambio}`);
    } else if (opcion == 2) {
      let cambio = dinero - pFresa;
      alert(`😄 Gracias! haz comprado la Paleta de Fresa $${pFresa} 🍓
      \nTu cambio es: ${cambio}`);
    } else {
      alert(`😄 Gracias por tu preferencia, vuelva pronto!`);
    }
  }

  if (dinero > 24 && dinero < 45) {
    let opcion = prompt(
      `Puedes comprar \n[1] Paleta de Crema $${pCrema} 🍦\n[2] Salir ❌`
    );

    if (opcion == 1) {
      let cambio = dinero - pCrema;
      alert(`😄 Gracias! haz comprado la paleta de Crema $${pCrema} 🍇
      \nTu cambio es: ${cambio}`);
    } else {
      alert(`😄 Gracias por tu preferencia, vuelva pronto!`);
    }
  }

  if (dinero > 44 && dinero < 50) {
    let opcion = prompt(
      `Puedes comprar \n[1] Bote de Yogurt $${bYogurt} 🍨\n[2]  Bote de Fresa $${bFresa} 🍧\n[3] Salir ❌`
    );

    if (opcion == 1) {
      let cambio = dinero - bYogurt;
      alert(`😄 Gracias! haz comprado el Bote de Yogurt $${bYogurt} 🍨
      \nTu cambio es: ${cambio}`);
    } else if (opcion == 2) {
      let cambio = dinero - bFresa;
      alert(`😄 Gracias! haz comprado el Bote de Fresa $${bFresa} 🍧
      \nTu cambio es: ${cambio}`);
    } else {
      alert(`😄 Gracias por tu preferencia, vuelva pronto!`);
    }
  }

  if (dinero >= 50) {
    let opcion = prompt(
      `Puedes comprar \n[1] Bote de Napolitano $${bNapolitano} 🍮\n[2] Salir ❌`
    );

    if (opcion == 1) {
      let cambio = dinero - pCrema;
      alert(`😄 Gracias! haz comprado el Bote de Napolitano $${bNapolitano} 🍮
      \nTu cambio es: ${cambio}`);
    } else {
      alert(`😄 Gracias por tu preferencia, vuelva pronto!`);
    }
  } else {
    alert(`😄 No tienes dinero suficiente, vuelva pronto!`);
  }
}

comprarHelado("Luis");
comprarHelado("Bianca");
comprarHelado("Vale");