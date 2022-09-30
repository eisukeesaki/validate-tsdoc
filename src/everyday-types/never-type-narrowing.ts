interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLen: number;
}

interface Triangle {
  kind: "triangle";
  sideLen: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLen * shape.sideLen;
    default: {
      const x: never = shape; // Triangle not assignable to never
      return x;
    }
  }
}


