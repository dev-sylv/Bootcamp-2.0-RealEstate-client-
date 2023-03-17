import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const initialState = {
	currentUser : {} as UserData | null,
	Agent: {} as AgentData | null,
	Admin: {} as AdminData | null
}

const ReduxState = createSlice({
  name: "First Real-Estate",
  initialState,
  reducers: {
	UserLogin: (state, {payload}: PayloadAction<UserData>) =>{
		state.currentUser = payload
	},
	UserLogOut: (state) =>{
		state.currentUser = null
	},
    AgentLogin: (state, {payload}: PayloadAction<UserData>) =>{
		state.currentUser = payload
	},
	AgentLogOut: (state) =>{
		state.currentUser = null
	},
    AdminLogin: (state, {payload}: PayloadAction<UserData>) =>{
		state.currentUser = payload
	},
  }
});

export const { UserLogin, UserLogOut, AgentLogin, AgentLogOut, AdminLogin } = ReduxState.actions

export default ReduxState.reducer