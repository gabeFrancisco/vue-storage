import db from "../db";

async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<boolean> {
  try {
    const query = `insert into public.users(id, username, email, password, createdAt) values (default, '${username}', '${email}', '${password}', '${new Date().toISOString()}');`;
    console.log(query);
    return await db.raw(query);
  } catch (ex) {
    console.log(ex);
    return false;
  }
}

export default { registerUser };
