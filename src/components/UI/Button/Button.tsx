import React from 'react'

type Props = {
    className?: string
    onClick: () => void
    children: any
}

const Button = ({ className, onClick, children }: Props) => {
    return (
        <div>
            <button
                className={`button ${className ? className : ''}`}
                onClick={onClick}
                type={'button'}
            >
                <span className={'button__text'}>{children}</span>
            </button>
        </div>
    )
}

export { Button }
