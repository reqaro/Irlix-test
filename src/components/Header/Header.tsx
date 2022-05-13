import React from 'react'
import { Icons } from '../UI/Icons'

const Header = () => {
    return (
        <header className={'header'}>
            <Icons
                name={'logo'}
                width={'155'}
                height={'64'}
                color={`var(--logo-color)`}
            />
        </header>
    )
}

export { Header }
