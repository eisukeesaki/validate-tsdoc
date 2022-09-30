interface User {
  id: number;
  name: string;
}

function logUser(user: User) {
  console.log(`${user.id}, ${user.name}`);
}

let user = { id: 2 }; // 2, undefined
// let user = { id: 2, name: "Asuka" };
// let user = { id: 2, name: "Asuka", gender: "female" };

logUser(user);

