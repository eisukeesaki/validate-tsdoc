interface User {
  id: number;
  name: string;
}

class UserAccount {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let user: User = new UserAccount(42, "Asuka", true);

console.log(user);
