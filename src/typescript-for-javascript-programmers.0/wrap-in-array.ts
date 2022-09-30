function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string")
    return [obj];
  return obj;
}

let arr = wrapInArray("verbose");

console.log(arr);

