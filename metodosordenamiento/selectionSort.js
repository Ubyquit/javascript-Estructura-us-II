let items = ["Piedra", "Madera", "Diamante", "Hierro", "Oro"];

function selectionSort(item) {
  let longitud = item.length;

  for (let i = 0; i < longitud; i++) {
    let menor = i;
    for (let j = i + 1; j < longitud; j++) {
      if (item[j] < item[menor]) {
        menor = j;
      }
    }
    if (menor != i) {
      [item[i], item[menor]] = [item[menor], item[i]];
    }
  }
  return item;
}

console.log(selectionSort(items));
