const openDatabase = require('../../db');

class Account {
  constructor(username, password, email, level) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.level = level;
  }

  // getter
  getUsername() {
    console.log(this.username);
    return this.username;
  }

  getEmail() {
    console.log(this.email);
    return this.email;
  }

  // setter

  // methods
  getInfo() {
    return { username: this.username, email: this.email };
  }

  // changePassword(newPassword) {
  //   return openDatabase().then(async (db) => {
  //     await db.run("UPDATE Users SET Password = ? WHERE Username = ?", [newPassword, this.username]);
  //     const result = await db.all("SELECT * FROM Users WHERE Username = ?", this.username);
  //     console.log(result);
  //     return result;
  //   });
  // }

    // static methods




}

module.exports = Account;