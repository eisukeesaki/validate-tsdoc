type User = {
  id: number;
  name: string;
}

type Admin = User & {
  writeAccess: boolean;
}

const v: Admin = {
  id: 2,
  name: "Asuka",
  writeAccess: true
};

console.log(v);
