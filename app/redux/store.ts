import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import bugReducer from './bugSlice';
import projectReducer from './projectSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bug: bugReducer,
        project: projectReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['bug/addBug'],
        ignoredActionPaths: ['payload.image'],
        ignoredPaths: ['bug.image'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;