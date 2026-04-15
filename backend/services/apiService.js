import axios from "axios";
import User from "../models/User.js";

export const fetchAndSaveUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");

  const users = response.data;

  for (let u of users) {
    // حاول يحفظ كل مستخدم لو مش موجود
    await User.updateOne(
      { email: u.email },
      { name: u.name, phone: u.phone },
      { upsert: true } // لو مش موجود يضيفه
    );
  }

  return users;
};