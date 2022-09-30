function f(p: number | string | boolean) {
  if (typeof p === "number")
    p;
  else if (typeof p === "string")
    p;
  else if (typeof p === "boolean")
    p;
  else {
    const x: string = p; // p is of type never, and is assignable to any type
  }
}

