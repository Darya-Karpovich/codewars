function connotation(str) {
  const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
  const b = str.split(" ").filter(Boolean);

  function calculate(m) {
    let k = 0;
    for (let i = 0; i < m.length; i++) {
      if (a.includes(m[i].charAt(0).toLowerCase())) {
        k++;
      }
    }
    return k / m.length > 0.5;
  }
  return calculate(b);
}
