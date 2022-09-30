function wrapInArray(o: object): Array<object> {
  if (typeof o === "object")
    return [o];
  return o;
}

let v: object = wrapInArray({ key: "value" });

console.log(v);
