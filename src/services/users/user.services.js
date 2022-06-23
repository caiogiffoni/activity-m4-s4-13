import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";
import database from "../../database";

export async function createUserService(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    const res = await database.query(
      `INSERT INTO
                users (id, name, email, password)
            VALUES
                ($1, $2, $3, $4)
            RETURNING id, name, email`,
      [uuidv4(), data.name, data.email, hashedPassword]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}

export async function listUserService() {
  try {
    const res = await database.query(`
            SELECT
                id, name, email
            FROM
                users;
        `);

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
}
