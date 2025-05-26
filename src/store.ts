import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    // other reducers can be added here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {notes: NotesState, ...}
export type AppDispatch = typeof store.dispatch;
