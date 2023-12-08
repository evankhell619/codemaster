function generateFibonacci(limit) {
  const fibonacciSeries = [0, 1];

  while (fibonacciSeries[fibonacciSeries.length - 1] + fibonacciSeries[fibonacciSeries.length - 2] <= limit) {
    const nextFibonacci = fibonacciSeries[fibonacciSeries.length - 1] + fibonacciSeries[fibonacciSeries.length - 2];
    fibonacciSeries.push(nextFibonacci);
  }

  return fibonacciSeries;
}

// Example usage:
const limit = 5;
const fibonacciResult = generateFibonacci(limit);

console.log(`Deret Fibonacci sampai dengan angka ${limit}: ${fibonacciResult.join(', ')}`);
