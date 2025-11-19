import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface User {
    username: string,
    email: string,
    password: string,
    role: string
}
interface AuthState {
    creators: User[],
    resolvers: User[],
    currentUser: User | null,
    isLoading: boolean,
    isError: boolean
}

const initialState: AuthState = {
    creators: [],
    resolvers: [],
    currentUser: null,
    isLoading: false,
    isError: false
}

export const fetchUserByEmail = createAsyncThunk(
    'users/findByEmail',
    async (email: string) => {
        const response = await axios.get(`http://localhost:3001/users/findByEmail/${email}`);
        return response.data;
    }
);

export const fetchCreators = createAsyncThunk(
    'users/creators',
    async () => {
        const response = await axios.get(`http://localhost:3001/users/creators`);
        return response.data;
    }
);

export const fetchResolvers = createAsyncThunk(
    'users/resolvers',
    async () => {
        const response = await axios.get(`http://localhost:3001/users/resolvers`);
        return response.data;
    }
);
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserByEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserByEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(fetchUserByEmail.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchCreators.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCreators.fulfilled, (state, action) => {
                state.isLoading = false;
                state.creators = action.payload; 
            })
            .addCase(fetchCreators.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchResolvers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchResolvers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.resolvers = action.payload; 
            })
            .addCase(fetchResolvers.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
})

export default authSlice.reducer;