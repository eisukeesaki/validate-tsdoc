function f(x: string | number, y: string | boolean) {
  if (x === y)
    return y.toUpperCase();
  else
    return;
}

const v = f("hello", "hello");

console.log(v);
