let items = ["Piedra", "Madera", "Diamante", "Hierro", "Oro"];

function bubbleSort(item) {
  let longitud = item.length;

  for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < longitud - i - 1; j++) {
      if (item[j] > item[j + 1]) {
        [item[j], item[j + 1]] = [item[j + 1], item[j]];
      }
     }
  }
  return item;
}

console.log(bubbleSort(items));
