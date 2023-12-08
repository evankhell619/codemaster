function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join it back into a string
  return str.split('').reverse().join('');
}

// Example usage:
const originalString = 'PopolKupa';
const reversedString = reverseString(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);


function generateFibonacci(length) {
  let fiboArr = [0,1];
  for (let i = 2; i < length; i++) {
    fiboArr.push(fiboArr[i-2] + fiboArr[i-1]);
  }
  return fiboArr;
}
console.log(generateFibonacci(7));

