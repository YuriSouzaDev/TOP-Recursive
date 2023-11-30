function fibs(n) {
  let arr = [0, 1];

  if (n === 0) return 'Insert a valid number';
  if (n === 1) return arr.shift();
  if (n === 2) return arr;
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}

console.log(fibs(8));

function fibsRecursive(n, arr = [0, 1]) {
  if (arr.length >= n) return arr;

  return fibsRecursive(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
}

console.log(fibsRecursive(8));
