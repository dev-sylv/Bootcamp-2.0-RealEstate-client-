import axios from "axios";

interface UserData {
  name: string;
  email: string;
  Image: string;
  Bio: string;
  phoneno: number;
  password: string;
  confirmPassword: string;
  role: string;
  houses: {}[];
}

const Endpoint = "https://realestate-kuk6.onrender.com/api";

// USER SIGN UP
export const UserSignUp = async ({
  name,
  email,
  password,
  confirmPassword,
  phoneno,
}: UserData) => {
  return await axios
    .post(`${Endpoint}/registeruser`, {
      name,
      email,
      password,
      confirmPassword,
      phoneno,
    })
    .then((res) => res.data.data);
};

// USER SIGN IN
export const UsersLogin = async ({ email, password }: UserData) => {
  return await axios
    .post(`${Endpoint}/loginuser`, {
      email,
      password,
    })
    .then((res) => res.data.data);
};

// AGENT SIGN UP

// AGENT SIGN IN
