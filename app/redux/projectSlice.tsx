import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface Project {
    id: number;
    name: string;
    description: string;
    creatorEmail: string;
}

interface ProjectState {
    projects: Project[];
    currentProject: Project | null;
    userProjects: Project[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: ProjectState = {
    projects: [],
    currentProject: null,
    userProjects: [],
    isLoading: false,
    isError: false
}

export const createProject = createAsyncThunk(
    'projects/create',
    async (projectData: any) => {
        const response = await axios.post(`http://localhost:3001/projects`, projectData);
        return response.data;
    }
);

export const fetchProjectById = createAsyncThunk(
    'projects/byId',
    async (id: number) => {
        const response = await axios.get(`http://localhost:3001/projects/currentProject/${id}`);
        return response.data;
    }
);

export const fetchProjectsByUserEmail = createAsyncThunk(
    'projects/byUserEmail',
    async (email: string) => {
        const response = await axios.get(`http://localhost:3001/projects/userProjects/${email}`);
        return response.data;
    }
);

export const fetchAllProjects = createAsyncThunk(
    'projects/all',
    async () => {
        const response = await axios.get(`http://localhost:3001/projects`);
        return response.data;
    }
);

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createProject.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.projects.push(action.payload);
            })
            .addCase(createProject.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchProjectById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProjectById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentProject = action.payload;
            })
            .addCase(fetchProjectById.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchProjectsByUserEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProjectsByUserEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userProjects = action.payload;
            })
            .addCase(fetchProjectsByUserEmail.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchAllProjects.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProjects.fulfilled, (state, action) => {
                state.isLoading = false;
                state.projects = action.payload;
            })
            .addCase(fetchAllProjects.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default projectSlice.reducer;