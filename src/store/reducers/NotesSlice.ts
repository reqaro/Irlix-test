import { Notes } from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { storage } from '../../storage'

export type NotesState = {
    notes: Notes[]
}

const initialState: NotesState = {
    // если в localStorage есть 'notes', то берем их, иначе пустой массив.
    notes: storage.getItem('notes') ? storage.getItem('notes') : [],
}

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Notes>) => {
            state.notes.push(action.payload)
            //сортировка по возрастанию
            state.notes.sort(
                (a: Notes, b: Notes) =>
                    parseFloat(a.noteNumber) - parseFloat(b.noteNumber)
            )
            storage.setItem('notes', state.notes)
        },
    },
})

export const { addNote } = notesSlice.actions

export default notesSlice.reducer
