const { getDatabase } = require("./../config/mongodb");

class UserModel {
  static async createUser(dataUser) {
    const databaseUsers = this.getDatabaseCollection();
    await databaseUsers.createIndexes({ email: 1 }, { unique: true });
    return databaseUsers.insertOne(dataUser);
  }

  static getDatabaseCollection() {
    return getDatabase().collection("users");
  }
}

module.exports = UserModel;