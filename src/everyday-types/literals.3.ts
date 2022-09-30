function fn(p: "verbose" | "quiet"): void {
  if (p === "verbose")
    return console.log("blah blah blah");
  console.log("...");
}

fn("quiet");
