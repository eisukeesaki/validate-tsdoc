function add(a: number, b: number): number {
  return a + b;
}

function validate(i) {
  if (typeof i !== "number")
    return 1;
  return 0;
}

let sum = add(40, "two");
let res = validate(sum);

console.log(res);

