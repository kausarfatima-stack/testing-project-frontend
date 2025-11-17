import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState{
    name: string,
    email: string,
    password: string,
    role: string
}

const initialState: AuthState = {
    name: "",
    email: "",
    password: "",
    role: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       addUser: (state, action: PayloadAction<AuthState>) => {
         state.name = action.payload.name,
         state.email = action.payload.email,
         state.password = action.payload.password,
         state.role = action.payload.role
       }
    }
})

export const {addUser} = authSlice.actions;

export default authSlice.reducer;