interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  writeAcess: boolean;
}

const v: Admin = {
  id: 2,
  name: "Asuka",
};

console.log(v);
