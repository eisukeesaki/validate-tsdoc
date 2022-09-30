function f(p: string | string[] | null) {
  if (typeof p === "object" && p === null)
    console.log("p is null");
  else if (typeof p === "string")
    console.log("p is a string");
  else if (typeof p === "object")
    console.log("p is an array of string");
  else
    throw new Error("unhandled case");
}

f(["helllo", "world"]);
