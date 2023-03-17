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
interface UserDatalog {
  email: string;

  password: string;
}

interface AgentData {
  name: string;
  email: string;
  Image: string;
  Bio: string;
  phoneno: number;
  password: string;
  confirmPassword: string;
  role: string;
  houses: {}[];
  users: {}[];
}

interface AdminData {
  name: string;
  email: string;
  Image: string;
  Bio: string;
  phoneno: number;
  password: string;
  confirmPassword: string;
  role: string;
  houses: {}[];
  users: {}[];
  agents: {}[];
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
export const UsersLogin = async ({ email, password }: UserDatalog) => {
  return await axios
    .post(`${Endpoint}/loginuser`, {
      email,
      password,
    })
    .then((res) => res.data.data);
};

// AGENT SIGN UP
export const AgentSignUp = async ({
  name,
  email,
  password,
  confirmPassword,
  phoneno,
}: AgentData) => {
  return await axios
    .post(`${Endpoint}/registeragents`, {
      name,
      email,
      password,
      confirmPassword,
      phoneno,
    })
    .then((res) => res.data.data);
};

// AGENT SIGN IN
export const LoginAgents = async ({ email, password }: AgentData) => {
  return await axios
    .post(`${Endpoint}/loginagents`, {
      email,
      password,
    })
    .then((res) => res.data.data);
};

//   ADMIN SIGN IN
export const LoginAdmin = async ({ email, password }: AdminData) => {
  return await axios
    .post(`${Endpoint}/loginadmin`, {
      email,
      password,
    })
    .then((res) => res.data.data);
};
