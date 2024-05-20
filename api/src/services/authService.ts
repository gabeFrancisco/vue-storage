import db from "../db";

async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<boolean> {
  try {
    const query = `insert into public.users values (null, "${username}", "${email}", "${password}", "", "");`;
    return await db.query(query).then(() => true);
  } catch (ex) {
    console.log(ex);
    return false;
  }
}

export default { registerUser };
