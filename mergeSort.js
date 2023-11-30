const inputArr = [9, 3, 0, 5, 8, 4];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const number = arr[0];
  const arrleft = arr.slice(1).filter((elemento) => elemento <= number);
  const arrRight = arr.slice(1).filter((elemento) => elemento > number);
  return [...mergeSort(arrleft), number, ...mergeSort(arrRight)];
}

console.log(mergeSort(inputArr));
