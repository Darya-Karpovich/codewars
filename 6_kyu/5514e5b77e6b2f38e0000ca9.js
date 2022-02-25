function upArray(a) {
  if (a.some((e) => e > 10 || e < 0) || a.length === 0) {
    return null;
  }
  return [...("" + (BigInt(a.join``) + 1n))].map(Number);
}
