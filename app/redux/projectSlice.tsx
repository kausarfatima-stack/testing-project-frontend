import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState{
    name: string,
    description: string,
    creator: string,
}

const initialState: ProjectState = {
    name: "",
    description: "",
    creator: "",
}

const ProjectSlice = createSlice({
    name: "Project",
    initialState,
    reducers: {
       addProject: (state, action: PayloadAction<ProjectState>) => {
         state.name = action.payload.name,
         state.description = action.payload.description,
         state.creator = action.payload.creator
       }
    }
})

export const {addProject} = ProjectSlice.actions;

export default ProjectSlice.reducer;