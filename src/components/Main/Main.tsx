import React from 'react'
import { Form } from '../Form'
import { List } from '../List'

const Main = () => {
    return (
        <main className={'main'}>
            <div className={'container'}>
                <div className={'main__info'}>
                    <h1 className={'main__title'}>Приветствую!</h1>
                    <h2 className={'main__subtitle'}>
                        Давай обновим список и начнем обучение
                    </h2>
                </div>
                <div className={'list-form__wrapper'}>
                    <List />
                    <Form />
                </div>
            </div>
        </main>
    )
}

export { Main }
