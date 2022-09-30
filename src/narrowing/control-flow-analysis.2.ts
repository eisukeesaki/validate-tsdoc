function f() {
  let x: string | number | boolean;

  x = Math.random() < 0.5; // x: boolean

  if (Math.random() < 0.5) {

    x = "hello"; // x: string

  } else {

    x = 42; // x: number

  }

  return x; // x: string | number

}
