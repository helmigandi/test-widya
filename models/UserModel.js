const { getDatabase } = require("./../config/mongodb");
const { ObjectId } = require("mongodb");

class UserModel {
  static async createUser(dataUser) {
    const databaseUsers = this.getDatabaseCollection();
    await databaseUsers.createIndexes({ email: 1 }, { unique: true });
    return databaseUsers.insertOne(dataUser);
  }

  static async findByEmail(email) {
    const databaseUsers = this.getDatabaseCollection();
    return databaseUsers.findOne({ email });
  }

  static async findById(_id) {
    const databaseUsers = this.getDatabaseCollection();
    return databaseUsers.findOne({ _id: ObjectId(_id) });
  }

  static getDatabaseCollection() {
    return getDatabase().collection("users");
  }
}

module.exports = UserModel;
