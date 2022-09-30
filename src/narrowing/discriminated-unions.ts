interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLen: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLen * shape.sideLen;
  }
}

const mySquare: Shape = {
  kind: "square",
  sideLen: 5,
};

const area = getArea(mySquare);

console.log(area);
