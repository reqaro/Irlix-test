import React, { useMemo, useState } from 'react'
import { addNote } from '../../store/reducers/NotesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'

const Form = () => {
    const dispatch = useAppDispatch()
    const { notes } = useAppSelector((state) => state.notesSlice)

    const [noteNumber, setNoteNumber] = useState('')
    const [noteText, setNoteText] = useState('')

    const isThisNoteNumberUsed = useMemo(
        () => notes.some((note) => note.noteNumber === noteNumber),
        [noteNumber, notes]
    )

    const addItemInNotes = () => {
// если такой номер записи уже существует в массиве notes
        if (isThisNoteNumberUsed) {
            alert('Номер записи занят')
            return null
        }
// если поля ввода noteNumber && noteText не пусты
        if (noteNumber && noteText) {
            setNoteNumber('')
            setNoteText('')
            dispatch(
                addNote({
                    noteNumber: noteNumber,
                    noteText: noteText,
                })
            )
        } else {
            alert('Заполните поля ввода')
        }
    }

    return (
        <div className={'form'}>
            <Input
                title={'Номер записи'}
                value={noteNumber}
                type={'number'}
                onChange={(e) => setNoteNumber(e.target.value)}
            />
            <Input
                title={'Название записи'}
                value={noteText}
                type={'text'}
                onChange={(e) => setNoteText(e.target.value)}
            />
            <Button onClick={addItemInNotes}>Добавить в список</Button>
        </div>
    )
}

export { Form }
