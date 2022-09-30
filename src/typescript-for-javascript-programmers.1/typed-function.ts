function add(a: number, b: number): number {
  return a + b;
}

let sum = add(40, "2"); // argument is not assignable to parameter
// let sum = add(40, 2); // sum = 42

console.log(add)
