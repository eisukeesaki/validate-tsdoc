type Fish = { swim: () => "swimming..." };
type Bird = { fly: () => "flying..." };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

const salmon: Fish = { swim: () => "swimming..." };
// const hawk: Bird = { fly: () => "flying..." };

let b = "helllo";
b = isFish(salmon); // boolen not assignable to string

console.log(b);
