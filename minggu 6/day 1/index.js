const arr = [4, 3, 2, 1];
const reve = [];
function reversedArray(arr) {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}
console.log(reversedArray(arr));
