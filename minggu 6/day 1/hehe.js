const arr = [1, 2, 3, 2, 4, 2, 5, 1];
const n = arr.length;

function mostValue(arr) {
  let maxCount = 0;
  let result;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      result = arr[i];
    }
  }
  return result;
}

console.log(mostValue(arr, n));
