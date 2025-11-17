import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BugState{
    title: string,
    description?: string,
    deadline: string,
    type: string,
    image?: File
    status: string,
    creator: string,
    resolver: string,
    project: string,
}

const initialState: BugState = {
    title: "",
    deadline: "",
    type: "",
    status: "",
    creator: "",
    resolver: "",
    project: "",
}

const BugSlice = createSlice({
    name: "Bug",
    initialState,
    reducers: {
       addBug: (state, action: PayloadAction<BugState>) => {
         state.title = action.payload.title,
         state.description = action.payload.description,
         state.deadline = action.payload.deadline,
         state.type = action.payload.type,
         state.status = action.payload.status,
         state.creator = action.payload.creator,
         state.resolver = action.payload.resolver,
         state.project = action.payload.project,
         state.image = action.payload.image
       }
    }
})

export const {addBug} = BugSlice.actions;

export default BugSlice.reducer;