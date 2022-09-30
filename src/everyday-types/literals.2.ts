function fn(p: boolean): 0 | 1 {
  if (p)
    return 0;
  return 1;
}

const v = fn(true);

if (v === 42)
  console.log("v === 42");
