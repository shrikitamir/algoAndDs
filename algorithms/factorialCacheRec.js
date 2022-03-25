const factorialRecursion = () => {
  const cache = {1: 1};
  return function innerFactorialRecursion(n) {
    if (n in cache) return cache[n];
    cache[n] = n * innerFactorialRecursion(n - 1);
    console.log(cache);
    return cache[n];
  };
};

const closureFactorialRecursion = factorialRecursion();

console.log(closureFactorialRecursion(5))