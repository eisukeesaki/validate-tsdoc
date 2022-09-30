function getType(p: string | string[] | null) {
  if (p && typeof p === "object")
    console.log("argument is an array of strings");
  else if (typeof p === "string")
    console.log("argument is a string");
  else
    console.log("argument is null");
}

const v = getType("a");
