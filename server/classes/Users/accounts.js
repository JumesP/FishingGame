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

    static Login(username, password) {
        return openDatabase().then(async (db) => {
            const result = await db.all("SELECT * FROM Accounts WHERE Username = ? AND Password = ?", [username, password]);
            console.log(result);
            return result;
        });
    }

    static async createAccount(username, password) {
        return openDatabase().then(async (db) => {
            await db.run(
                "INSERT INTO Accounts (Username, Password) VALUES (?, ?)",
                [username, password]
            );
            const result = await db.all("SELECT * FROM Users WHERE Username = ?", username);
            console.log(result);
            return result;
        });
    }

    static async getAccountByUsername(username) {
        return openDatabase().then(async (db) => {
            const result = await db.all("SELECT * FROM Users WHERE Username = ?", username);
            console.log(result);
            return result;
        });
    }
}

module.exports = Account;