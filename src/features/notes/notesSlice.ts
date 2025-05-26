import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { Note } from "./Note.types";

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    { id: nanoid(), text: "Welcome to Simple Notes!", timestamp: Date.now() },
    {
      id: nanoid(),
      text: "Use Redux Toolkit for state management.",
      timestamp: Date.now() - 100000,
    },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action: PayloadAction<Note>) => {
        state.notes.unshift(action.payload); // Add to the beginning
      },
      prepare: (text: string) => {
        const id = nanoid();
        const timestamp = Date.now();
        return { payload: { id, text, timestamp } };
      },
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    // Future: editNote, toggleNoteComplete, etc.
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
