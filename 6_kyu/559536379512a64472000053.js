function playPass(s, n) {
  let isOdd = true;
  res = s.toLowerCase().split("").map(transform).reverse().join("");

  function transform(e) {
    if (!Number.isNaN(parseInt(e))) {
      e = "" + Math.abs(9 - e);
    }

    const i = e.charCodeAt(0);

    if (i > 96 && i < 123) {
      if (i + n > 122) {
        e = String.fromCharCode(i + n - 26);
      } else {
        e = String.fromCharCode(i + n);
      }
    }

    if (isOdd) {
      e = e.toUpperCase();
    }

    isOdd = !isOdd;
    return e;
  }

  return res;
}
