type CustomArray = Array<{ id: number, name: string }>;

let a: CustomArray = [
  {
    id: 42,
    name: "Asuka"
  },
  {
    id: 5,
    name: "Rei"
  },
  {
    id: 120,
    username: "Shinji" // not assignable
  },
];

console.log(a);
