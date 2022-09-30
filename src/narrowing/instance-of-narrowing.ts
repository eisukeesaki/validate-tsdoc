function f(p: Date | number) {
  if (p instanceof Date)
    return p.toUTCString();
  else
    return p;
}

const d = f(new Date());
const n = f(42);

console.log(d);
console.log(n);
