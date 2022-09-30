function fn(p1: number, p2: number, p3?: number): number {
  let rv = 0;

  if (p1 !== undefined)
    rv += p1

  if (p2 !== undefined)
    rv += p2

  if (p3 !== undefined)
    rv += p3

  return rv;
}

const v = fn(1, 2);

console.log(v);
