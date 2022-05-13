import React from 'react'
import { Icons } from '../UI/Icons'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <Icons
                name={'logo'}
                width={'155'}
                height={'64'}
                color={`var(--logo-color)`}
            />
        </footer>
    )
}

export { Footer }
