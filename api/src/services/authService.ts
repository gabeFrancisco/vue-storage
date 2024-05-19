import db from "../db";

export class AuthService {
  async registerUser(username: string, email: string, password: string) {
    const query = `insert into users values (null, "${username}", "${email}", "${password}", "", "");`;
    return db.query(query);
  }
}
