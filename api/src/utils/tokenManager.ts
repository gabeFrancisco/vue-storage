import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.TOKEN_SECRET as string;
const exp = process.env.TOKEN_EXP;

function generateToken(id: number, username: string) {
  return jwt.sign(
    {
      id: id,
      username: username,
    },
    secret,
    { expiresIn: exp, header: { alg: "HS256", typ: "JWT" } }
  );
}

function verifyToken(token: string): any {
  const verified = jwt.verify(token, secret);
  if (verified) {
    return verified;
  }
}

export default {
  generateToken,
  verifyToken,
};
