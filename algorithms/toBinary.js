function toBinary(v) {
  if (!Number.isSafeInteger(v) || v < 0) {
    throw new Error('v must be a non-negative integer');
    }
  if (v === 1) {
    return '1';
  }
  if (v === 0) {
    return '0';
  }
  return toBinary(Math.floor(v / 2)) + (v % 2);
}

console.log(toBinary(255));
