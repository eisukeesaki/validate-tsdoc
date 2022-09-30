function fn(p: string[] | null) {
  if (typeof p === "object" && p === null)
    console.log("parameter is null");
  else if (typeof p === "object")
    console.log("parameter is an array of strings");
  else
    throw new Error("unhandled case");
}

fn(["a", "b", "c"]);

