import {
  createUserService,
  listUserService,
} from "../services/users/user.services";

export async function createUser(req, res) {
  console.log("oi");
  try {
    const user = await createUserService(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function listUser(req, res) {
  console.log("entrei no get");
  try {
    const users = await listUserService();

    return res.json(users);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
