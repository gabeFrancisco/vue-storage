import db from "../db";
import { User } from "../models/User";
import bcrypt from "bcrypt";

async function getAllUsers(): Promise<User[]> {
  const users = (await db.table<User>("users")).map((user) => {
    user.password = "";
    return user;
  });
  return users;
}

async function getUserByUsername(username: string) {
  return await db.table<User>("users").where("username", username).first();
}

async function loginUser(
  username: string,
  password: string
): Promise<{ user: User; exp: string } | { message: string }> {
  const user = await getUserByUsername(username);

  if (!user) {
    return { message: "Invalid username!" };
  }

  if (bcrypt.compareSync(password, user.password)) {
    user.password = "";
    return {
      user: user,
      exp: process.env.TOKEN_EXP as string,
    };
  } else {
    return { message: "Incorrect password!" };
  }
}

async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<boolean> {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user: User = {
      username: username,
      email: email,
      password: hash,
      created_at: new Date(),
    };

    //Execute knex insert query
    return await db.table("users").insert(user);
  } catch (ex) {
    console.log(ex);
    return false;
  }
}

export default { getAllUsers, registerUser, loginUser, getUserByUsername };
