import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice';
import { Button, TextField, Box } from '@mui/material';

const NoteForm: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addNote(text.trim()));
            setText('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, display: 'flex', gap: 1 }}>
            <TextField
                label="New Note"
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                size="small"
            />
            <Button type="submit" variant="contained" color="primary" disabled={!text.trim()}>
                Add Note
            </Button>
        </Box>
    );
};

export default NoteForm;
