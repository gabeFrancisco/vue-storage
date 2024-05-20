import db from "../db";
import { User } from "../models/User";

async function getAllUsers(): Promise<User[]> {
  return await db.table("users");
}

async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<boolean> {
  try {
    const user: User = {
      username: username,
      email: email,
      password: password,
      created_at: new Date(),
    };

    //Execute knex insert query
    return await db.table("users").insert(user);
  } catch (ex) {
    console.log(ex);
    return false;
  }
}

export default { getAllUsers, registerUser };
