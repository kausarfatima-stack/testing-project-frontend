import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface Bug {
    id: number;
    title: string;
    description?: string;
    deadline: string;
    type: string;
    image?: File | string; 
    status: string;
    creator: string; 
    resolver: string; 
    project: string;
}

interface BugState {
    bugs: Bug[];
    currentProjectBugs: Bug[];
    creatorBugs: Bug[];
    resolverBugs: Bug[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: BugState = {
    bugs: [],
    currentProjectBugs: [],
    creatorBugs: [],
    resolverBugs: [],
    isLoading: false,
    isError: false
}

export const createBug = createAsyncThunk(
    'bugs/create',
    async (bugData: FormData) => {
        const response = await axios.post(`http://localhost:3001/bug`, bugData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
);

export const fetchBugsByProjectId = createAsyncThunk(
    'bugs/byProject',
    async (pId: number) => {
        const response = await axios.get(`http://localhost:3001/bug/currentProjectBug/${pId}`);
        return response.data;
    }
);

export const fetchBugsByCreatorId = createAsyncThunk(
    'bugs/byCreator',
    async (dId: number) => {
        const response = await axios.get(`http://localhost:3001/bug/BugCreator/${dId}`);
        return response.data;
    }
);

export const fetchBugsByResolverId = createAsyncThunk(
    'bugs/byResolver',
    async (rId: number) => {
        const response = await axios.get(`http://localhost:3001/bug/BugResolver/${rId}`);
        return response.data;
    }
);

const bugSlice = createSlice({
    name: "bugs",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBug.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createBug.fulfilled, (state, action) => {
                state.isLoading = false;
                state.bugs.push(action.payload);
            })
            .addCase(createBug.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchBugsByProjectId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchBugsByProjectId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentProjectBugs = action.payload;
            })
            .addCase(fetchBugsByProjectId.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchBugsByCreatorId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchBugsByCreatorId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.creatorBugs = action.payload;
            })
            .addCase(fetchBugsByCreatorId.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchBugsByResolverId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchBugsByResolverId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.resolverBugs = action.payload;
            })
            .addCase(fetchBugsByResolverId.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default bugSlice.reducer;