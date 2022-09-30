function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number")
    return " ".repeat(padding) + input;
  else
    return padding + input;
}

const v = padLeft(4, "to my left is an padding consisting of 4 spaces");

console.log(v);
