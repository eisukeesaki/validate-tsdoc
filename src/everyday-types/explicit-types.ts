function checkin(username: string, date: Date) {
  console.log(`Hello ${username}, you have checked in at ${date.toDateString()}`);
}

checkin("Asuka", new Date());
