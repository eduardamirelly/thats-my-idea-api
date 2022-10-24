import * as bcrypt from "bcrypt";

import { BCRYPT_SALT_ROUNDS } from "../config/env";

export default async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
}
