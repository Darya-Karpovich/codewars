function rgb(r, g, b) {
  const hex = (r) => (r < 0 ? 0 : r > 255 ? 255 : r).toString(16);
  rh = hex(r);
  gh = hex(g);
  bh = hex(b);

  return (
    (rh.length == 1 ? "0" + rh : rh) +
    (gh.length == 1 ? "0" + gh : gh) +
    (bh.length == 1 ? "0" + bh : bh)
  ).toUpperCase();
}
