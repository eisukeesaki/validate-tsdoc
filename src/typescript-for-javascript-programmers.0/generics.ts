interface I<Type> {
  log(msg: Type) {
  console.log(msg);
};
}

declare const i: I<string>;

i.log("hello");
