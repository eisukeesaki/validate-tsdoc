function fn(p: number | string) {
  if (typeof p === "number")
    console.log("p is a number");
  else
    console.log("p is string");
}

fn(42);
