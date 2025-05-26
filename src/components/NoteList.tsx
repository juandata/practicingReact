import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import NoteItem from './NoteItem';
import { List, Typography, Box } from '@mui/material';

const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);

    if (notes.length === 0) {
        return (
            <Typography variant="subtitle1" color="text.secondary" textAlign="center">
                No notes yet. Add one above!
            </Typography>
        );
    }

    return (
        <Box sx={{ maxHeight: '60vh', overflowY: 'auto', pr: 1 /* For scrollbar */ }}>
            <List>
                {notes.map((note) => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </List>
        </Box>
    );
};

export default NoteList;
