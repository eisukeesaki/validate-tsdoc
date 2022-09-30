function f(p: number | undefined | null) {
  if (p != null)
    console.log("p is a number");
  else
    console.log("p is either undefined or null");
}

f(42);
f(undefined);
f(null);
