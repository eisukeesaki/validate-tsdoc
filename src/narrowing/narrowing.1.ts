function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number")
    return " ".repeat(padding) + input;
  return padding + input;
}

const v = padLeft(3, "hello");

console.log(v);
