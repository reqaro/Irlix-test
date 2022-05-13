import React from 'react'
import { useAppSelector } from '../../hooks/redux'

const List = () => {
    const { notes } = useAppSelector((state) => state.notesSlice)

    return (
        <div className={'list'}>
            <div className={'list__title'}>Список:</div>
            <ul className={'list__items'}>
                {notes.length ? (
                    notes.map((note, index) => (
                        <li
                            key={`${index}_${note.noteNumber}`}
                            className={'list__item'}
                        >
                            {`${note.noteNumber}) ${note.noteText}`}
                        </li>
                    ))
                ) : ( // если список(array notes) пуст
                    <li className={'list__item'}>Список пуст</li>
                )}
            </ul>
        </div>
    )
}

export { List }
