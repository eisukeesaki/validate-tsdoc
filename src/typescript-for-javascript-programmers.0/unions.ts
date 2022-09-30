type Strs = string | string[];
type Funcs = "quiet" | "verbose";
type Opts = Strs & Funcs;

function f(options: Opts) {
  console.log(options);

  return 0;
}

let options: Opts = ["quiet", "verbose"];

f(options);
