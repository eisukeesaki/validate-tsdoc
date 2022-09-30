type Fish = { swim: () => "swim" };
type Bird = { fly: () => "fly" };
type Human = { fly?: () => "fly" };

function f(animal: Fish | Bird | Human) {
  if ("swim" in animal)
    return animal.swim();
  else
    return animal;
}

const salmon: Fish = { swim: () => "swim" };
const asuka: Human = {};

const r = f(asuka);

console.log(r);
