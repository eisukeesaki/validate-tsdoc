type Options = "verbose" | "debug" | "quiet";

let option: Options = "random"; // not assignable error

console.log(option);
