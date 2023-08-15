let items = ["Piedra", "Madera", "Diamante", "Hierro", "Oro"];

function insertionSort(item) {
  let longitud = item.length;
  for (let i = 1; i < longitud; i++) {
    let key = item[i];
    let j = i - 1;

    while (j >= 0 && item[j] > key) {
      item[j + 1] = item[j];
      j = j - 1;
    }
    item[j + 1] = key;
  }
  return item;
}

console.log(insertionSort(items));
