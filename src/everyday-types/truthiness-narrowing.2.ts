function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values)
    return values;
  else
    return values.map((e) => e * factor);
}

const r = multiplyAll([1, 2, 3], 2);

console.log(r);
