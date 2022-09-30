class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let user = new User(2, "Asuka", "female");

console.log(user);
