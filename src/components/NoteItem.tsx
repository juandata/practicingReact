import React from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../features/notes/Note.types';
import { deleteNote } from '../features/notes/notesSlice';
import { ListItem, ListItemText, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface NoteItemProps {
    note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteNote(note.id));
    };

    return (
        <Paper elevation={2} sx={{ mb: 1.5, '&:hover': { boxShadow: 5 } }}>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete} color="error">
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemText
                    primary={<Typography variant="body1">{note.text}</Typography>}
                    secondary={`Added: ${new Date(note.timestamp).toLocaleString()}`}
                />
            </ListItem>
        </Paper>
    );
};

export default NoteItem;
