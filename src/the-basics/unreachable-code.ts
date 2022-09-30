function fn() {
  let v = Math.random() < 0.5 ? "a" : "b";

  if (v !== "a") // v is actually greater than 0.5
    return "v is smaller than 0.5";
  else if (v === "b")
    return "v is greater than 0.5"; // unreachable
}

console.log(v);
